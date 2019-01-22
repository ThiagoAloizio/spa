import { ResponseModel } from '../models/response.model';
import { AccountModel } from '../models/account.model';
import { AccountLoginFormModel } from '../models/accountlogin-form.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class AccountLoginService {

    constructor(
        private readonly http: HttpClient
    ) { }

    public login(account: AccountLoginFormModel): Observable<AccountModel> {
         return this.http.post<AccountModel>(`http://localhost:8080/service/login`, account, httpOptions);
    }
	
    public getRegulatedAccounts(): Observable<Array<AccountModel>> {
        return this.http.get<Array<AccountModel>>(`http://localhost:8080/service/regulatedAccounts`);
    }

}