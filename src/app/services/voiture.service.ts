import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { voitures } from '../model/voiture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieWrapper } from '../model/categorieWrapped.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL: string = 'http://localhost:8090/voiture/api';
  apiURLCat: string = 'http://localhost:8090/voiture/cat';

  voitures!: voitures[];
  //un tableau de chînes de caractères
  //categories! : Categorie[];
  constructor(private http: HttpClient) {
    /* this.categories = [ 
    {idCat : 1, nomCat : "Sportif"},
    {idCat : 2, nomCat : "Classique"}];  */
    /*this.voitures = [
    /*{idV : 1, nomV : "Mercedess", prixV : 3000000.600, dateCreation : new Date("01/14/2022"),categorie :{idCat : 1, nomCat : "Sportif"} },
    {idV : 2, nomV : "Peugeot ", prixV : 450000.0, dateCreation : new Date("12/17/2021"), categorie : {idCat : 2, nomCat : "Classique"}},
    {idV : 3, nomV :"Clio ", prixV : 90000.123, dateCreation : new Date("02/20/2020"),categorie : {idCat : 2, nomCat : "Classique"}}
    ];*/
    this.voitures = [
      { idVoiture: 1, nomVoiture: "Mercedess", prixVoiture: 3000000.600, dateCreation: new Date("01/14/2022"), categorie: { idCat: 1, nomCat: "Sportif" } },
      { idVoiture: 2, nomVoiture: "Peugeot ", prixVoiture: 450000.0, dateCreation: new Date("12/17/2021"), categorie: { idCat: 2, nomCat: "Classique" } },
      { idVoiture: 3, nomVoiture: "Clio ", prixVoiture: 90000.123, dateCreation: new Date("02/20/2020"), categorie: { idCat: 2, nomCat: "Classique" } }
    ];
  }
  listeVoitures(): Observable<voitures[]> {
    return this.http.get<voitures[]>(this.apiURL);
  }

  ajouterVoiture(V: voitures): Observable<voitures> {
    return this.http.post<voitures>(this.apiURL, V, httpOptions);
  }



  supprimerVoiture(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterVoiture(id: number): Observable<voitures> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<voitures>(url);

  }


  trierVoiture() {
    this.voitures = this.voitures.sort((n1, n2) => {
      if (n1.idVoiture > n2.idVoiture) {
        return 1;
      }
      if (n1.idVoiture < n2.idVoiture) {
        return -1;
      }
      return 0;
    });
  }


  updateProduit(prod: voitures): Observable<voitures> {
    return this.http.put<voitures>(this.apiURL, prod, httpOptions);
  }


  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(this.apiURLCat);
  }

  rechercherParCategorie(idCat: number): Observable<voitures[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<voitures[]>(url);
  }
  rechercherParNom(nom : string ): Observable<voitures[]> {
    const url = `${this.apiURL}/prodsByName//${nom}`;
    return this.http.get<voitures[]>(url);
  }
  ajouterCategorie( cat: Categorie):Observable<Categorie>{
    return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
   }

   supprimerCategorie(id : number) {
    const url = `${this.apiURLCat}/${id}`;
    return this.http.delete(url, httpOptions);
    } 


}





