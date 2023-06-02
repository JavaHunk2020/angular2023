import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppResponse } from './app.response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'login-page';
    message:string="";  

    public constructor(private httpClient : HttpClient){
    }

    public validate(pusername:any,ppassword:any) : void {
        const reqeuestBody={username:pusername.value,password:ppassword.value};
        //HERE WE ARE MAKING REST CALL
        let response:Observable<AppResponse> = 
        this.httpClient.post<AppResponse>("http://localhost:9090/v4/auth",reqeuestBody);
        response.subscribe((data:AppResponse)=>{
            console.log(data);
            this.message= data.message;
        });
    }
}
