import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { filter, Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class UserFormGuard implements CanActivate   {
  // If i try to access with url it will be false but everywhere where i access this via link i will have true
  
  // Flag to track programmatic navigation
  private isProgrammaticNavigation = false;

  constructor(private router: Router) {}

  // Allow navigation programmatically
  allowProgrammaticNavigation() {
    this.isProgrammaticNavigation = true;
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    // Check if navigation is programmatic
    if (this.isProgrammaticNavigation) {
      // Reset the flag for next navigation
      this.isProgrammaticNavigation = false;
      return true;
    }
    
    this.router.navigate(['not-allowed'])
    return false;
  }
}