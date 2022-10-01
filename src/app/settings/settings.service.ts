import {Injectable} from '@angular/core';
import {Settings} from "./settings.model";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private static SETTINGS_KEY: string = 'SETTINGS';
  private static DEFAULT_SETTINGS: Settings = {
    graphBufferSizeInMinutes: 15,
    localApiIP: '192.168.1.61',
  };
  private static DEFAULT_SETTINGS_AS_JSON: string = JSON.stringify(SettingsService.DEFAULT_SETTINGS)

  save(settings: Settings) {
    localStorage.setItem(SettingsService.SETTINGS_KEY, JSON.stringify(settings));
  }

  settings(): Settings {
    return JSON.parse(localStorage.getItem(SettingsService.SETTINGS_KEY) || SettingsService.DEFAULT_SETTINGS_AS_JSON);
  }
}
