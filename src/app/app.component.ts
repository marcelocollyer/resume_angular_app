import { Component, enableProdMode } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResumeListPage } from '../pages/resume-list/resume-list';

enableProdMode();

@Component({
  templateUrl: 'app.html'
})

export class AppComponent {
  rootPage:any = ResumeListPage;
    
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
}

