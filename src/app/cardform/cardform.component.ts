import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../input/input.component";
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-cardform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './cardform.component.html',
  styleUrl: './cardform.component.css'

})
export class CardformComponent implements OnInit {
  
   cardForm= new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]), // name form control name ismi ile aynı olacak
    cardNumber:new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
    expiration:new DateFormControl('',[Validators.required,Validators.pattern(/^(0[1-9]1[0-2])\/\s{2}$/)]),
    securityCode:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
  }

  )
  constructor(){}
  ngOnInit(): void {
  
  }

 get nameControl(): FormControl {
    return this.cardForm.get('name') as FormControl;
  }

  get cardNumberControl(): FormControl {
    return this.cardForm.get('cardNumber') as FormControl;
  }
  get expirationControl(): DateFormControl {
    return this.cardForm.get('expiration') as unknown as DateFormControl;
  }

  get securityCodeControl(): FormControl {
    return this.cardForm.get('securityCode') as FormControl;
  }
  onSubmit(){

  }


  ResetForm(){
    this.cardForm.reset();
  }
}
