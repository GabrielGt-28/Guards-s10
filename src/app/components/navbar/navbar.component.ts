import { Component } from '@angular/core';
import { SettingsService } from '../../guards/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private settings: SettingsService, private router: Router) {}

  logout() {
    this.settings.setPermit(false);
    this.router.navigate(['/login']);
  }
}
