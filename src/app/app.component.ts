import { Component, OnInit } from '@angular/core';
import { AccountModel } from './models/account.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountLoginService } from './services/accountlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public regulatedAccounts: Array<AccountModel>;

  constructor(
    public readonly accountloginService: AccountLoginService,
    public readonly router: Router,
    public readonly route: ActivatedRoute
  ) { }

  public ngOnInit(): void { }

  public navigateToHome(): void {
    this.router.navigateByUrl('${this.getCurrentAccountNumber}/main');
  }

  private getCurrentAccountNumber(): number {
    let id: number;
    this.route.params.subscribe((params: any) => id = params['id']);
    return id;
  }
}
