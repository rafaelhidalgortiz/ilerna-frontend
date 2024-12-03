import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TiendaService } from './tienda.service';
import { Clientes } from './cliente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  
  ngOnInit(): void {
   
  } 
  title = 'tienda online';
  constructor(private tiendaServicio: TiendaService) { }
 
}