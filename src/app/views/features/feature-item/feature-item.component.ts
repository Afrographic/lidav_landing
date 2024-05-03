import { Component, OnInit, Input } from '@angular/core';
import { Tools } from 'src/app/services/tools';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {
  @Input() title: string = "";
  @Input() link: string = "";

  ngOnInit(): void {
    this.is_mobile = Tools.is_mobile();
    window.addEventListener("resize", () => {
      this.is_mobile = Tools.is_mobile();
    })
  }

  is_mobile = false;


  go_to_link() {
    Tools.open_external_link(this.link);
  }

}
