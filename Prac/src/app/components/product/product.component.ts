import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

input_f=new FormControl();


search_query: Observable<any[]>=of([]);
public baseUrl = 'https://api.unsplash.com/search/photos';
public access_key='T_3EM__k5RYqFBgzWfGyHD_1SNejgXBa4KP4gsjZMRE';

 url = `${this.baseUrl}?client_id=${this.access_key}&query=${this.input_f}`;

constructor(private http:HttpClient){}

  ngOnInit(): void {

    this.search_query=this.input_f.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term=>
        {
          if(term.trim()===''){
            return of([]);
          }else{
            return this.http.get<any[]>(this.url);
          }
        })
    );
  }
}












