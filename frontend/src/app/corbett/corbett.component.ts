import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QueryService } from 'src/app/query.service';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-corbett',
  templateUrl: './corbett.component.html',
  styleUrls: ['./corbett.component.css']
})
export class CorbettComponent implements OnInit {

  
  contactform : FormGroup;
  isSubmited:Boolean=false;
  constructor(private fb: FormBuilder , private _service : QueryService ,private toastr : ToastrService , private spinnerService : Ng4LoadingSpinnerService) { }
  ngOnInit() {
    this.contactform = this.fb.group({  
      name:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20), Validators.pattern(/^[A-Za-z -]+$/)]],
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: ['', [Validators.required,Validators.minLength(10), Validators.pattern(/^-?(|[0-9]\d*)?$/)]],
      message:['', [Validators.required]],
      SP:['', [Validators.required]],
      SB:['', [Validators.required]],
      adults:['', [Validators.required]],
      children:['', [Validators.required]],
      date:['', [Validators.required]]
      });
  }

   contactformdetail(){
    
    if (this.contactform.invalid) {
      this.isSubmited = true;
      return;
    }
   this.spinnerService.show();

this._service.query(this.contactform.value)
.subscribe(res => {

  if (res.code === 200) {
 // this.contactform.reset(this.contactform.value);
 this.toastr.success('Query send successfully')
 this.spinnerService.hide();
  }else{
     this.spinnerService.hide();
    this.toastr.warning('Query not send') 
  }
})
}

}
