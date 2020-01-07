import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { UserStoreService } from './services/user-store.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BdlocaleService } from './services/bdlocale.service';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule, // Preferables aux template driven forms
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
  ],
  providers: [UserStoreService,
    AuthGuardService,
    BdlocaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
