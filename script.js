const userBalance = document.getElementById('balance')
const inputAmount = document.getElementById('amount')
const depositButton = document.getElementById('deposit-btn')
const withdrawButton = document.getElementById('withdraw-btn')


class Bank {
  constructor(balance) {
    this.balance = balance //balance property
  }

  deposit(input) {
    this.balance += input
    console.log('deposited,', `Rp.${input}`);
    console.log({balance:this.balance});
  }

  withdraw(input) {
    if(this.balance - input <= 0) {
      console.log('you cant');
      return
    }

    this.balance -= input
    console.log('withdrew,',`Rp.${input}`);
    console.log({balance:this.balance});
  }
}

const account = new Bank(100000)

console.log(account.balance);

depositButton.onclick = () => {
  account.deposit(Number(inputAmount.value))
}

withdrawButton.onclick = () => {
  account.withdraw(Number(inputAmount.value))
}



