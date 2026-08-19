import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  /** Se true, exibe apenas projetos marcados como featured */
  @Input() featuredOnly = false;

  /** Se true, exibe o botão "Ver todos os projetos" */
  @Input() showViewAll = false;

  allProjects: Project[] = PROJECTS;
  displayedProjects: Project[] = [];
  selectedProject: Project | null = null;
  activeImageIndex = 0;

  categories = ['todos', 'web', 'mobile', 'backend', 'ia', 'outro'] as const;
  activeFilter: string = 'todos';

  ngOnInit() {
    this.applyFilter();
  }

  applyFilter() {
    let source = this.featuredOnly
      ? this.allProjects.filter(p => p.featured)
      : this.allProjects;

    this.displayedProjects = this.activeFilter === 'todos'
      ? source
      : source.filter(p => p.category === this.activeFilter);
  }

  setFilter(cat: string) {
    this.activeFilter = cat;
    this.applyFilter();
  }

  openProject(project: Project) {
    this.selectedProject = project;
    this.activeImageIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  nextImage() {
    if (!this.selectedProject) return;
    this.activeImageIndex = (this.activeImageIndex + 1) % this.selectedProject.images.length;
  }

  prevImage() {
    if (!this.selectedProject) return;
    const len = this.selectedProject.images.length;
    this.activeImageIndex = (this.activeImageIndex - 1 + len) % len;
  }

  categoryLabel(cat: string): string {
    const labels: Record<string, string> = {
      todos: 'Todos', web: 'Web', mobile: 'Mobile',
      backend: 'Backend', ia: 'IA', outro: 'Outro'
    };
    return labels[cat] ?? cat;
  }
}
