/*
Counter Widget

- Header (Counter, etc)
- Current Count
- Three buttons: decrease, reset, increase, that update the count respectively
- Current count should be black at 0, red in the negative, and green in the positive
- STYLE EVERYTHING
*/

const counterNum = document.getElementById("num");
const decreaseNum = document.getElementById("subBtn");
const resetNum = document.getElementById("resetBtn");
const increaseNum = document.getElementById("addBtn");

counterNum.value === 0;

resetNum.addEventListener("click", (e) => {
  console.log("reset");
  counterNum.value = 0;
  counterNum.style.color = "black";
});

increaseNum.addEventListener("click", (e) => {
  counterNum.value++;
  if (counterNum.value > 0) {
    counterNum.style.color = "green";
  }
});

decreaseNum.addEventListener("click", (e) => {
  counterNum.value--;
  if (counterNum.value < 0) {
    counterNum.style.color = "red";
  }
});
