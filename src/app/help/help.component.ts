import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import * as $ from 'jquery';


@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

    // TODO Configure a url do help-infotic
    url = 'https://help-infotic.hom.tic.ufrj.br/duvidas-sistema/HELP-INFOTIC?controleFecharJanela=false';

    // TODO Configure o e-mail de suporte
    mail = 'email@email.com';

    constructor() {
    }

    ngOnInit() {
        document.addEventListener('DOMContentLoaded', function (options) {
            let elems = document.querySelectorAll('.fixed-action-btn');
            let instances = M.FloatingActionButton.init(elems, options);
        });


        document.addEventListener('DOMContentLoaded', function (options) {
            let elems = document.querySelectorAll('.modal');
            let instances = M.Modal.init(elems, options);
        });

        $('#url_help').attr('src', this.url);


    }

}
