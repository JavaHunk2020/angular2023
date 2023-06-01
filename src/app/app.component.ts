import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'login-page';
    message:string="";  
    public validate(username:any,password:any) : void {
          if(username.value==='jack' && password.value==='jill'){
             this.message="Ahaha usernane and password are correct!";
          }else{
            this.message="Sorry usernane and password are not correct!";
          }
         console.log("Hey you clicked me!");   
    }

}
