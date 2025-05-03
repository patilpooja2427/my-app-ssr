import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const roleGuard = (allowedRoles: string[]): CanActivateFn => () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const role = auth.getRole();
    if (!role || !allowedRoles.includes(role)) {
      alert('Access denied');
      router.navigate(['/home']);
      return false;
    }
    return true;
  };