import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relevenote',
  templateUrl: './relevenote.component.html',
  styleUrls: ['./relevenote.component.css']
})
export class RelevenoteComponent implements OnInit {
  pdfSrc = '';

  constructor() { }

  ngOnInit() {
  }

  onFileSelected() {
    const img: any = document.querySelector('#file' );
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(img.files[0]);
    }
  }

}
