import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // API_URL = "https://e3ramed.com/public/api/";
  // FILE_URL = "https://e3ramed.com/public/uploads/";

  API_URL = "http://localhost:8000/api/";
  FILE_URL = "http://localhost:8000/uploads/";

  constructor() { }
}
