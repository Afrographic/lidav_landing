import { Component, OnInit } from '@angular/core';
import { Tools } from 'src/app/services/tools';

@Component({
  selector: 'app-afro-projects',
  templateUrl: './afro-projects.component.html',
  styleUrls: ['./afro-projects.component.scss']
})
export class AfroProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.is_mobile = Tools.is_mobile();
    window.addEventListener("resize", () => {
      this.is_mobile = Tools.is_mobile();
    })
  }

  is_mobile = false;

  go_to_restflow() {
    Tools.open_external_link("https://restflow.monraa.com")
  }
  go_to_isis() {
    Tools.open_external_link("https://isis.monraa.com")
  }
  go_to_neftis() {
     Tools.open_external_link("https://neftis.monraa.com")
  }
  go_to_checkgames() {
     Tools.open_external_link("https://check-games.monraa.com")
  }
  go_to_sekhmet() {
     Tools.open_external_link("https://sekhmet.monraa.com")
  }

}
