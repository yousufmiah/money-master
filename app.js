// for minus function
function minus(a, b) {
  return a - b;
}

//calculate button
document.getElementById("cal-btn").addEventListener("click", function () {
  const incomeInput = document.getElementById("income-amount");
  const foodInput = document.getElementById("food-amount");
  const rentInput = document.getElementById("rent-amount");
  const clothesInput = document.getElementById("clothes-amount");
  const totalExpenses = document.getElementById("total-expenses");

  const income1 = incomeInput.value;
  console.log(typeof income1);

  if (
    incomeInput.value == "" ||
    incomeInput.value < 0 ||
    incomeInput.value == NaN
  ) {
    alert("Ohh! Please type only numbers in INCOME.");
  } else if (
    foodInput.value == "" ||
    foodInput.value < 0 ||
    foodInput.value == NaN
  ) {
    alert("Ohh! Please type only numbers in FOOD.");
  } else if (
    rentInput.value == "" ||
    rentInput.value < 0 ||
    rentInput.value == NaN
  ) {
    alert("Ohh! Please type only numbers in RENT.");
  } else if (
    clothesInput.value == "" ||
    clothesInput.value < 0 ||
    clothesInput.value == NaN
  ) {
    alert("Ohh! Please type only numbers in CLOTHES.");
  } else {
    //total expenses
    totalExpenses.innerText =
      parseFloat(foodInput.value) +
      parseFloat(rentInput.value) +
      parseFloat(clothesInput.value);

    //total balance
    const balanceAmount = document.getElementById("balance-amount");

    //minus functioner maddome kora
    const balanceAmountInner = minus(
      parseFloat(incomeInput.value),
      parseFloat(totalExpenses.innerText)
    );

    balanceAmount.innerText = balanceAmountInner;
  }
});

//save button
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeInput = document.getElementById("income-amount");
  const balanceAmount = document.getElementById("balance-amount");

  const saveInput = document.getElementById("save-amount");
  const savingAmount = document.getElementById("saveing-amount");
  const remainingAmount = document.getElementById("remaining-amount");

  if (
    incomeInput.value == "" ||
    incomeInput.value < 0 ||
    incomeInput.value == NaN
  ) {
    alert("Ohh! Please type only numbers in INCOME.");
  } else if (
    saveInput.value == "" ||
    saveInput.value <= 0 ||
    saveInput.value == NaN
  ) {
    alert("Ohh! Please type only numbers in SAVE.");
  } else {
    //saving amount
    savingAmount.innerText =
      (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;

    //minus function er maddome kora remaining amount
    remainingAmount.innerText = minus(
      parseFloat(balanceAmount.innerText),
      parseFloat(savingAmount.innerText)
    );
  }
});
