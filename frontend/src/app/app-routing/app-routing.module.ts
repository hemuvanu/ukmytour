import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UttarakhandComponent } from '../uttarakhand/uttarakhand.component';
import { RishikeshComponent} from '../rishikesh/rishikesh.component';
import { CorbettComponent} from '../corbett/corbett.component';
import { LansdowneComponent} from '../lansdowne/lansdowne.component';
const routes: Routes = [
  { path: '', component: UttarakhandComponent },
  { path:'rishikesh' , component:RishikeshComponent },
  { path:'corbett' , component:CorbettComponent },
  { path:'lansdowne', component:LansdowneComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
