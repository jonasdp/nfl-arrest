import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CrimeService } from './crime.service';
import { MatButtonModule, MatChipsModule, MatBadgeModule, MatGridListModule, MatDividerModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    MatGridListModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [CrimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
