import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;

  navLinks = [
    { path: '/', label: 'Início', icon: '⌂' },
    { path: '/habilidades', label: 'Habilidades', icon: '◈' },
    { path: '/projetos', label: 'Projetos', icon: '◉' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
