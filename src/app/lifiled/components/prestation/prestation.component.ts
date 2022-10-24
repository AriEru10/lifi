import { Component, OnInit } from '@angular/core';
import { produits } from './liste';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  produits_list!: { image: string, label: string } [];

  constructor() { }

  ngOnInit(): void {
    this.produits_list = produits;
  }

}
