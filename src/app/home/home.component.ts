import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  generatePassword(): any {
    this.router.navigate(['/generate-password']);

  }

  viewPassword(): any {
    this.router.navigate(['/view-password']);
  }

}
