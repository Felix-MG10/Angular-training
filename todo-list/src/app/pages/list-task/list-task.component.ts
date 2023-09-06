import { Component, OnInit } from '@angular/core';
import { TachesService } from 'src/app/service/taches.service';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit{

  //injection du service si on utilise une Api
  constructor(
    private tacheServices: TachesService,
    private router: Router
  ){}

  //tableau a parcourir
  taches: any[] = []

  //Execution
  ngOnInit(): void {
    this.taches = this.tacheServices.getTaches();
  }


  //Actions

  //update
  /*
  handleUpdate(){
    //this.tacheServices.updateTaches(task);

  }
  */



  handleDelete(id: number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.taches.findIndex(item => item.id === id)
        if(index !== -1){
          this.taches.splice(index, 1)

        }
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  handleDetail(id: number){

  }

  handleUpdate(id: number) {
    this.router.navigate(["list/update", id]); // Assurez-vous d'avoir une route pour la mise à jour
  }
}
