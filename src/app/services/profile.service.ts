import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);
  }
}
