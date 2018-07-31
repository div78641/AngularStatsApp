import { Component, OnInit } from '@angular/core';
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faBaseballBall = faBaseballBall;

  constructor() { }

  ngOnInit() {
  }

}
