import { Component, OnInit } from '@angular/core';
import { voitures } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nomVoiture! : string;
  voitures! : voitures[];
  allVoitures!: voitures[];
  searchTerm!: string;
  constructor(private voitureService :VoitureService ) { }

  ngOnInit(): void {
    this.voitureService.listeVoitures().subscribe(V => {
      console.log(V);
      this.voitures = V;
      });
  }
  rechercherV(){
    this.voitureService.rechercherParNom(this.nomVoiture).
    subscribe(V => {
      console.log(V);
      this.voitures=V;});
  }

  onKeyUp(filterText : string){
    this.voitures = this.allVoitures.filter(item =>
    item.nomVoiture.toLowerCase().includes(filterText));
    }
    
}
