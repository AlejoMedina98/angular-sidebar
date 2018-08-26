import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AppFooterComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
