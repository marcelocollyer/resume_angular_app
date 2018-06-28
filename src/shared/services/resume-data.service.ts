
import { Observable } from 'rxjs/Observable';
import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Resume } from "../../models/resume";

declare var window: any;

@Injectable()
export class ResumeDataService {
  protected _baseUrl: string;
  private endpointUri = '/resumes';   
    

  constructor(
    @Inject(Http) private _http: Http
  ) {
    this._baseUrl = `http://${window.location.hostname}:8000`;
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