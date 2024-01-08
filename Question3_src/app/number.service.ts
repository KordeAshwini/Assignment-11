import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  constructor() { }

  public ChkPrime(no:number):string
  {
    var i:number=0;
    if(no==1)
    {
      return no+" is not either prime or composite number";
    }

    for(i=2;i<=no/2;i++)
    {
      if((no%i)==0)
      {
        return no+" is Not a Prime number";
      }
    }   
    return no+" is a Prime number";
  
  }
}
