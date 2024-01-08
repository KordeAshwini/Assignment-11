import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [NumberService, StringService]
})
export class ChildComponent 
{
    public num:any;
    public str:any;
    constructor(private obj1: NumberService,private obj2: StringService)
    {
       this.num=obj1.ChkPrime(21);
       this.str=obj2.CountCapital("Marvellous Infosystems");
    }
    
}
