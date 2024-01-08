import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{

  constructor() { }

  public Addition(a:number,b:number):string
  {
    return "Addition of "+a+" and "+b+" is : "+(a+b);
  }
  public Substraction(a:number,b:number):string
  {
     return "Substraction of "+a+" and "+b+" is : "+(a-b);
  }
}
