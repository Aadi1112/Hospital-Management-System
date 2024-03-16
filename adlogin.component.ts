import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {

    username:string=''
    password:string=''
    inValidLogin=false;

    constructor(private adminAuthService:AdminauthService,private router:Router){}

    checkLogin(){

         if(this.adminAuthService.authenticate(this.username,this.password)){

             this.router.navigate(['admin'])
             this.inValidLogin=false;
               
         }
         else{

              this.inValidLogin=true;
              alert("Wrong credentials");
              this.router.navigate(['home'])
         }
    }

   
       
}
