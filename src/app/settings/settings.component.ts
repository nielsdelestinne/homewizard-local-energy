import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SettingsService} from "./settings.service";
import {Location} from "@angular/common";
import {delay, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit, OnDestroy {

  settingsForm!: FormGroup;
  isClosing = false;
  private isClosing$ = new Observable((subscriber => subscriber.next())).pipe(delay(1000));
  private isClosingSubscription$!: Subscription;

  constructor(private settingsService: SettingsService, private location: Location) {
  }

  ngOnInit(): void {
    this.settingsForm = new FormGroup({
      localApiIP: new FormControl(this.settingsService.settings().localApiIP, Validators.required),
      graphBufferSizeInMinutes: new FormControl(this.settingsService.settings().graphBufferSizeInMinutes, Validators.required)
    });
  }

  ngOnDestroy(): void {
    if (this.isClosingSubscription$ && !this.isClosingSubscription$.closed) {
      this.isClosingSubscription$.unsubscribe();
    }
  }

  onSubmit() {
    this.settingsService.save(this.settingsForm.value);
    this.isClosing = true;
    this.navigateBackAfterDelay();
  }

  private navigateBackAfterDelay() {
    this.isClosingSubscription$ = this.isClosing$
      .subscribe(_ =>
        this.location.back()
      );
  }

}
