import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{ EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 employee: Employee = new Employee();

 alert: boolean= false;

  constructor(private service : EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.service.createEmployee(this.employee).subscribe( data =>{
      console.log("Successfully");
     // this.goToEmployeeList();
     this.alert = true;

    },
    error => console.log(error));
  }

  goToEmployeeList(){
    //this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    
  }

  closeAlert()
  {
    this.alert=false;
  }

}
