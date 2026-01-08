import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ButtonsComponentsComponent} from "./home-page/buttons-components/buttons-components.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Kerfais library',
    children: [
      {
        path: 'buttons',
        component: ButtonsComponentsComponent,
        title: 'Kerfais library',
      }
    ]
  }
];
