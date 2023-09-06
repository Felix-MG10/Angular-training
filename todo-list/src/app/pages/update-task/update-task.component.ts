import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TachesService} from "../../service/taches.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{
  formGroup: any;
  tachesById!: number
  details: [] = []
  constructor(private formBuilder: FormBuilder ,private route: ActivatedRoute, private tachesService: TachesService, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      titre: ["", Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
      priorite: ["", Validators.required],
      tags: ["", Validators.required],
      etat: [false] // Initialisation à false pour une case à cocher
    });

    /*
    this.route.params.subscribe(params => {
      const taskId = params['id'];
      console.log("valeur taskid: "+taskId)
    });
    */
    //Ou

     this.tachesById = this.route.snapshot.params['id'];
    console.log("valeur tachesById: "+this.tachesById)

  }


  handleUpdate(): void {
    if (this.formGroup.valid) {
      const updatedTask = this.formGroup.value;
      updatedTask.id = this.tachesById;

      this.tachesService.updateTaches(updatedTask);

      Swal.fire(
        'Task updated',
        'click fot the quite',
        'success'
      )
      this.router.navigate(["/list"]);
    } else {
      Swal.fire(
        'Task error',
        'click fot the quite',
        'error'
      )
      console.log("Formulaire invalide");
    }
  }
}
