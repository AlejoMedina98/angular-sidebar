import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})

export class AppFooterComponent implements OnInit {

  public date: string = new Date().toLocaleDateString();
  public defaults = environment.defaults;
  constructor() { }

  ngOnInit() { }
}
