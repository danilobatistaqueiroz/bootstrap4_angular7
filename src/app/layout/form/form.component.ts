import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import * as $ from 'jquery';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    	$("#success-alert").hide();
    }

	showAlert() {
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        	$("#success-alert").slideUp(500);
    	});   
    }
}
