import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _userPermit: boolean = false;

  constructor() {}

  getPermit() {
    return this._userPermit;
  }

  setPermit(value: boolean) {
    this._userPermit = value;
  }
}
