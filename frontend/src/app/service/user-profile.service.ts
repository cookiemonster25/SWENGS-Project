import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../api/profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) {
  }

  // ---------------------------------------------------------------------------------

  getById(id: number) {
    return this.http.get('/api/dto/users/' + id);
  }

  create(userProfile: UserProfile) {
    if (userProfile.image) {
      userProfile.image = userProfile.image.id;
    }
    return this.http.post('/api/dto/users' + userProfile.id, userProfile);
  }

  update(userProfile: UserProfile) {
    if (userProfile.image) {
      userProfile.image = userProfile.image.id;
    }
    return this.http.put('/api/dto/users/' + userProfile.id, userProfile);
  }

  // ---------------------------------------------------------------------------------

}
