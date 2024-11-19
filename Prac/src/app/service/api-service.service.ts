import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private photoapi='https://jsonplaceholder.typicode.com/photos';
  private apiUrl='https://jsonplaceholder.typicode.com/todos';
  private apiUrl1='https://jsonplaceholder.typicode.com/users';
  private dummyproductapi='https://dummyjson.com/products';

  constructor(private http:HttpClient) {}

  getSongMetadata():Observable<{id:any, title:string}[]>{
    return this.http.get<{userId:any,id:any,title:string,completed:boolean}[]>(this.apiUrl).pipe(
      map((todos)=>
        todos.map((todo)=>({id:todo.id,title:todo.title}))
      )
    );
  }

  getuserdata():Observable<{id:any,name:string,email:string}[]>{
    return this.http.get<{id:any,name:string,email:string,address:any}[]>(this.apiUrl1).pipe(
      map((emps)=>
        emps.map((emp)=>({id:emp.id,name:emp.name,email:emp.email}))
      )
    );
  }

  getphotosdata():Observable<{id:any,title:string,url:string}[]>{
    return this.http.get<{id:any,title:string,url:string}[]>(this.photoapi).pipe(
      map((photos)=>
        photos.map((photo)=>({id:photo.id,title:photo.title,url:photo.url}))
      )
    );
  }

  getproductdata():Observable<{id:any,title:string,discription:string}[]>{
    return this.http.get<{id:any,title:string,discription:string}[]>(this.photoapi).pipe(
      map((products)=>
        products.map((product)=>({id:product.id,title:product.title,discription:product.discription}))
      )
    );
  }
}
