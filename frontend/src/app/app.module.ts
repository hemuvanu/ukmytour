import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QueryService } from './query.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { RishikeshComponent } from './rishikesh/rishikesh.component';
import { UttarakhandComponent } from './uttarakhand/uttarakhand.component';
// import { AppRoutingModule } from '../';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CorbettComponent } from './corbett/corbett.component';
import { LansdowneComponent } from './lansdowne/lansdowne.component';
@NgModule({
  declarations: [
    AppComponent,
    RishikeshComponent,
    UttarakhandComponent,
    CorbettComponent,
    LansdowneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()  ,
    Ng4LoadingSpinnerModule.forRoot(),
     AppRoutingModule

  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
