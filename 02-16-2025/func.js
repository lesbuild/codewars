function budgeting(money, expense){
    let afterBudget = money - expense.reduce((a,b)=>a+b,0)
    return  afterBudget > 0 ? `We can save ${afterBudget * .2} from our budget` : "We need to cut our expenses"
}