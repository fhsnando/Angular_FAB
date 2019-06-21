import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-help-bootstrap',
    templateUrl: './help-bootstrap.component.html',
    styleUrls: ['./help-bootstrap.component.css']
})
export class HelpBootstrapComponent implements OnInit {
    // TODO Configure a url do help-infotic
    url = 'https://help-infotic.hom.tic.ufrj.br/duvidas-sistema/HELP-INFOTIC?controleFecharJanela=false';

    // TODO Configure o e-mail de suporte
    mail = 'email@email.com';

    constructor() {
    }

    ngOnInit() {
        $('#url_help').attr('src', this.url);
        $('#buttons').hover(
            function () {
                $('#collapsebtn').toggle('show');
            }, function () {
                $('#collapsebtn').toggle('hide');
            }
        );
    }

}
