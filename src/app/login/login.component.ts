import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user';

import { BdlocaleService } from '../services/bdlocale.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public static userCourant: User = null;
  public form: FormGroup;
  public submitting: boolean = false;
  public errorMessage: string = '';
  public static userStore: UserStoreService;

  constructor(private fb: FormBuilder,
    private router: Router,
    private userStore: UserStoreService,
    private bdService: BdlocaleService) {
    LoginComponent.userStore = userStore;
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.submitting = true;
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      console.log(this.form.value);
      this.bdService.verify(username, password).then(
        (success) => {
          if (success !== null) {
            LoginComponent.userStore.isLoggedIn = true;
            LoginComponent.userCourant = success;
            console.log("connexion reussie");
          } else {
            this.errorMessage = "Utilisateur introuvable";
            LoginComponent.userStore.isLoggedIn = false;
            console.log("connexion échouée")
          }
          this.router.navigate(['']);
        },
        (error) => {
          console.log("erreur de connexion", error)
        }
      );
    }
    this.submitting = false;
  }

  ngOnInit() {
  }
}
