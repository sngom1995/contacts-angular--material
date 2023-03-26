import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnChanges{

  user: User | undefined;
    constructor(private route: ActivatedRoute, private userService: UserService) {

    }

    ngOnInit(): void {
      this.route.params.subscribe(
        params => {
          this.user = this.userService.loadById(+params['id']);
          console.log(this.user);
        }
      );
    }

  ngOnChanges(): void {
    this.route.params.forEach(
      params => {
        this.user = this.userService.loadById(+params['id']);
        console.log( params['id'] );
      }
    );
  }
}
