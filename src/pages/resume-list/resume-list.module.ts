import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumeDataService } from '../../shared/services/resume-data.service';
import { ResumeListPage } from './resume-list';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    ResumeListPage
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(ResumeListPage)
  ],
  entryComponents: [
    ResumeListPage
  ],
  providers: [
    ResumeDataService
  ]
})

@Component({
  selector: 'resume-list',
  templateUrl: 'resume-list.html'

})
export class ResumeListModule {}