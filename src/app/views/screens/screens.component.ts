import { Component, OnInit } from '@angular/core';
import { Tools } from 'src/app/services/tools';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent implements OnInit {

  ngOnInit(): void {
    this.is_mobile = Tools.is_mobile();
    window.addEventListener("resize", () => {
      this.is_mobile = Tools.is_mobile();
    })
  }

  is_mobile = false;


}
