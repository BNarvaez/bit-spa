import { Component, inject } from '@angular/core';
import { ApirickService } from '../../services/apirick.service';

@Component({
  selector: 'app-api-tercero',
  imports: [],
  templateUrl: './api-tercero.component.html',
  styleUrl: './api-tercero.component.css'
})
export class ApiTerceroComponent {
  
  apirickService = inject(ApirickService);

  data: any[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apirickService.getData().subscribe((response: any) => {
    this.data = response;
    console.log(this.data);
    });
  }





}
