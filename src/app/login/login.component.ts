import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppResponse } from '../app.response.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string="";  

  public constructor(private httpClient : HttpClient,private router: Router, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    
  }

  public validate(pusername:any,ppassword:any) : void {
      const reqeuestBody={username:pusername.value,password:ppassword.value};
      //HERE WE ARE MAKING REST CALL
      let response:Observable<AppResponse> = 
      this.httpClient.post<AppResponse>("http://localhost:8080/v2/auth",reqeuestBody);
      response.subscribe((data:AppResponse)=>{
          console.log(data);
          if(data.authorization!==null){
              localStorage.setItem('Authorization',data.authorization);
              this.router.navigate(['home']);
          }
      },(error)=>{
         console.log(error);
         if(error.status===401) {
            this.message= "Hey! username and password is not correct!";
         }
      });
  }
}
