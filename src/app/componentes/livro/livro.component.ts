import { Component } from '@angular/core';
import { Livro } from './livro';
// import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }

  livro: Livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    genero: "Ficção",
    imagem: "https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg"
  }
}
