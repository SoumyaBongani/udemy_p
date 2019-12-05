import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy';
  loadFeature:string = 'recipe';
  featureSelected(feature:string){
    this.loadFeature = feature;
  }
}
