import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-password',
  templateUrl: './view-password.component.html',
  styleUrls: ['./view-password.component.css']
})
export class ViewPasswordComponent implements OnInit {
  viewDetails: any = [];
  // p: number = 1;
  // config: any;
  

  constructor() {
    this.viewDetails = JSON.parse(localStorage.getItem('results')) || null;
    // this.config = {
    //   itemsPerPage: 5,
    //   currentPage: 1,
    //   totalItems: this.viewDetails.count
    // };    
  }

  

  ngOnInit(): void {
  }

  // pageChanged(event) {
  //   this.config.currentPage = event;
  // }

  goBack(): any {
    window.history.back();
  }

}
