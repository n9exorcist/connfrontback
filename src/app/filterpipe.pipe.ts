import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(ride: any, filterargs: any): any {
    if(filterargs  === 'd') {
      return ride.filter( pilot =>  pilot.firstName === "Awin" );
    } else if(filterargs  === 'h') 
    {
      return ride.filter( pilot =>  pilot.lastName === "Chris" );
    } else(filterargs === ride) 
    {
      return ride;
    }
  } 
}


