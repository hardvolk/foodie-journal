import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  public tracks = [
    {
      unitsCcompleted: 1,
      unitsTotal: 10,
      iconUrl: '../../../assets/icons/tracks/burger.png',
      title: 'American',
      description: 'One characteristic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles.',
      duration: '3 weeks',
    },
    {
      unitsCcompleted: 0,
      unitsTotal: 4,
      iconUrl: '../../../assets/icons/tracks/pizza.png',
      title: 'Italian',
      description: 'An Italian meal is famous for its structure into several sections: the appetiser, pasta or rice dish, a meat course and dolce dessert.',
      duration: '1 week',
    },
    {
      unitsCcompleted: 0,
      unitsTotal: 7,
      iconUrl: '../../../assets/icons/tracks/taco.png',
      title: 'Mexican',
      description: 'Known for its varied flavours and spices, the food of Mexico is a result of the Spanish conquistadores’ interaction with the Aztec culture.',
      duration: '2 weeks',
    },
    {
      unitsCcompleted: 0,
      unitsTotal: 8,
      iconUrl: '../../../assets/icons/tracks/sushi.png',
      title: 'Japanese',
      description: 'In 2014, 14 restaurants in Tokyo and Shonan maintain a Michelin three-stars rating, the ultimate international recognition in the culinary world.',
      duration: '3 weeks',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
