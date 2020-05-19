import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  
  API_URL = "https://e3ramed.com/public/api/";
  FILE_URL = "https://e3ramed.com/public/uploads/";

  constructor() { }
}
