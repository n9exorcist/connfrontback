import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;
  onSubmit: boolean;
  isAuthenticated: boolean;
  password: string;
  

  onClick(username: string, password: string) {
    this.userName = username;
    this.password = password;
    this.onSubmit = true;
    if(username === "admin" && password == "admin") 
      this.isAuthenticated = true;
      else 
      this.isAuthenticated = false;
  }
  
  rides: any[] = [{
    id: 1,
    name: "Monster",
    car: "BMW",
    firstName: "Awin",
    lastName: "Dancy",
    eMail: "Awin@dd.com"
  },
  { 
    id: 2,
    name: "Neptune",
    car: "Audi",
    firstName: "Awin",
    lastName: "Chris",
    eMail: "Christ@dd.com"
  },
  { 
    id: 3,
    name: "Pluto",
    car: "Ferrari",
    firstName: "Balin",
    lastName: "Chris",
    eMail: "Balin@dd.com"
  },
  { 
    id: 2,
    name: "Earth",
    car: "Buggati",
    firstName: "Almonard",
    lastName: "Chris",
    eMail: "Cagtt@dd.com"
  },
  ]
   
    highLight(emp:any) {
      console.log("Selected Item from Highlight method in app component: " + emp.name);
      this.targo = true;
    }
    targo: boolean;
    // childmessage : string = "I am passed from Parent to child component";
  constructor() {
    
  }
}
