import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-sports-form',
  templateUrl: './sports-form.component.html',
  styleUrls: ['./sports-form.component.css']
})
export class SportsFormComponent implements OnInit {
   // set initial state
  sportDetails = {
    sport: '',
    roll: ''

  };

  constructor(private router: Router) { }

  ngOnInit() {
   // geting the data from local storage if exists
    const localSport = localStorage.getItem('sportDetails');
    if (localSport) {
      this.sportDetails = JSON.parse(localSport);
    }
  }

  onSubmit () {
     // saving the data in local storage
    if ( this.sportDetails.roll != null && this.sportDetails.roll !== '' ) {
      localStorage.setItem('sportDetails', JSON.stringify(this.sportDetails));
      this.router.navigate(['/thankyou']);
    }
  }
}
