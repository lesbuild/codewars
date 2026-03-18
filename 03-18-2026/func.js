function saveOrBills(arr,bills){
    let savings = arr.filter(a=>a%2==0).reduce((b,c)=>b+c)
    let forBills = arr.filter(a=>a%2==1).reduce((b,c)=>b+c) - bills
    return forBills + savings <= 0 ? "We need to reduce bills and start saving" : forBills > 0 ?
            `After bills paid we have $${savings + forBills} of savings and $${forBills} extra money on checking account` : `After bills paid we have $${savings + forBills} in savings account`     
}
// Description:

// We are trying to save money so we apply and sort our money according to odd or even. 

// even goest to savings account and odd goes to pay for bills. 

// We need to find if the payment for bills is enough to cover our monthly bill or we need to take money from the fund on savings account. 

// Write "After bills paid we have {$ savings} of savings and {$ money to pay bills} extra money on checking account" when the money to pay bills are enough and have extra

// "After bills paid we have {$ savings} of savings account" when the money for bills is not enough and have to take money from the savings account

// "We need to reduce bills and start saving"  when you are negative on money save for the entire month

// saveOrBills([1,2,3,4],7) => After bills paid we have $3 of savings account

// saveOrBills([1,2,3,4],3) => After bills paid we have $7 of savings and $1 extra money on checking account

// saveOrBills([1,2,3,4],11) => We need to reduce bills and start saving