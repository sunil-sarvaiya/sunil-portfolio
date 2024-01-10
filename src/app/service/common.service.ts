import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  theme = new BehaviorSubject(true);

  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get('https://res.cloudinary.com/dj7m5tuv9/raw/upload/v1704907947/portfolio%20data/detailsData/home_q3awtr.json');
  }
 
}
