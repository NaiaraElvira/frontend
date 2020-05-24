import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{ 
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        login: ['', Validators.required],
        senha: ['', Validators.required]
      });
  }

  login() {
    const login = this.loginForm.get('login').value;
    const senha = this.loginForm.get('senha').value;

    this.authService
        .authenticate(login, senha)
        .subscribe(
            () => {
              this.router.navigate(['pessoa','listar'])
            },
            err => {
                console.log(err);
                this.loginForm.reset();
                this.userNameInput.nativeElement.focus();
                alert('Usuário ou senha inválido');
            }
        );
  } 
    
}
