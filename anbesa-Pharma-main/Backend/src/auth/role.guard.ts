/* import { Reflector } from "@nestjs/core";
import {Injectable , CanActivate , ExecutionContext} from '@nestjs/common'
import { Role } from "./schemas/user.schema";



@Injectable()

export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector){}


    canActivate (context: ExecutionContext): boolean{

        const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [])

        context.getHandler(),
        context.getClass(),

        const request = context.switchToHttp().getRequest();
        const user = request.user;


        return requiredRoles.some((role) => user.roles.includes(role));
    }
} */
// role.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './schemas/user.schema';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Role[]>('roles', context.getHandler());

    if (!requiredRoles) {
      return true; // No role validation needed, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assuming the user is available in the request after authentication

    // Check if the user has at least one of the required roles
    const hasRequiredRole = user.roles.some((role) => requiredRoles.includes(role));

    return hasRequiredRole;
  }
}
