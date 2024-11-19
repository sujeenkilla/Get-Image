import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotoPracService {
  constructor(private httpclient:HttpClient) {}
  private access_key='T_3EM__k5RYqFBgzWfGyHD_1SNejgXBa4KP4gsjZMRE';
  private baseUrl = 'https://api.unsplash.com/search/photos';
  getimages(query:string): Observable<{id:any, title:string,url:string}[]>{
    const url = `${this.baseUrl}?client_id=${this.access_key}&query=${query}`;

    return this.httpclient.get<any>(url).pipe(
      map((photos)=>
        photos.results.map((photo:any)=>({
          id: photo.id,
          title: photo.alt_description || 'No Title', // Fallback to 'No Title' if alt_description is null
          url: photo.urls.small,
        }))
      )
    );
  }

}
