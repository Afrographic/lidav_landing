import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-btn2',
  templateUrl: './btn2.component.html',
  styleUrls: ['./btn2.component.scss']
})
export class Btn2Component implements OnInit {
  @Input() icon: string = "";
  @Input() label: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
