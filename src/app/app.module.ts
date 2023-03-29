import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BudgetPlannerComponent } from './budget-planner/budget-planner.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { BudgetPlannerNewComponent } from './budget-planner-new/budget-planner-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultPageComponent,
    CalculatorComponent,
    BudgetPlannerComponent,
    ErrorPageComponent,
    TestPageComponent,
    BudgetPlannerNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
