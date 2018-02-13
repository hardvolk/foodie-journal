import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safe' })
export class SafePipeMock implements PipeTransform {
  constructor() {}
  transform(string) {
    return string;
  }
}
