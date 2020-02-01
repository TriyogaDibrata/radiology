import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // API_URL = "https://laravel.pintarkoding.com/public/api/";
  API_URL = "http://localhost:8000/api/"
  FILE_URL = "http://localhost:8000/uploads/"

  constructor() { }
}
