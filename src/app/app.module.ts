import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './feature/landing/landing.component';
import { ParallaxDirective } from './common/directives/parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ParallaxDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
