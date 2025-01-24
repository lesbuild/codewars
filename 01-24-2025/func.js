const denom = [100, 50, 20, 10, 5, 1];

const giveChange = amount => (denom.map(value => {
      let result = Math.trunc(amount / value);
      amount = amount % value;
      return result;
    })
    .reverse()
);