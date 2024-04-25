import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo3';
  constructor(private route: Router) {

  }
  navigateToHome() {
    this.route.navigate(['home']);
  }

  navigateToReact() {
    this.route.navigate(['react']);
  }

  nivigateToApi() {
    this.route.navigate(['api']);
  }
}
