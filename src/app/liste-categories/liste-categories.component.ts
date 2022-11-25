import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {
  categories! : Categorie[];

  updatedCat:Categorie = {"idCat":0,"nomCat":""};

  ajout:boolean=true;

  constructor(private VoitureService : VoitureService) { }

  ngOnInit(): void {
    this.chargerCategories();
  }

  chargerCategories(){
    this.VoitureService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }

  updateCat(cat:Categorie) {
    this.updatedCat=cat;
    this.ajout=false;  
  }


   categorieUpdated(cat:Categorie){
    console.log("Cat updated event",cat);
    this.VoitureService.ajouterCategorie(cat).subscribe( () =>  this.chargerCategories());
  }


  supprimerCategorie(cat : Categorie) {
    let conf = confirm("Etes-vous sûr ?");
       if (conf)
       {
         this.VoitureService.supprimerCategorie(cat.idCat).subscribe(() => {
          console.log("Catégorie supprimée");
          this.chargerCategories(); }  );
       }
  } 

}
