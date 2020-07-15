import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  domain = 'https://esaxco.github.io/vk-oauth'
  href = `https://oauth.vk.com/authorize?client_id=7534196&display=page&redirect_uri=${this.domain}/login/callback&scope=friends&response_type=code&v=5.120`

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: ActivatedRoute,
    private redirectRouter:Router) {
    this.titleService.setTitle('Login page')
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe( (queryParam: any) => {
      const code = queryParam.code;
      if (code) {
        this.authService.login(code).subscribe(async next => {
          await this.redirectRouter.navigate([''])
        });
      }
    });
  }

}
