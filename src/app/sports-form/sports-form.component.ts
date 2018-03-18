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
  sportDetails = {
    sport: '',
    roll: ''

  };

  constructor(private router: Router) { }

  ngOnInit() {
    const localSport = localStorage.getItem('sportDetails');
    if (localSport) {
      this.sportDetails = JSON.parse(localSport);
    }
  }

  onSubmit () {
    localStorage.setItem('sportDetails', JSON.stringify(this.sportDetails));
    this.router.navigate(['/thankyou']);
  }
}
