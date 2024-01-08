import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers:[StringService]
})
export class Child2Component 
{
    public Counter:any;
    
    constructor(private obj:StringService)
    {
        this.Counter=this.obj.CountCapital("AShwini");
    }

    /*public CountCapital(a:string):number
    {
      var count:number=0;
      for(var i=0;i<a.length;i++)
      {
         if((a[i]>='A') && (a[i]<='Z'))
         {
           count++;
         }
      }
      return count;

    }*/
}
