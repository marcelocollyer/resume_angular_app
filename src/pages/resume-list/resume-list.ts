import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResumeDataService } from '../../shared/services/resume-data.service';
import { Resume } from '../../models/resume';

@Component({
  templateUrl: 'resume-list.html'
})
export class ResumeListPage {
  
  resumeList: Resume;
  
  constructor(
    public navCtrl: NavController,
    private _resumeDataService: ResumeDataService
  ) {
    this.findAllResumes();
  }

  private findAllResumes() { 
    this._resumeDataService.findAll()
      .subscribe(
        function (data) {
          if(data && data.length > 0) {
            this.resume = data[0];
          }
        }.bind(this)
      );
  }
}
