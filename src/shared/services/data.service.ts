import { Inject } from "@angular/core";
import { Http } from "@angular/http";

export class DataService {

  protected _http: Http = null;
  protected _baseUrl: string;
    
  constructor(
      @Inject(Http) http: Http
  ) {
      this._http = http;
      this._baseUrl = 'http://localhost:8000';   
  }
}