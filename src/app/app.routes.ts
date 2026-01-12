import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ComponentsPageComponent} from "./home-page/components-page/components-page.component";
import {TemplatesPageComponent} from "./home-page/templates-page/templates-page.component";
import {HelpGuideComponent} from "./home-page/help-guide/help-guide.component";
import {WelcomePageComponent} from "./home-page/welcome-page/welcome-page.component";
import {ErrorPageComponent} from "./home-page/error-page/error-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Kerfais library',
    children: [
      {
        path: '',
        component: WelcomePageComponent,
        title: 'Kerfais library'

      },
      {
        path: 'components',
        component: ComponentsPageComponent,
        title: 'Components',
      },
      {
        path: 'templates',
        component: TemplatesPageComponent,
        title: 'Templates'
      },
      {
        path: 'help',
        component: HelpGuideComponent,
        title: 'Help guide'
      },
      {
        path: '**',
        component: ErrorPageComponent,
        title: 'Error 404'
      }
    ]
  }
];
