import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Provided at the root level by default
})
export class LoggingService {
  private logCounter = 0;

  log(message: string) {
    this.logCounter++;
    console.log(`Log #${this.logCounter}: ${message}`);
  }
}
