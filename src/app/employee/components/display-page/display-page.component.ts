import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  postform !:FormGroup;
  empData:any=[];
  userdata:any;
  emaildata:any;
  roledata:any;
  dataemployee:any;
  onaddButton:any;
  oneditButton:any;
  NumberofEmployees:any;
 
  constructor(private user:DataService,private route:Router) { }
  
  ngOnInit(): void {
    this.postform= new FormGroup({
      id: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      Name: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      Designation: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      MobileNumber: new FormControl(null,[Validators.required,Validators.minLength(10)]),
      email:new FormControl(null,[(Validators.required),(Validators.minLength(8))]),
      Location:new FormControl(null),
      fewlines:new FormControl(null),
    })
    // getting data from service
     this.empData=this.user.user;
     // getting data of email and password username to display on home page who is logged 
     this.userdata=sessionStorage.getItem('username');
     this.emaildata=sessionStorage.getItem('email');
     this.roledata=sessionStorage.getItem('role');
     this.NumberofEmployees =this.empData.length;
     
  }
  //Function for adding new employee
  onaddpost(){
   
      this.user.addemployee(this.postform.value);
      this.countemp();
    
  
  }
 //Function for deleting employee
  delete(data:any){
    confirm('confirm you want to delete')
    this.user.delete(data);
    this.countemp();
  }
  //updating the employye using based on id we got
  onedit(){
    this.user.update(this.postform.value);
   
     
   
   }
   //getting id of employee to update 
   id(data:any){
     this.dataemployee =this.user.getemployeebyId(+data);
    console.log(this.dataemployee);
    this.postform.setValue(this.dataemployee);
    this.oneditButton=true;
    this.onaddButton=false;
   
   }
   getemployeeid(){
   let id=this.postform.value.id
   this.user.getemployeebyId(id)
   }
  // function for logout 
    onLogout(){
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('password');
      this.route.navigateByUrl('/')
    }
    
    onaddemployyeModal(){
    this.onaddButton=true;
    this.oneditButton=false;
    this.postform.reset();
    }
   countemp(){
    this.NumberofEmployees =this.empData.length;
    
   }
   
}
