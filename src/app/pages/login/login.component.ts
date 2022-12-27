import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from '../../guards/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private fg: FormBuilder,
    private settings: SettingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fg.group({
      user: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach((control) =>
        control.markAllAsTouched()
      );
      return;
    }

    if (
      this.myForm.value.user == 'admin' &&
      this.myForm.value.password == '123'
    ) {
      this.settings.setPermit(true);
      this.router.navigate(['/home']);
    } else {
      alert('Contraseña o usuario incorrecto');
    }
  }

  get fc(): any {
    return this.myForm.controls;
  }
}
