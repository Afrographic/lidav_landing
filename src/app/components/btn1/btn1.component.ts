import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-btn1',
  templateUrl: './btn1.component.html',
  styleUrls: ['./btn1.component.scss']
})
export class Btn1Component implements OnInit {
  @Input() icon: string = "";
  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
