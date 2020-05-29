import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private userService: UserService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log('ATIVANDO A GUARDA')
        console.log("Current Url Path", state);

        if(this.userService.isLogged()){
            //rota que vai quando nao autorizado
            this.router.navigate(['pessoa', 'cadastrar']);

            return false;
        }
        return true;
    }

}