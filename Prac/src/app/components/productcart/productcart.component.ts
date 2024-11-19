import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { AddingpipePipe} from '../addingpipe.pipe';
import { ApiServiceService } from '../../service/api-service.service';
@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrl: './productcart.component.scss'
})
export class ProductcartComponent implements OnInit{

  todos:{id:any; title:string}[]=[];
  emps:{id:any,name:string,email:string}[]=[];
  photos:{id:any,title:string,url:string}[]=[];
  products:{id:any,title:string,discription:string}[]=[];

  constructor(private todoserve:ApiServiceService) {}
  ngOnInit(): void {
    this.todoserve.getSongMetadata().subscribe({
      next:(data)=>(this.todos=data),
      error:(err)=>console.log("error",err),
    });

    this.todoserve.getuserdata().subscribe({
      next:(data)=>(this.emps=data),
      error:(err)=>console.log("error",err),
    });

    this.todoserve.getphotosdata().subscribe({
      next:(data)=>(this.photos=data),
      error:(err)=>console.log("error",err),
    });

    this.todoserve.getproductdata().subscribe({
      next:(data)=>(this.products=data),
      error:(err)=>console.log("error",err),
    });
  }
}
/*
@Directive({
  selector:'[customDirective]'
})
export class CustomDirective{
constructor(private el:ElementRef){

  el.nativeElement.style.backgroundColor="yellow";
}

}
*/