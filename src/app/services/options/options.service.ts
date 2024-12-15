import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private difficultyOptions = new Map<string, string>([
    ['easy', 'Facile'],
    ['intermediate', 'Intermédiaire'],
    ['hard', 'Difficile']
  ]);

  private typeOptions = new Map<string, string>([
    ['piano', 'Piano'],
    ['guitar', 'Guitare'],
    ['violin', 'Violon']
  ]);

  constructor() { }

  getDifficultyOptions(): Map<string, string> {
    return this.difficultyOptions;
  }

  getTypeOptions(): Map<string, string> {
    return this.typeOptions;
  }

  getDifficultyValue(key: string): string {
    return this.difficultyOptions.get(key) || 'Inconnue';
  }

  getTypeValue(key: string): string {
    return this.typeOptions.get(key) || 'Inconnu';
  }
}
