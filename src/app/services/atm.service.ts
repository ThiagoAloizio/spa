import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable()
export class AtmService {

    constructor(
        private readonly http: HttpClient
    ) { }

    public cashout(number: string, value: string): Observable<ResponseModel> {
        return this.http.get<ResponseModel>(`http://localhost:8080/atm/cashoutOperation/${number}`, {
            params: {
                value
            }
        });
    }

}