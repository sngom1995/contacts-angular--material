import {Component, OnChanges, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Router} from "@angular/router";

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit,OnChanges{
  showFiller: any;
  public isScreenSmall: boolean=false;
  users: Observable<User[]> = new Observable<User[]>();

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`]).subscribe((result:BreakpointState) => {
      this.isScreenSmall = result.matches;
    });
     this.users = this.userService.users;
      this.userService.loadAll();
      this.users.subscribe(data => {
        if (data.length > 0) {
          this.router.navigate(['/contactmanager', data[0].id]);
        }
      });
  }

  ngOnChanges(): void {
        this.breakpointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`]).subscribe((result:BreakpointState) => {
      this.isScreenSmall = result.matches;
    });
  }
}
