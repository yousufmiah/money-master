// for minus function
function minus(a, b) {
  return a - b;
}

//calculate button
document.getElementById("cal-btn").addEventListener("click", function () {
  const incomeAmount = document.getElementById("income-amount");
  const foodAmount = document.getElementById("food-amount");
  const rentAmount = document.getElementById("rent-amount");
  const clothesAmount = document.getElementById("clothes-amount");
  const totalExpenses = document.getElementById("total-expenses");

  if (
    incomeAmount.value == "" ||
    incomeAmount.value < 0 ||
    incomeAmount.Value == NaN
  ) {
    alert("Ohh! Please type only numbers in INCOME.");
  } else if (
    foodAmount.value == "" ||
    foodAmount.value < 0 ||
    foodAmount.value == NaN
  ) {
    alert("Ohh! Please type only numbers in FOOD.");
  } else if (
    rentAmount.value == "" ||
    rentAmount.value < 0 ||
    rentAmount.value == NaN
  ) {
    alert("Ohh! Please type only numbers in RENT.");
  } else if (
    clothesAmount.value == "" ||
    clothesAmount.value < 0 ||
    clothesAmount.value == NaN
  ) {
    alert("Ohh! Please type only numbers in CLOTHES.");
  } else {
    //total expenses
    totalExpenses.innerText =
      parseFloat(foodAmount.value) +
      parseFloat(rentAmount.value) +
      parseFloat(clothesAmount.value);

    //total balance
    const balanceAmount = document.getElementById("balance-amount");
    const balanceAmountInner = minus(
      parseFloat(incomeAmount.value),
      parseFloat(totalExpenses.innerText)
    );
    const totalExpensesValue = parseFloat(totalExpenses.innerText);
    if (balanceAmountInner > totalExpensesValue) {
      balanceAmount.innerText = balanceAmountInner;
    } else {
      alert("Please reduce your Expenses.");
    }
  }
});

//save button
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeAmount = document.getElementById("income-amount");
  const balanceAmount = document.getElementById("balance-amount");

  const saveAmount = document.getElementById("save-amount");
  const savingAmount = document.getElementById("saveing-amount");
  const remainingAmount = document.getElementById("remaining-amount");

  if (
    incomeAmount.value == "" ||
    incomeAmount.value < 0 ||
    incomeAmount.value == NaN
  ) {
    alert("Ohh! Please type only numbers in INCOME.");
  } else if (
    saveAmount.value == "" ||
    saveAmount.value <= 0 ||
    saveAmount.value == NaN
  ) {
    alert("Ohh! Please type only numbers in SAVE.");
  } else {
    //saving amount
    savingAmount.innerText =
      (parseFloat(incomeAmount.value) * parseFloat(saveAmount.value)) / 100;

    //remaining amount
    remainingAmount.innerText = minus(
      parseFloat(balanceAmount.innerText),
      parseFloat(savingAmount.innerText)
    );
  }
});
