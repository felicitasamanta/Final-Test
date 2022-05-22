import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  
  @Input()
  display: boolean = false;

  @Input()
  isAddForm : boolean = false;

  @Output() displayChange: EventEmitter<boolean>= new EventEmitter<boolean>();

  submittedText = 'Form submitted';
  customerForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private api : ApiService) { }

  
  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name : ['', Validators.required],
      surname : ['', Validators.required],
      dob : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      email : ['', Validators.required]
    })
  }
 
  onSubmitButton() {
    console.log(this.customerForm.value);
    
  }
  addCustomer() {
    if(this.customerForm.valid) {
      this.api.postCustomer(this.customerForm.value)
      .subscribe({
        next:(res) =>{
          alert("Customer added successfully");
          this.customerForm.reset();
         this.close();
        },
        error:(e) => {
          alert("Error while adding the customer");
          console.log(e);
        }
      })
    }
  }
  
  close(){
    this.displayChange.emit();
  }

  
  
  
  
  
  
  
  
  
  
  
  
  

}
