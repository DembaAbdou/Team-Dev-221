import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'DG Issa Sow' },
      { id: 2, name: 'AD Le Véridique' },
      { id: 3, name: 'Nullard M Bachir' },
      { id: 4, name: 'Mbengue Sawaré' },
      { id: 5, name: 'Gérard Laye ' },
      { id: 6, name: 'Alliance Pendista' },
      { id: 7, name: 'Zahra Fatim' },
      { id: 8, name: 'Dr Khalil' },
      { id: 9, name: 'SG Abdu' },
      { id: 10, name: 'PCP Senhor Sen' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}