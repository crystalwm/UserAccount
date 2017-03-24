import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';


@Component({
     moduleId: module.id,
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    providers: [UserService]
})
export class LoginComponent {

    private userService: UserService;
    private router: Router;
    constructor(
        userService: UserService,
        router: Router
    ) {
        this.userService = userService;
        this.router = router;
    }


    onSubmit = function ($event, username, password) {
        var that=this;
        this.userService.isUserReg(username, password)
            .then((isReg) => {
                if (isReg) {
                    that.router.navigate(['/admin']);
                }
                else {
                   window.location.reload();
                //  console.log('login.component:'+isReg);
                }
            },
            function (err) {
                console.log('Error: %s', err);
            });
    }

}