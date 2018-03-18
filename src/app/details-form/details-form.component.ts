import {Router} from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  userDetails = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    fromDate: new Date(),
    toDate: new Date()
  };


  constructor(private router: Router) { }

  ngOnInit() {
   const localS = localStorage.getItem('userDetails');
   if (localS) {
     this.userDetails = JSON.parse(localS);
   }
  }

  onSubmit () {
    localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
    this.router.navigate(['/sport']);
  }

}
