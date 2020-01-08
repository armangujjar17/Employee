import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
  username;
  password;
  firstView=true;
  secondView;
  fname;
  lname;
  address;
  city;
  state;
  zip;
  login()
  {
    if(this.username=="Tannu17" && this.password=="Haroon@123" )
    {
      
      this.firstView=false;
      this.secondView=true;
      console.log("hello user");
    }
    else{
    alert('username and password is not corect');
    }
  }
  arr: any[]=[];    
  onRegister(form : NgForm) {
    this.arr = form.value
    console.log('array', this.arr);
    console.log('value', form.value);
   }
 
}
