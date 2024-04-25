import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import '@angular/compiler';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  constructor(private api: DataService) {
    this.receiveApiData()

  }

  receiveApiData() {
    this.api.getApiData();
    console.log(this.api.getApiData)
  }

}
