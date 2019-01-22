import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../models/account.model';
import { AccountLoginService } from '../services/accountlogin.service';
import { ActivatedRoute } from '@angular/router';
import { AtmService } from '../services/atm.service';
import { ResponseModel } from '../models/response.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public account: AccountModel;
  public cashOutValue: string;
  public responseNotes: ResponseModel;

  constructor(
    private readonly accountloginService: AccountLoginService,
    private readonly route: ActivatedRoute,
    private readonly atmService: AtmService
  ) {
  }

  ngOnInit() {

     
    let accountNumber: string;
    this.route.params.subscribe(params => {
      accountNumber = params['id']
      this.updateAccount(accountNumber);
    }, error => {
      alert(`Error: ${error.error.message}`);

    });    
  }

  public cashout(): void {

    this.atmService.cashout(this.account.accountNumber, this.cashOutValue).subscribe((responseNotes: ResponseModel) => {

      this.updateAccount(this.account.accountNumber);

      this.responseNotes = responseNotes;

    }, error => {
      alert(`Error: ${error.error.message}`);

    });
  }

  private updateAccount(accountNumber: string): void {

      this.accountloginService.getRegulatedAccounts().subscribe((accounts: Array<AccountModel>) => {
      this.account = accounts.filter((account: AccountModel) => account.accountNumber === accountNumber)[0];

    }, error => {
      alert(`Error: ${error.error.message}`);
    });
  }
}


