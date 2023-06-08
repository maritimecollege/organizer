import { Component } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Разработка автоматизированной информационной системы "Учет обучающихся" ГБОУ РК АСШИ';

  constructor() {
    // Initialize your Parse App Keys
    Parse.initialize("eVIEh9KlNVzj2BNGqbRhRSnKsoLWhm9lc3SeJMqe","aor6mfB49UFJtbQCsns2toOCQzbGCbjDLX17kTnu"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    (Parse as any).serverURL = 'https://parseapi.back4app.com/'
  }

  saveNewPlayer() {
    //Create your Parse Object
    const soccerPlayer = new Parse.Object('SoccerPlayer');
    //Define its attributes
    soccerPlayer.set('playerName', 'A. Wed');
    soccerPlayer.set('yearOfBirth', 1997);
    soccerPlayer.set('emailContact', 'a.wed@email.io');
    soccerPlayer.set('attributes', ['fast', 'good conditioning']);
    try {
      //Save the Object
      const result = soccerPlayer.save() as any;
      alert('New object created with objectId: ' + result.id);
    } catch (error: any) {
      alert('Failed to create new object: ' + error?.message);
    }
  }

}
