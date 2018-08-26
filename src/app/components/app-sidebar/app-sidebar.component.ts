import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public routes = [
    {name: 'Dashboard', icon: 'fa fa-dashboard', route: '/dashboard'},
    {name: 'About', icon: 'fa fa-question-circle', route: '/about'}
  ]
}
