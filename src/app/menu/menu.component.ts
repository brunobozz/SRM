import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
//import * as data from '../../assets/menu.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  //jsonMenu = data.menu;
  // eu fiz com json primeiro...
  // mas o import lá no topo dava erro na hora de rodar.

  jsonMenu: any[] = [
    {title:"Painel de Gestão",   icon:"1", subMenu:false, url:"#", active:true},
    {title:"Conta Digital",      icon:"2", subMenu:false, url:"#", active:false},
    {title:"Ant. de Recebíveis", icon:"3", subMenu:true,  url:"#", active:false},
  ];

  ngOnInit() {

  }

}


