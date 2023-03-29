import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResultPageComponent} from "./result-page/result-page.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {BudgetPlannerComponent} from "./budget-planner/budget-planner.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {TestPageComponent} from "./test-page/test-page.component";
import {BudgetPlannerNewComponent} from "./budget-planner-new/budget-planner-new.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'calc',
    component: CalculatorComponent,
  },
  {
    path: 'budget-planner',
    component: BudgetPlannerComponent,
  },
  {
    path: 'budget-planner-new',
    component: BudgetPlannerNewComponent,
  },
  {
    path: 'result',
    component: ResultPageComponent,
  },
  {
    path: 'test',
    component: TestPageComponent,
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
