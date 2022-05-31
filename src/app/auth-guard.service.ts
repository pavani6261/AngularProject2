
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from "@angular/router";
// import { Observable } from "rxjs";

import { Injectable } from "@angular/core";

import { AuthServiceHandler } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authServiceHandler:AuthServiceHandler , private router:Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
        // debugger;
        // return this.authServiceHandler.isAuthentcated().then((response:any) => {
        //     if(response) {
        //         return true;
        //     } else {
        //         this.router.navigate(['/']);
        //         return false;
        //     }
        // })
        if(this.authServiceHandler.isAuthentcated()) {
            return true;
        } else {
            this.router.navigate(['/appRoute']);
            return false;
        }
    }

}