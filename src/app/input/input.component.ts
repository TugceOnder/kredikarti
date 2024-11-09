import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
 
})
export class InputComponent implements OnInit{

  @Input () control!:FormControl;
  @Input () label!:string;
  constructor (){}
  ngOnInit(): void {
   
  }

  showErrors(){
   // const {dirty,touched,errors}= this.control;
return this.control.dirty && this.control.touched && this.control.errors;
  }

}
