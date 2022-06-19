import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let logintoken = localStorage.getItem("isLoggedIn");
    console.log("Login tokin :",logintoken);
    var decodedToken = atob(logintoken);
    console.log("decode token : ", decodedToken);
    if(decodedToken=="User has logged in"){
      return true;
    }else{
      return false
    }
  }
}
