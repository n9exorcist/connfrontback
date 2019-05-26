import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RideService } from '../ride.service';
import { Credentials } from '../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  registerForm: FormGroup;
  userName: string;
  Password: string;
  rides: Credentials[];
  errorMessage: string;
  articleIdUpdate: any;

  constructor(private formBuilder: FormBuilder, private rideService: RideService, private router: Router) { }

  ngOnInit() {

    this.getRides();
    
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.submitted = false;
  }

  getRides() {
    this.rideService.getRides().subscribe(
      rodes => this.rides = rodes,
      error => this.errorMessage = <any>error
    )
  }

  getRidesById(articleId: string) {
    this.rideService.getRidesByID(articleId).subscribe(article => {
      this.articleIdUpdate = article.username;
    })
  }

  add(username: string, password: string): void {
    const newRide: Credentials = { username, password } as Credentials;
    this.rideService.postRides(newRide).subscribe(
      pilipi => this.rides.push(pilipi)
    ),
      this.router.navigate(['/ride-details'])
    console.log("Navigating");
  }

  delete(id) {
    this.rideService.deleteRides(id).subscribe(
      res => { this.getRides(); },
      err => { console.log(err) }
    )
  }

}
