import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.css']
})
export class RidedetailsComponent implements OnInit {
  
  render: any;
  myMessage: string;
  constructor() { }

  ngOnInit() {
  }
  
  @Input() set greetMessage(message: any){
    this.render = message;
    console.log(this.render);
    console.log("I'm from child component/ride details component through Input decorator");
  }
  status:boolean = true;
  muteStream() {
    this.status = !this.status;
    this.myMessage= "Hello, I am from attribute directive";
 }
}
