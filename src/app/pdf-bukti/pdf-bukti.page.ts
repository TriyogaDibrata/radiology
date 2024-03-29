import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-bukti',
  templateUrl: './pdf-bukti.page.html',
  styleUrls: ['./pdf-bukti.page.scss'],
})
export class PdfBuktiPage implements OnInit{

  loading: any;
  nama_pasien

  constructor(public loadingController: LoadingController,
    private file: File,
    private route : ActivatedRoute,
    private fileOpener: FileOpener) {
  }

  ngOnInit() {
    this.nama_pasien = this.route.snapshot.paramMap.get('nama');
    console.log(this.nama_pasien);
  }

  async presentLoading(msg) {
    this.loading = await this.loadingController.create({
      message: msg
    });
    return await this.loading.present();
  }

  exportPdf() {
    this.presentLoading('Creating PDF file...');
    const div = document.getElementById("printable-area");
    const options = { background: "white", height: 900, width: div.clientHeight };
    domtoimage.toPng(div, options).then((dataUrl)=> {
        //Initialize JSPDF
        var doc = new jsPDF("p","mm","a4");
        //Add image Url to PDF
        doc.addImage(dataUrl, 'PNG', 20, 20, 240, 180);

        let pdfOutput = doc.output();
        // using ArrayBuffer will allow you to put image inside PDF
        let buffer = new ArrayBuffer(pdfOutput.length);
        let array = new Uint8Array(buffer);
        for (var i = 0; i < pdfOutput.length; i++) {
            array[i] = pdfOutput.charCodeAt(i);
        }


        //This is where the PDF file will stored , you can change it as you like
        // for more information please visit https://ionicframework.com/docs/native/file/
        const directory = this.file.dataDirectory ;
        const fileName = "bukti-edukasi.pdf";
        let options: IWriteOptions = { replace: true };

        this.file.checkFile(directory, fileName).then((success)=> {
          //Writing File to Device
          this.file.writeFile(directory,fileName,buffer, options)
          .then((success)=> {
            this.loading.dismiss();
            console.log("File created Succesfully" + JSON.stringify(success));
            this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
              .then(() => console.log('File is opened'))
              .catch(e => console.log('Error opening file', e));
          })
          .catch((error)=> {
            this.loading.dismiss();
            console.log("Cannot Create File " +JSON.stringify(error));
          });
        })
        .catch((error)=> {
          //Writing File to Device
          this.file.writeFile(directory,fileName,buffer)
          .then((success)=> {
            this.loading.dismiss();
            console.log("File created Succesfully" + JSON.stringify(success));
            this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
              .then(() => console.log('File is opened'))
              .catch(e => console.log('Error opening file', e));
          })
          .catch((error)=> {
            this.loading.dismiss();
            console.log("Cannot Create File " +JSON.stringify(error));
          });
        });
    })
    .catch(function (error) {
        this.loading.dismiss();
        console.error('oops, something went wrong!', error);
    });
  }

}
