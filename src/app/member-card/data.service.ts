import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cards:any[]=[]

  constructor(private http:HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get<any[]>('https://abudiyab-soft.com/api/memberships', {
  //     headers: { 'Accept-Language': 'ar' }
  //   }).subscribe(data => {
  //     this.cards = data;
  //   });
  // }

  // }
  // getData(){
  //   this.http.get<any[]>('https://abudiyab-soft.com/api/memberships', {
  //     headers: { 'Accept-Language': 'ar' }
  //   }).subscribe(data => {
  //     this.cards = data;
  //   });
  // }
}
