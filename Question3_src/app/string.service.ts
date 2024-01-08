import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{

  constructor() { }

  public CountCapital(str:string):string
  {
    var cnt:number=0;
    var i:number=0;
    for(i=0;i<str.length;i++)
    {
      if((str[i]>='A') && (str[i]<='Z'))
      {
        cnt++;
      }
    }
    //return cnt;
    return "Number of capital letters are "+cnt+" in "+str+" string";
  }
}
