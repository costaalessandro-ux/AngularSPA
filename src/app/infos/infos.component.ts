import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.css']
})

export class InfosComponent implements OnInit{

  @Input()
  
  imageUrl: string = '/img/pat.jpg'
  nome: string = 'Patríca Boyle'
  email: string = 'patriciaboyle@gmail.com'
  tel: string = '993879751'
  cargo: string = 'CEO'

    constructor() {}

    ngOnInit(): void {
        
    }

}