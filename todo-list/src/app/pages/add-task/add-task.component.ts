import { Component, OnInit } from '@angular/core';
import { Priorite } from 'src/app/enumeration/priorite';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TachesService } from 'src/app/service/taches.service';
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  formGroup: any;
  prioritEnum = Priorite;

  getPrioriteValues(){
    return Object.values(this.prioritEnum)
  }

  constructor(
    private tacheService: TachesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }



  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      titre: ["", Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
      priorite: ["", Validators.required],
      tags: ["", Validators.required],
      etat: false,
    })
  }

  handleTask() {
    if (this.formGroup.valid){
      const {titre, description, date, priorite, tags, etat} = this.formGroup.value;
      const newTable = {titre, description, date, priorite, tags, etat};
      this.tacheService.addTaches(newTable);
      Swal.fire(
        'Task added',
        'click fot the quite',
        'success'
      )
      this.router.navigate(["list"])
    }else {
      Swal.fire(
        'error',
        'click for to quite',
        'error'
      )
    }
  }
}
