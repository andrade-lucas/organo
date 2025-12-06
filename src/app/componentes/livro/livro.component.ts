import { Component, input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [NgClass, CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
