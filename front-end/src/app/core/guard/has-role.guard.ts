import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const hasRoleGuard: CanActivateFn = async (route, state) => {
  let role = '';

  const authService = inject(AuthService);
  const router = inject(Router);

  role = (await authService.getRole().toPromise()) || '';
  const actived = route.data['roles'].includes(role);

  return actived || router.createUrlTree(['/auth/verify']);
};
