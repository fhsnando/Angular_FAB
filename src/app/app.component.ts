import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor() {

    }

    // this.loadScripts();
    loadScripts() {
        const dynamicScripts = ['https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'];
        for (let i = 0; i < dynamicScripts.length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    }
}
