import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/interfaces/profile';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  // profiles!: Array<any>;
  //profiles: Profile[] = [];
  profiles$: Observable<Profile[]> = new Observable<Profile[]>();

  dispo: boolean = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getConseillers();
  }

  getConseillers() {
    this.profileService.getAllProfiles().subscribe((data) => {
      console.log(data);
      this.profiles$ = of(data);
    });
  }

  /* handleDeleteProfile(profile: any) {
    let index = this.profiles.indexOf(profile);
    this.profiles.splice(index, 1);
  }*/
}
