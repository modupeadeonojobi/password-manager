import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent implements OnInit {
  length = 0;
  password: string;
  includeNumbers: boolean = false;
  includeLetters: boolean = false;
  includeSymbols: boolean = false;
  name: string;
  allData: any = [];


  constructor(private router: Router) {}

  ngOnInit(): void {}


  getName(value): any {
    this.name = value
  }

  getLength(value): any {
    this.length = value;
  }

  useNumbers(): any {
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbols(): any {
    this.includeSymbols = !this.includeSymbols
  }

  useLetters(): any {
    this.includeLetters = !this.includeLetters
  }

  generatePassword(): any {
    let numbers = '1234567890';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let symbols = '!@#$%^&*()_?/';

    let varChar = '';

    if (this.includeNumbers) {
      varChar += numbers;
    }
    if (this.includeLetters) {
      varChar += letters;
    }
    if (this.includeSymbols) {
      varChar += symbols;
    }

    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * varChar.length);
      generatePassword += varChar[index];
    }
    this.password = generatePassword;
  }


  submit(): any {
    const value = {
      name: this.name, password: this.password, length: this.length
    };
    
    
    if (this.password) {
      this.allData.push(value);
      localStorage.setItem('results', JSON.stringify(this.allData));
      console.log(this.allData);
    }
  }
    

  view(): any {
    this.router.navigate(['/view-password']);
  }

  back(): any {
    window.history.back();
  }

}