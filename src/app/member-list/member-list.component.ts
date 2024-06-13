import { Component } from '@angular/core';
import { MemberCardComponent } from '../member-card/member-card/member-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
  cards: any = [];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any>('https://abudiyab-soft.com/api/memberships', {
      headers: { 'Accept-Language': 'ar' }
    }).subscribe(response => {
      this.cards = response.data;
      console.log("cards is "+this.cards);
    });
  }
  
  dId(index: number, card: any): number {
    return card.id;
  }
}
