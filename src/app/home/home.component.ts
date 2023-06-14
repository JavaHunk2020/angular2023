import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Signups } from 'src/assets/signups.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signups:Signups[]=[];
  
  constructor(private httpClient : HttpClient,private router:Router) { }
  logout(){
    this.router.navigate(['']);
    localStorage.clear();
  }
  ngOnInit(): void {
     //Fetch data when page before page is loaded
     ///var header = {
      //   headers: new HttpHeaders()
       // .set('Authorization',  `Bearer ${localStorage.getItem('Authorization')}`)
      //}
     let response:Observable<Signups[]> = 
     this.httpClient.get<Signups[]>(environment.baseURL+"signups");
     
     response.subscribe((data:Signups[])=>{
         console.log(data);
         for(let x=0;x<data.length;x++){
            this.signups.push(data[x]);
         }
     });
  }

}
