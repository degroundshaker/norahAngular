import {Component, Input, OnInit} from '@angular/core';
import {TerrainGenService} from '../terrain-gen.service';

@Component({
  selector: 'app-caves',
  templateUrl: './caves.component.html'
})
export class CavesComponent implements OnInit {

  terrains = [];
  isGenerate: boolean = false;
  isOpen: boolean = true;
  @Input() generationType: string;

  constructor(private tergenService: TerrainGenService) { }

  ngOnInit() {
    this.tergenService.getTerrains(this.generationType)
      .then(data => this.terrains = data)
      .catch(error => console.log(error));
  }

  nextTerGan() {
    this.isGenerate = !this.isGenerate;
    return false;
  }

  isOpenAccord() {
    this.isOpen = !this.isOpen;
  }

}
