// minus function
function minus(income, expense) {
  return income - expense;
}

//calculate button
document.getElementById("cal-btn").addEventListener("click", function () {
  const incomeInput = document.getElementById("income-amount");
  const foodInput = document.getElementById("food-amount");
  const rentInput = document.getElementById("rent-amount");
  const clothesInput = document.getElementById("clothes-amount");
  const totalExpenses = document.getElementById("total-expenses");

  let incomeValue = Number(incomeInput.value);
  let foodValue = Number(foodInput.value);
  let rentValue = Number(rentInput.value);
  let clothesValue = Number(clothesInput.value);

  if (
    incomeInput.value == "" ||
    incomeInput.value < 0 ||
    Number.isNaN(incomeValue)
  ) {
    alert("Ohh! Please type only numbers in INCOME.");
  } else if (
    foodInput.value == "" ||
    foodInput.value < 0 ||
    Number.isNaN(foodValue)
  ) {
    alert("Ohh! Please type only numbers in FOOD.");
  } else if (
    rentInput.value == "" ||
    rentInput.value < 0 ||
    Number.isNaN(rentValue)
  ) {
    alert("Ohh! Please type only numbers in RENT.");
  } else if (
    clothesInput.value == "" ||
    clothesInput.value < 0 ||
    Number.isNaN(clothesValue)
  ) {
    alert("Ohh! Please type only numbers in CLOTHES.");
  } else {
    //total expenses
    let totalExpensesInner =
      parseFloat(foodInput.value) +
      parseFloat(rentInput.value) +
      parseFloat(clothesInput.value);

    //total balance
    let balanceAmount = document.getElementById("balance-amount");

    //minus functioner maddome kora
    let balanceAmountInner = minus(
      parseFloat(incomeInput.value),
      parseFloat(totalExpensesInner)
    );

    if (balanceAmountInner > totalExpensesInner) {
      totalExpenses.innerText = totalExpensesInner;
      balanceAmount.innerText = balanceAmountInner;
      foodInput.value = "";
      rentInput.value = "";
      clothesInput.value = "";
    } else {
      alert("Please reduce expeses number.");
      foodInput.value = "";
      rentInput.value = "";
      clothesInput.value = "";
    }
  }
});

//save button
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeInput = document.getElementById("income-amount");
  const balanceAmount = document.getElementById("balance-amount");

  const saveInput = document.getElementById("save-amount");
  const savingAmount = document.getElementById("saveing-amount");
  const remainingAmount = document.getElementById("remaining-amount");

  let incomeValue = Number(incomeInput.value);
  let saveValue = Number(saveInput.value);

  if (
    incomeInput.value == "" ||
    incomeInput.value < 0 ||
    Number.isNaN(incomeValue)
  ) {
    alert("Please fillup above fields by number.");
  } else if (
    saveInput.value == "" ||
    saveInput.value <= 0 ||
    Number.isNaN(saveValue)
  ) {
    alert("Ohh! Please type only numbers in SAVE.");
  } else {
    //saving amount
    let savingAmountInner =
      (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;

    //minus function er maddome kora remaining amount
    let remainingAmountInner = minus(
      parseFloat(balanceAmount.innerText),
      parseFloat(savingAmountInner)
    );

    if (remainingAmountInner > savingAmountInner) {
      savingAmount.innerText = savingAmountInner;
      remainingAmount.innerText = remainingAmountInner;
      saveInput.value = "";
    } else {
      alert("Please reduce saving percetage number.");
      saveInput.value = "";
    }
  }
});
