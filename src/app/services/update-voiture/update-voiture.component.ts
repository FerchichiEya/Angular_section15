import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { voitures } from 'src/app/model/voiture.model';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture = new voitures();
  categories! : Categorie[];
  updateCatId!:number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private voitureService: VoitureService) { }

  ngOnInit(): void {
   this.voitureService.listeCategories().
   subscribe(cats =>{this.categories= cats._embedded.categories;
  console.log(cats);
});

this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).
subscribe(V =>{this.currentVoiture=V;
  this.updateCatId=this.currentVoiture.categorie.idCat;
});
    
  }
  updateVoiture() {
    this.currentVoiture.categorie = this.categories.find(cat => cat.idCat == this.updateCatId)!;
         this.voitureService.updateProduit(this.currentVoiture).subscribe(V => {
      this.router.navigate(['voitures']); }
      );
  }

}
