import { Component, OnInit } from '@angular/core';
import { AccountLoginService } from '../services/accountlogin.service';
import { AccountLoginFormModel } from '../models/accountlogin-form.model';
import { AccountModel } from '../models/account.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './accountlogin.component.html',
  styleUrls: ['./accountlogin.component.css']
})
export class AccountLoginComponent implements OnInit {

  public formModel: AccountLoginFormModel;
  public accounts: Array<AccountModel>;

  constructor(
    public readonly accountloginService: AccountLoginService,
    public readonly router: Router,
    private modalService: NgbModal
  ) {
    this.formModel = {accountNumber: '', accountPassword: ''} as AccountLoginFormModel
    this.accounts = []
  }

  ngOnInit() {
    this.updateRegulatedAccount();
  }

  public login(): void {

    this.accountloginService.login(this.formModel).subscribe((account: AccountModel) => {
      this.updateRegulatedAccount();

      this.goToHome(account.accountNumber);

    }, error => {
      alert(`Error: ${error.error.message}`);

    });
  }

  public isFormValid(): boolean {
    return this.formModel.accountNumber !== undefined && this.formModel.accountNumber !== '' &&
      this.formModel.accountPassword !== undefined && this.formModel.accountPassword !== ''
  }

  public goToHome(accountNumber: string): void {
    var myurl = `${accountNumber}/main`;
    this.router.navigateByUrl(myurl);

  }

  private updateRegulatedAccount(): void {

    this.accountloginService.getRegulatedAccounts().subscribe((accounts: Array<AccountModel>) => {
    this.accounts = accounts;

    }, error => {
      alert(`Error: ${error.error.message}`);

    });

  }
}
