import { Component, OnInit } from '@angular/core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faTwitter = faTwitter;
  faGithub = faGithub;

  constructor() { }

  ngOnInit() {
  }

}
