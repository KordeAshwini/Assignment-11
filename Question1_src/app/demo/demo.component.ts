import { Component } from '@angular/core';

import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService]
})
export class DemoComponent 
{ 
   public Add:any;
   public Sub:any;
   
   constructor(private obj:ArithmeticService)
   {
      this.Add=this.obj.Addition(10,20);
      this.Sub=this.obj.Substraction(30,20);
   }

   /*public Addition(a:number,b:number):number
   {
      return a+b;
   }
   public Substraction(a:number,b:number):number
   {
      return a-b;
   }*/
  
}
