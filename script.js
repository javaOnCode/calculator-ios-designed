const calc_input = document.getElementById("calc_input");
const AC = document.getElementById("AC");
const plus_minus = document.getElementById("+/-");
const percent = document.getElementById("%");
const divide = document.getElementById("/");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("*");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("+");
const zero = document.getElementById("0");
const dot = document.getElementById(".");
const equal = document.getElementById("=");

AC.onclick = () => {
  calc_input.value = "";
};
seven.onclick = () => {
  calc_input.value += 7;
};
eight.onclick = () => {
  calc_input.value += 8;
};
nine.onclick = () => {
  calc_input.value += 9;
};
four.onclick = () => {
  calc_input.value += 4;
};
five.onclick = () => {
  calc_input.value += 5;
};
six.onclick = () => {
  calc_input.value += 6;
};
one.onclick = () => {
  calc_input.value += 1;
};
two.onclick = () => {
  calc_input.value += 2;
};
three.onclick = () => {
  calc_input.value += 3;
};
zero.onclick = () => {
  calc_input.value += 0;
};
plus.onclick = () => {
  calc_input.value += "+";
};
minus.onclick = () => {
  calc_input.value += "-";
};
multiply.onclick = () => {
  calc_input.value += "*";
};
divide.onclick = () => {
  calc_input.value += "/";
};
percent.onclick = () => {
  calc_input.value += "%";
};
dot.onclick = () => {
  calc_input.value += ".";
};
equal.onclick = () => {
  calc_input.value = eval(calc_input.value);
};
plus_minus.onclick = () => {
  calc_input.value /= -1;
};
calc_input.onclick = () => {
  calc_input.value = calc_input.value.substring(0, calc_input.value.length - 1);
};
