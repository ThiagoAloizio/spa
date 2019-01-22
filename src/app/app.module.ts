import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ServicesModule } from './services/services.module';
import { AccountLoginComponent } from './accountlogin/accountlogin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccountLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServicesModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
