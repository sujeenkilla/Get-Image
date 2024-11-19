import { Component, OnInit } from '@angular/core';
import { PhotoPracService } from '../../service/photo-prac.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-imagedisplay',
  templateUrl: './imagedisplay.component.html',
  styleUrl: './imagedisplay.component.scss'
})
export class ImagedisplayComponent implements OnInit {
  images:{id:any,title:string,url:string} []=[];
  constructor(private imageservice:PhotoPracService){}

  query:any=''
  img_name=new FormControl('');
  ngOnInit():void{
    
  }
  search(){
    this.query=this.img_name.value;
    this.imageservice.getimages(this.query).subscribe({
      next:(data)=>(this.images=data),
      error:err=>console.log("error",err),
  });
  }

}

