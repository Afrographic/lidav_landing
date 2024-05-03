import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { AfroProjectsComponent } from './views/afro-projects/afro-projects.component';
import { SplashComponent } from './views/splash/splash.component';
import { Btn1Component } from './components/btn1/btn1.component';
import { Btn2Component } from './components/btn2/btn2.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { FeatureItemComponent } from './views/features/feature-item/feature-item.component';
import { FeaturesComponent } from './views/features/features.component';
import { ScreensComponent } from './views/screens/screens.component';
import { FooterComponent } from './views/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AfroProjectsComponent,
    SplashComponent,
    Btn1Component,
    Btn2Component,
    DownloadAppComponent,
    FeatureItemComponent,
    FeaturesComponent,
    ScreensComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

