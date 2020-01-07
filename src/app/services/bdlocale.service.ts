import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { resolve } from 'q';
import { User } from '../models/user';
import { LoginComponent } from 'app/login/login.component';


/**
    * Le service permettant d'accéder et de modifier les données de la BD
    * @class BDlocaleService
*/

@Injectable({
  providedIn: 'root'
})
export class BdlocaleService {
  constructor() { }

  //a construire et a utiliser lorsqu'on veut reenregistrer le profil utilisateur
  async setUser(user: User): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
      LoginComponent.userCourant = user;
      resolve(true);
    });
  }

  /**
    * permet de vérifier si une personne est inscrite parmi nos Users. Retourne l'User
    * en question si ce dernier est valide et null sinon
    * @param {string} nom - nom de l'User
    * @param {string} mdp - mot de passe de l'User 
    * @return User
  */
  async verify(nom: string, mdp: string): Promise<User> {
    let user = new User();
    user.adresse = "Melen";
    user.email = "admin@admin.com";
    user.mdp = "admin";
    user.nom = "admin";
    user.pseudo = "admin";
    user.tel = "xxx";

    return new Promise<User>((resolve, reject) => {
      if(user.nom == nom && user.mdp == mdp){
        resolve(user);
      }
      else{
        resolve(null);
      }
    });
  }

  async removeUser(key: any): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {

    });
  }
}
