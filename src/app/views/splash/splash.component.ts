import { Component, OnInit } from '@angular/core';
import { Tools } from 'src/app/services/tools';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.is_mobile = Tools.is_mobile();
    window.addEventListener("resize", () => {
      this.is_mobile = Tools.is_mobile();
    })
  }

  is_mobile = false;


}
