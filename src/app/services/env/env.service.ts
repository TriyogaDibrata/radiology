import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  API_URL = "https://laravel.pintarkoding.com/public/api/";

  constructor() { }
}
