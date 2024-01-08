import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  constructor() { }
  
  public ChkPrime(a:number):string
  {
	if(a == 1)
	{
	return a+" is not either prime or composite number";
	}
	for(var i=2;i<=a/2;i++)
	{
	if((a%i)== 0)
	{
	  return a+" is not a Prime Number";
	}
	}
	return a+" is a Prime Number";
      
  }
}
