import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../model/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration : Registration | undefined;
  constructor() { }

  ngOnInit(): void {
  }


  onSave(f: NgForm): void {
    console.log(f.value);//5
    this.registration = f.value;


  }

}
