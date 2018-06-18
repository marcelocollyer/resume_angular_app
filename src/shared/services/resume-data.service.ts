import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Resume } from "../../models/resume";

@Injectable()
export class ResumeDataService extends DataService {
  private endpointUri = '/resumes';     

  constructor(
    @Inject(Http) http: Http
  ) {
    super(http);
  }

  findById(id: number) {
    const url = `${this._baseUrl}${this.endpointUri}/${id}`;

    return this._http.get(url, {})
      .map((res: Response) => {
        return <Resume[]>res.json();
      })
      .catch((error: Response | any) => {
        return Observable.throw(error);
      });
  }
  
  findAll() {
    const url = `${this._baseUrl}${this.endpointUri}`;
    return this._http.get(url, {})
      .map((res: Response) => {
        return <Resume[]>res.json();
      })
      .catch((error: Response | any) => {
        return Observable.throw(error);
      });
  }

}