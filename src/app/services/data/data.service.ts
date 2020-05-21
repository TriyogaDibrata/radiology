import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EnvService } from "../env/env.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {

  loadingOption: any = {
    spinner : null,
    backdropDismiss : false,
    message : '<div class="loading-style"><div class ="blob-1"></div><div class = "blob-2"></div></div>',
    cssClass: 'loading-style',
    keyboardClose: true,
    animated: true,
  };

  headers = new HttpHeaders({
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  })

  constructor(private http: HttpClient, private env: EnvService) {}

  getListData(){
    return this.http.get(this.env.API_URL + 'jenis-pemeriksaan', {headers : this.headers})
    .pipe();
  }

  getDetailPemeriksaan(id){
    return this.http.get(this.env.API_URL + 'jenis-pemeriksaan?id='+id, {headers : this.headers})
    .pipe();
  }

  getDetailRisiko(id){
    return this.http.get(this.env.API_URL + 'risiko?id='+id, {headers : this.headers})
    .pipe();
  }

  getApd(id){
    return this.http.get(this.env.API_URL + 'apd?id='+id, {headers : this.headers})
    .pipe();
  }

  getAlatRadiologiFiles(id){
    return this.http.get(this.env.API_URL + 'alat-radiologi?id='+id, {headers : this.headers})
    .pipe();
  }

  getKuisPengetahuan(){
    return this.http.get(this.env.API_URL + 'kuis/pengetahuan', {headers : this.headers})
    .pipe();
  }

  getKuisSikap(){
    return this.http.get(this.env.API_URL + 'kuis/sikap', {headers : this.headers})
    .pipe();
  }

  saveResult(data){
    return this.http.post(this.env.API_URL+ 'kuis/save-result', data, {headers : this.headers})
    .pipe();
  }

  getResult(id){
    return this.http.get(this.env.API_URL+ 'kuis/get-result/'+id, {headers : this.headers})
    .pipe();
  }

}
