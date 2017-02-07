import {Injectable} from '@angular/core';
import {USERS} from './mock-users';
import {LoggerService} from '../logger/logger.service';
import{Http} from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
    isLoggedIn:boolean=false;
    private userRegUrl='isUserReg';
    constructor(
        private logger:LoggerService,
        private http:Http
    ){}

    isUserReg(name,password):Promise<boolean>{
        this.logger.log(`checking weather the user has registered:${name}`);
       
        return this.http.post(this.userRegUrl,JSON.stringify({name:name,password:password}))
                    .toPromise()
                    .then(response=>response.json().data)
                    .catch(this.handleError);
    }
    private handleError(error:any):Promise<any>{
        console.log('An error occurred',error);
        return Promise.reject(error.message || error);
    }
}