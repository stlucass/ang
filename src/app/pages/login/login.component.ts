import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public nome!  : String;
  public sobrenome!  : String;

  ngOnInit(): void {
    this.nome! = "Lucas";

  }
  
}
