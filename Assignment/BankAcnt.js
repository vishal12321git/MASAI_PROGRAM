function createBankAccount(amount){
    let balance = amount
    function deposit(amount){
        balance+=amount;
        return `Current Balance : ${balance}`
    }
    function withdraw(amount){
        if(balance>=amount){
            balance-=amount;
            return `Current Balance : ${balance}`
        }else return "Insufficient Funds"
    }
    function getBalance(){
        return `Current Balance : ${balance}`
    }
    return {
        deposit,
        withdraw,
        getBalance
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(250));
console.log(account.withdraw(30));
console.log(account.getBalance());