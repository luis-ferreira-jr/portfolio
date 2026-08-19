import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS, CERTIFICATIONS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = SKILLS;
  certifications = CERTIFICATIONS;

  categories = ['linguagem', 'framework', 'ferramenta', 'banco', 'outro'] as const;

  categoryLabel: Record<string, string> = {
    linguagem: 'Linguagens',
    framework: 'Frameworks',
    ferramenta: 'Ferramentas',
    banco: 'Banco de Dados',
    outro: 'Outros'
  };

  skillsByCategory(cat: string) {
    return this.skills.filter(s => s.category === cat);
  }

  hasCategory(cat: string) {
    return this.skills.some(s => s.category === cat);
  }
}
