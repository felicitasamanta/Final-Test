import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/entities/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  [x: string]: any;

  title = 'Customers';

  display: boolean = false;

  isAddForm : boolean = false;


  constructor(private http: HttpClient) {}

  customers : any;

 
  ngOnInit(): void {
    let resp = this.http.get("/api/customers");
    resp.subscribe((data) => {
      console.log(data);
      this.customers=data;
    });
  }

  openDialog() {
    this.display = true;
    console.log(this.display);
    this.isAddForm = true;
    
  }
  
  closedDialog(){
    this.display = false;
  }
  applyFilterGlobal($event: { target: HTMLInputElement; }, stringVal: any) {
    this['dt'].filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  openViewForm() {
    
    this.display = true;
    this.isAddForm = false;

  }

 }
  

  
  


  
  

  
  
   


