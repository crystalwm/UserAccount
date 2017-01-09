import {Injectable} from '@angular/core';
import {USERS} from './mock-users';
import {LoggerService} from '../logger/logger.service';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService{
    isLoggedIn:boolean=false;
    constructor(
        private logger:LoggerService
    ){}

    isUserReg(name,password):Observable<boolean>{
        this.logger.log(`checking weather the user has registered:${name}`);
        return Observable.of(true).delay(1000).do(()=>
                                                   USERS.some(user=>user.name==name && user.password==password));
    }
}