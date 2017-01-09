# quesionts and answers

## typescript

1: the parameter that defines in the constrcutor, what's the difference between using the `public` or not?

using the pulbic

```typescript
    constructor(
        userService:UserService,
        public router:Router
        ){
        this.userService=userService;
    }
```

not using the public

```typescript
    constructor(
        userService:UserService,
        router:Router
        ){
        this.userService=userService;
    }
```

in the class ,you can declare a variable to be public ,private or protected

* public
  * 在typescript的class中，定义变量的默认值是public
* private
  * 该变量只能在class的内部使用。
* protected
  * 用这个关键字声明的变量主要是用于继承


the previou `text`, it can't find the `navigate` method.
why this happen. because the typescript's constrcutor.

```typescript
export class LoginComponent {

    private userService:UserService;
    constructor(
        userService:UserService,
        router:Router
        ){
        this.userService=userService;
    }

    onSubmit=function($event,username,password){
      var isUserReg= this.userService.isUserReg(username,password);
      if(isUserReg){
         this.router.navigate(['/admin']);
      }
        else {
          window.location.reload();
      }
    }
}
```

then I change the code to 

```typescript
export class LoginComponent {

    private userService:UserService;
    private router:Router;
    constructor(
        userService:UserService,
        router:Router
        ){
        this.userService=userService;
        this.router=router;
    }

    onSubmit=function($event,username,password){
      var isUserReg= this.userService.isUserReg(username,password);
      if(isUserReg){
         this.router.navigate(['/admin']);
      }
        else {
          window.location.reload();
      }
    }

}
```
