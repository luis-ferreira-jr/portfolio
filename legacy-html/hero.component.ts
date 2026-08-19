import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  socialLinks = [
    {
      label: 'GitHub',
      icon: 'assets/portfolio/github.png',
      url: 'https://github.com/LuisCarlosJr00'
    },
    {
      label: 'LinkedIn',
      icon: 'assets/portfolio/linkedin.png',
      url: 'https://www.linkedin.com/in/luis-carlos-ferreira-junior-27512422b'
    },
    {
      label: 'WhatsApp',
      icon: 'assets/portfolio/whatsapp.png',
      url: 'https://wa.me/qr/BI556XQKYDS4L1'
    }
  ];
}
