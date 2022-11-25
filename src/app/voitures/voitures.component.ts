import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { voitures } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  voitures? : voitures[]; //un tableau de chînes de caractères
  constructor(private voitureService : VoitureService,private router: Router,public authService: AuthService) {
   // this.voitures=[];
  }

  ngOnInit(): void {
   // this.voitures =this.voitureService.listeVoitures();
   
   this.chargerVoiture();
    
    

  }


  chargerVoiture(){
    this.voitureService.listeVoitures().subscribe(V => {
      console.log(V);
      this.voitures = V;
      });
  }  


  supprimerVoiture(V: voitures)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.voitureService.supprimerVoiture(V.idVoiture).subscribe(() => {
        console.log("produit supprimé");
        this.chargerVoiture();     
      
});
}
  

}
