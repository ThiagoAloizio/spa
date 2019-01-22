import { NgModule } from "@angular/core";
import { AtmService } from './atm.service';
import { AccountLoginService } from './accountlogin.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule 
    ],
    providers: [
        AtmService,
        AccountLoginService
    ]
})
export class ServicesModule {}