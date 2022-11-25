import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { voitures } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

 
@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  newIdCat!:number;
  newVoiture = new voitures();
  categories! : Categorie[];
  newCategorie! : Categorie;
 

  constructor(private voitureService : VoitureService,private router :Router) { }

  ngOnInit(): void {
    this.voitureService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    }


  addVoiture(){
   
    
     this.voitureService.ajouterVoiture(this.newVoiture)
     .subscribe(V => {
       console.log(V);
       this.newVoiture.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
       this.router.navigate(['voitures']);
       }); 


  }

  }