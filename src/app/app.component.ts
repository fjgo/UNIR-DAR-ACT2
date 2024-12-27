import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MatIconModule, CommonModule]
})
export class AppComponent {
  constructor(private router: Router) { }
  showTopButton = false;
  hasPreviousPage = true;
  hasNextPage = true;
  links = [
    { path: '/introduccion', label: 'Introducción' },
    { path: '/configuracion', label: 'Configuración' },
    { path: '/estructura', label: 'Estructura' },
    { path: '/componentes', label: 'Componentes' },
    { path: '/modulos', label: 'Módulos' },
    { path: '/rutas', label: 'Rutas' },
    { path: '/directivas', label: 'Directivas' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/formularios', label: 'Formularios' },
    { path: '/despliegue', label: 'Despliegue' }
  ];
  currentIndex = 0;
  paginaAnterior = "";
  paginaSiguiente = "";
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 50;
  }
  goToPreviousPage() {
    const currentPath = this.router.url;
    const currentIndex = this.links.findIndex((link) => link.path === currentPath);
    if (currentIndex > 0) {
      this.router.navigate([this.links[currentIndex - 1].path]);
    }
  }

  goToNextPage() {
    const currentPath = this.router.url;
    this.currentIndex = this.links.findIndex((link) => link.path === currentPath);
    if (this.currentIndex < this.links.length - 1) {
      this.router.navigate([this.links[this.currentIndex + 1].path]);
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPath = this.router.url;
        this.currentIndex = this.links.findIndex((link) => link.path === currentPath);
        if (this.currentIndex > 0) {
          this.hasPreviousPage = true;
          this.paginaAnterior = this.links[this.currentIndex - 1].label;
        } else {
          this.hasPreviousPage = false;
          this.paginaAnterior = "";
        }
        if (this.currentIndex < this.links.length - 1) {
          this.hasNextPage = true;
          this.paginaSiguiente = this.links[this.currentIndex + 1].label;
        } else {
          this.hasNextPage = false;
          this.paginaSiguiente = "";
        }
        window.scrollTo(0, 0);
      }
    });
  }
}
