import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanLoad
} from '@angular/router';



@Injectable()
export class AuthGuardService implements CanActivate,CanLoad{
    canActivate():boolean{
        return false;
    }

    canLoad():boolean{
        return true;
    }
}