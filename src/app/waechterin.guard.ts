import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from './authorization/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class WaechterinGuard implements CanActivate {
  constructor(private auth: AuthorizeService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let check :any | undefined;
      
    if( this.auth.getUserState() != null)
    {
      console.log(this.auth.getUserState());
      return true;
    }
    else {
      return false;
    }
    
  }
  
}
