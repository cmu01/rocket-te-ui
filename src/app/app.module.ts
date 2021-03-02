import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share.module';
import { RocketUiLibModule } from 'rocket-ui-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    RocketUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
