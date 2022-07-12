import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.css']
})

export class InfosComponent implements OnInit{

  @Input()
  
  imageUrl: string = '';

  usuarios = [ {
    imageUrl: '/img/pat.jpg',
    nome: 'Patríca Boyle',
    email: 'patriciaboyle@gmail.com',
    tel: '993879751',
    cargo: 'CEO',
  },
  
  
  ]

  

    constructor() {}

    ngOnInit(): void {
        
    }

}