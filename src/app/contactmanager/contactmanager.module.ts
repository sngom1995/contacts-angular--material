import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../shared/material.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

const routes: Routes = [
  {
    path: '',
    component: ContactmanagerAppComponent,
    children: [
      {
        path: ':id', component: MainContentComponent
      },
      {
        path: '',
        component: MainContentComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private http: HttpClient) {
  iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }
}
