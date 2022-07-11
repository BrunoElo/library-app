import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxStuffService {
  constructor() {}

  doStuff(): string {
    return 'stuff library';
  }

  doStuffWithInput(input: string): string {
    return input;
  }
}
