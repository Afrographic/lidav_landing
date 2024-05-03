import { Component, OnInit, Input } from '@angular/core';
import { Tools } from 'src/app/services/tools';

@Component({
  selector: 'app-download-app',
  templateUrl: './download-app.component.html',
  styleUrls: ['./download-app.component.scss']
})
export class DownloadAppComponent implements OnInit {
  @Input() center: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.is_mobile = Tools.is_mobile();
    window.addEventListener("resize", () => {
      this.is_mobile = Tools.is_mobile();
    })
  }

  is_mobile = false;


  download_64bits() {
    Tools.open_external_link("https://drive.google.com/file/d/1y4LIV9MIZdUC4M26ilT9VeWewfz9azu3/view?usp=sharing")
  }

  download_32bits() {
    Tools.open_external_link("https://drive.google.com/file/d/16W6b-VrSsEO3GEwB9FQFTYeCHwqNQdtx/view?usp=sharing")
  }

}
