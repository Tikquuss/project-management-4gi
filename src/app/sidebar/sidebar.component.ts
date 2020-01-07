import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user', title: 'Profil Utilisateur',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Administration',  icon:'pe-7s-note2', class: '' },
    { path: '/enregistreur', title: 'Page Enregistreur',  icon: 'pe-7s-user', class: '' },
    { path: '/controleur', title: 'Page Controleur',  icon:'pe-7s-door-lock', class: '' },
    { path: '/controle-inv', title: 'Page Controle-inv',  icon:'pe-7s-door-lock', class: '' },
    { path: '/localisation', title: 'Page Localisation',  icon: 'pe-7s-map-2', class: '' },
    { path: '/vehicule', title: 'Page Vehicule',  icon:'pe-7s-car', class: '' },
    { path: '/modele', title: 'Page Modele',  icon:'pe-7s-plugin', class: '' },
    { path: '/piece', title: 'Page Piece',  icon: 'pe-7s-id', class: '' },
    { path: '/type-piece', title: 'Page Type Piece',  icon:'pe-7s-id', class: '' },
    { path: '/pieces-invalidees', title: 'Page Piece Invalidée',  icon:'pe-7s-plugin', class: '' },
    { path: '/organisme', title: 'Page Organisme',  icon:'pe-7s-network', class: '' },
    { path: '/type-organisme', title: 'Page Type Organisme',  icon:'pe-7s-network', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
