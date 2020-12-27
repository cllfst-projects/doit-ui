import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    HomeComponent
=======
    HomeComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
