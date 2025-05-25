import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
    isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  collapseNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar?.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  }

  toggleNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
      bsCollapse.toggle();
    }
  }
}
