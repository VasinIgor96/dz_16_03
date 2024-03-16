// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками


function performBankOperations(balance, bankOperationCallback) {
    const updatedBalance = bankOperationCallback(balance);
    console.log(`Оновлений баланс: ${updatedBalance} грн.`);
}
function depositMoney(balance) {
    const depositAmount = 100;
    console.log(`Поповнення рахунку на ${depositAmount} грн.`);
    return balance + depositAmount;
}

function withdrawMoney(balance) {
    const withdrawalAmount = 50; 
    if (balance >= withdrawalAmount) {
        console.log(`Зняття ${withdrawalAmount} грн з рахунку.`);
        return balance - withdrawalAmount; 
    } else {
        console.log('Недостатньо коштів на рахунку.');
        return balance;
    }
}

const initialBalance = 500;
console.log(`Початковий баланс: ${initialBalance} грн.`);

performBankOperations(initialBalance, depositMoney);
performBankOperations(initialBalance, withdrawMoney);
