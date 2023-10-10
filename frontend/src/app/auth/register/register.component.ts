import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../app.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      username: ['cgangaro', Validators.required],
      first_name: ['Camille', Validators.required],
      last_name: ['Gangarossa', Validators.required],
      age: [24, Validators.required],
      email: ['cgangaro42@protonmail.com', [Validators.required, Validators.email]],
      password: ['qqqqqqqq', [Validators.required, Validators.minLength(8)]],
      repeat_password: ['qqqqqqqq', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, first_name, last_name, age, email, password, repeat_password } = this.registerForm.value;
      console.log(username, first_name, last_name, age, email, password, repeat_password);
      this.authService.register(username, first_name, last_name, age, email, password);
    }
  }
}
