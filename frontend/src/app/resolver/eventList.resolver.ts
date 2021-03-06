import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EventService} from '../service/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<Observable<any>> {

  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    return this.eventService.getAllbyUser();
  }
}
