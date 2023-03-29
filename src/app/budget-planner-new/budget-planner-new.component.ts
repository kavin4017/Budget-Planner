import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-planner-new',
  templateUrl: './budget-planner-new.component.html',
  styleUrls: ['./budget-planner-new.component.scss']
})
export class BudgetPlannerNewComponent implements OnInit {

  // totalIncome = 50000;
  totalIncome = 0;
  selected: any;

  mainSplit = [
    {
      "name": "Need",
      "percent": 50,
      "amount": 0,
      "split": [
        {
          "name": "Rent",
          "percent": 50,
          "amount": 0,
          "split": [
            {
              "name": "Rent and Maintainance",
              "percent": 100,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Food",
          "percent": 25,
          "amount": 0,
          "split": [
            {
              "name": "Groceries",
              "percent": 65,
              "amount": 0,
            },
            {
              "name": "Meats",
              "percent": 10,
              "amount": 0,
            },
            {
              "name": "Fruits",
              "percent": 15,
              "amount": 0,
            },
            {
              "name": "Drinking Water",
              "percent": 10,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Personal Care",
          "percent": 10,
          "amount": 0,
          "split": [
            {
              "name": "Groming",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Dress",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Medical Expense",
              "percent": 40,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Bills",
          "percent": 10,
          "amount": 0,
          "split": [
            {
              "name": "Mobile Recharge",
              "percent": 10,
              "amount": 0,
            },
            {
              "name": "Internet",
              "percent": 25,
              "amount": 0,
            },
            {
              "name": "OTTs",
              "percent": 10,
              "amount": 0,
            },
            {
              "name": "Cooking Gas",
              "percent": 25,
              "amount": 0,
            },
            {
              "name": "Electricity Bills",
              "percent": 10,
              "amount": 0,
            },
            {
              "name": "Banking Bills",
              "percent": 10,
              "amount": 0,
            },
            {
              "name": "Loans",
              "percent": 10,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Travel",
          "percent": 5,
          "amount": 0,
          "split": [
            {
              "name": "Fuel",
              "percent": 45,
              "amount": 0,
            },
            {
              "name": "Buses",
              "percent": 10,
              "amount": 0,
            },
            {
              "name": "Trains",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Cabs",
              "percent": 15,
              "amount": 0,
            }
          ]
        }
      ]
    },
    {
      "name": "Wants",
      "percent": 20,
      "amount": 0,
      "split": [
        {
          "name": "Entertainment",
          "percent": 40,
          "amount": 0,
          "split": [
            {
              "name": "Movies",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Outtings",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Foods",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Gifts and Events",
              "percent": 10,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Gadgets",
          "percent": 25,
          "amount": 0,
          "split": [
            {
              "name": "Gadgets buy",
              "percent": 50,
              "amount": 0,
            },
            {
              "name": "Gadgets plans",
              "percent": 50,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Accessories",
          "percent": 10,
          "amount": 0,
          "split": [
            {
              "name": "Home Accessories",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Personal Accessories",
              "percent": 40,
              "amount": 0,
            },
            {
              "name": "Parent Accessories",
              "percent": 30,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Outing savings",
          "percent": 25,
          "amount": 0,
          "split": [
            {
              "name": "Abroad",
              "percent": 60,
              "amount": 0,
            },
            {
              "name": "Year-end trip",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Frequent Trip",
              "percent": 10,
              "amount": 0,
            }
          ]
        }
      ]
    },
    {
      "name": "Savings",
      "percent": 30,
      "amount": 0,
      "split": [
        {
          "name": "Zero loss",
          "percent": 50,
          "amount": 0,
          "split": [
            {
              "name": "Recuring Deposit",
              "percent": 20,
              "amount": 0,
            },
            {
              "name": "Public Provident Fund",
              "percent": 20,
              "amount": 0,
            },
            {
              "name": "Fixed Deposit",
              "percent": 60,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Market",
          "percent": 25,
          "amount": 0,
          "split": [
            {
              "name": "Mutual Fund",
              "percent": 20,
              "amount": 0,
            },
            {
              "name": "Shares",
              "percent": 30,
              "amount": 0,
            },
            {
              "name": "Gold",
              "percent": 50,
              "amount": 0,
            }
          ]
        },
        {
          "name": "Insurance",
          "percent": 25,
          "amount": 0,
          "split": [
            {
              "name": "Life Insurance",
              "percent": 80,
              "amount": 0,
            },
            {
              "name": "Health Insurance",
              "percent": 20,
              "amount": 0,
            }
          ]
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.valueAssign();
  }

  valueAssign(){
    for (let val of this.mainSplit) {
      val.amount = this.totalIncome * val.percent / 100;

      for (let subVal of val.split) {
        subVal.amount = val.amount * subVal.percent / 100;

        for (let depSubVal of subVal.split) {
          depSubVal.amount = subVal.amount * depSubVal.percent / 100;
        }
      }
    }
  }

  onSubSplitterChange(selected: any){
    this.selected = selected;
  }

  onIncomeChange(selected: any){
    this.totalIncome = selected.target.value;
    this.valueAssign();
  }

}
