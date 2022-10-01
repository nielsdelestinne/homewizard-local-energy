import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {path: 'settings', pathMatch: 'full', component: SettingsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
