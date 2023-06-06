import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Signups } from 'src/assets/signups.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signups:Signups[]=[];

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
     //Fetch data when page before page is loaded
     var header = {
         headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('Authorization')}`)
      }
     let response:Observable<Signups[]> = 
     this.httpClient.get<Signups[]>("http://localhost:8080/v2/signups",header);
     
     response.subscribe((data:Signups[])=>{
         console.log(data);
         this.signups=data;
     });

  }

}
