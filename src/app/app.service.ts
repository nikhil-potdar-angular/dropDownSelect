import { Injectable } from '@angular/core';
import { Food } from './app.model';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getFoods(): Food[] {
    return [
      {
        id: 1,
        name: 'Grapes 🍇'
      },
      {
        id: 2,
        name: 'Melon 🍈'
      },
      {
        id: 3,
        name: 'Watermelon 🍉'
      },
      {
        id: 4,
        name: 'Tangerine 🍊'
      },
      {
        id: 5,
        name: 'Lemon 🍋'
      },
      {
        id: 6,
        name: 'Banana 🍌'
      },
      {
        id: 7,
        name: 'Pineapple 🍍'
      },
      {
        id: 8,
        name: 'Red Apple 🍎'
      },
      {
        id: 9,
        name: 'Green Apple 🍏'
      },
      {
        id: 10,
        name: 'Pear 🍐'
      },
      {
        id: 11,
        name: 'Peach 🍑'
      },
      {
        id: 12,
        name: 'Cherries 🍒'
      },
      {
        id: 13,
        name: 'Strawberry 🍓'
      },
      {
        id: 14,
        name: 'Kiwi Fruit 🥝'
      },
      {
        id: 15,
        name: 'Tomato 🍅'
      },
      {
        id: 16,
        name: 'Coconut 🥥'
      },
      {
        id: 17,
        name: 'Avocado 🥑'
      },
      {
        id: 18,
        name: 'Eggplant 🍆'
      },
      {
        id: 19,
        name: 'Potato 🥔'
      },
      {
        id: 20,
        name: 'Carrot 🥕'
      },
      {
        id: 21,
        name: 'Ear of Corn 🌽'
      },
      {
        id: 22,
        name: 'Hot Pepper 🌶'
      },
      {
        id: 23,
        name: 'Cucumber 🥒'
      },
      {
        id: 24,
        name: 'Broccoli 🥦'
      },
      {
        id: 25,
        name: 'Peanuts 🥜'
      },
      {
        id: 26,
        name: 'Bread 🍞'
      },
      {
        id: 27,
        name: 'Croissant 🥐'
      },
      {
        id: 28,
        name: 'Baguette Bread 🥖'
      },
      {
        id: 29,
        name: 'Pretzel 🥨'
      },
      {
        id: 30,
        name: 'Pancakes 🥞'
      },
    ]
  }
}
