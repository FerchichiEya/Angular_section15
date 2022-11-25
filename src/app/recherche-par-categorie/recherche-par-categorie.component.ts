import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { voitures } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {
  voitures! : voitures[];
  IdCategorie! : number;
  categories! : Categorie[];
  
  constructor(private voitureService : VoitureService) { }

  ngOnInit(): void {
    this.voitureService.listeCategories().
subscribe(cats => {this.categories = cats._embedded.categories;
console.log(cats);
});
  }

onChange() {
  this.voitureService.rechercherParCategorie(this.IdCategorie).
    subscribe(V =>{this.voitures=V});

  }

  }


