import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-password',
  templateUrl: './view-password.component.html',
  styleUrls: ['./view-password.component.css']
})
export class ViewPasswordComponent implements OnInit {
  viewDetails: any = [];

  constructor() { 
    this.viewDetails = JSON.parse(localStorage.getItem('results')) || null;    
  }

  ngOnInit(): void {
  }

  goBack(): any {
    window.history.back();
  }

}
