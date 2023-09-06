import { Injectable } from '@angular/core';
import { Interface } from '../interface/interface';
import { HttpClient } from '@angular/common/http';
import { Priorite } from '../enumeration/priorite';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http: HttpClient,) { }

  public taches: Interface[] = [
    {
      id: 1,
      titre: "Angular",
      etat: false,
      date: new Date,
      priorite: Priorite.important,
      description: "Angular est un framework cool",
      tags: ["Langage de programmation", "Langage"],
    },

  {
    id: 2,
    titre: "React",
    etat: false,
    date: new Date(),
    priorite: Priorite.important,
    description: "Apprendre React pour la prochaine application",
    tags: ["Développement web", "Frontend"],
  },
  {
    id: 3,
    titre: "Backend Node.js",
    etat: true,
    date: new Date(),
    priorite: Priorite.moyen,
    description: "Configurer le serveur Node.js pour le backend",
    tags: ["Backend", "Node.js"],
  },
  {
    id: 4,
    titre: "Base de données MongoDB",
    etat: false,
    date: new Date(),
    priorite: Priorite.important,
    description: "Créer une base de données MongoDB pour l'application",
    tags: ["Base de données", "MongoDB"],
  },
  {
    id: 5,
    titre: "API REST",
    etat: true,
    date: new Date(),
    priorite: Priorite.moyen,
    description: "Concevoir et développer les endpoints de l'API REST",
    tags: ["API", "Développement web"],
  },
  {
    id: 6,
    titre: "Tests unitaires",
    etat: false,
    date: new Date(),
    priorite: Priorite.moyen,
    description: "Écrire des tests unitaires pour les composants Angular",
    tags: ["Tests", "Qualité"],
  },
  {
    id: 7,
    titre: "Design UI/UX",
    etat: false,
    date: new Date(),
    priorite: Priorite.faible,
    description: "Travailler sur le design de l'interface utilisateur",
    tags: ["Design", "UI/UX"],
  },
  {
    id: 8,
    titre: "Optimisation des performances",
    etat: false,
    date: new Date(),
    priorite: Priorite.moyen,
    description: "Optimiser les performances de l'application Angular",
    tags: ["Performance", "Optimisation"],
  },
  {
    id: 9,
    titre: "Documentation",
    etat: true,
    date: new Date(),
    priorite: Priorite.important,
    description: "Rédiger la documentation pour le projet",
    tags: ["Documentation", "Collaboration"],
  },
  {
    id: 10,
    titre: "Déploiement",
    etat: false,
    date: new Date(),
    priorite: Priorite.important,
    description: "Préparer le déploiement de l'application sur un serveur",
    tags: ["Déploiement", "Serveur"],
  },
  {
    id: 11,
    titre: "Tests d'intégration",
    etat: false,
    date: new Date(),
    priorite: Priorite.moyen,
    description: "Mettre en place des tests d'intégration pour l'application",
    tags: ["Tests", "Qualité"],
  },
  ]

  getTaches() {
    return this.taches;
  }

  addTaches(tables: any):void{
    this.taches.push(tables);
  }

  updateTaches(updateTask: any): void{
    const index = this.taches.findIndex(item => item.id === updateTask.id);
    if(index !== -1){
      const updatedTache = { ...updateTask };
      this.taches[index] = updatedTache;
      Swal.fire(
        "Mise a jour reussie",
        "La mise a jour a ete correctement effectue",
        "success"
      )
    }
  }

  deleteTaches(id: number): void{
    const index =  this.taches.findIndex(item => item.id === id);
    if(index !== -1){
     // delete this.taches[index];
     this.taches.splice(index, 1)
      Swal.fire(
        "Suppresion reussie",
        "La suppression a ete correctement effectue",
        "success"
      )
    }
  }


  getTachesById(id: number){
    const index =  this.taches.findIndex(item => item.id === id);
    return  this.taches[index];
  }
}
