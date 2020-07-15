import { Component, OnInit } from '@angular/core';
import {DataService, FriendType, UserType} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})

export class ProfilePageComponent implements OnInit {
  currentUser: UserType = null
  friends: FriendType[] = null

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private authService:AuthService,
    private router: Router) {
    this.titleService.setTitle( 'Homepage' )
  }

  ngOnInit() {
    this.dataService.getUserData().subscribe(
      next => this.currentUser = next
    )
    this.dataService.getFriendsData().subscribe(
      next => this.friends = next
    )
  }

  async handleLogoutClick() {
    this.authService.logout()
    await this.router.navigate(['/login'])
  }
}
