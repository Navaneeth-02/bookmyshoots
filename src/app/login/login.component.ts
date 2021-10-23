import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert:boolean=false

  userName: string = ""
  password: string = ""

  constructor(private service : EmployeeService) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.service.doLogin(this.userName, this.password).subscribe( data => {
      console.log(data.message);

      this.alert = true;

    },
    error => console.log(error.message));
  }

  onSubmit(){
    this.doLogin();
  }

  closeAlert()
  {
    this.alert=false;
  }

}
