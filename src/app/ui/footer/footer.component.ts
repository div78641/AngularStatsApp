import { Component, OnInit } from '@angular/core';
import { faBaseballBall, faFootballBall, faHockeyPuck, faBasketballBall, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faBaseballBall = faBaseballBall;
  faFootballBall = faFootballBall;
  faBasketballBall = faBasketballBall;
  faHockeyPuck = faHockeyPuck;
  faCode = faCode;

  constructor() { }

  ngOnInit() {
  }

}
