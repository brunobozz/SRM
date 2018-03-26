import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

  acoes: string[] = ['Arquivar','Excluir'];

  constructor() { }

  ngOnInit() {
    
    function alt() {
      var alt0 = $('#content-area').height();
      var alt1 = $('.alt1').height() + 20;
      var alt2 = $('.alt2').height() + 20;
      $('.widget').css('height',alt0 - alt1 - alt2 - 70);
    }

    $(document).ready(alt);
    $(window).resize(alt);

  }

}
