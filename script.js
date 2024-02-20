let n;
let total = 0;
let counter = 0;
let digits = [0];
let digits_list = [];
let last_symbol = [];
let is_zero = true;
let equal_sign = false;
let decimalPoint = false;
let result = document.getElementById("result");
result.innerHTML = "0";

let symbol_container_C = document.getElementById("symbol_container_C");
symbol_container_C.addEventListener("click", clicked_C);
function clicked_C() {
  if (is_zero || symbol_C.innerHTMl == "AC") {
    total = 0;
    counter = 0;
    is_zero = true;
    equal_sign = false;
    decimalPoint = false;
    digits = [0];
    digits_list = [];
    last_symbol = [];
    result.innerHTML = "0";
    console.log
  }
  else {
    counter = 0;
    is_zero = true;
    equal_sign = false;
    decimalPoint = false;
    digits = [0];
    result.innerHTML = "0";
    symbol_C.innerHTML = "AC";
    symbol_C.style.left = "18%";
  }
}

let symbol_container_posNeg = document.getElementById("symbol_container_posNeg");
symbol_container_posNeg.addEventListener("click", clicked_posNeg);
function clicked_posNeg() {
  n = '-'
  if (is_zero == true) { }
  else if (last_symbol[last_symbol.length - 1] == '%' && last_symbol.length > 1) { clicked_AC(); }
  else {
    if (digits[0] == null || digits[0] == digits_list[digits_list.length - 1] * -1) {
      if (digits_list[0] == n) {
        digits_list.splice(0, 1, "");
        digits = [digits_list[digits_list.length - 1]];
        digits_list[digits_list.length - 1] = digits_list[digits_list.length - 1] * -1;
        total *= -1;
        result.innerHTML = digits_list[digits_list.length - 1];
      }
      else if (digits_list[0] != n) {
        digits_list.splice(0, 0, n);
        digits = [];
        digits_list[digits_list.length - 1] = digits_list[digits_list.length - 1] * -1;
        result.innerHTML = digits_list[digits_list.length - 1];
        result.style.marginLeft = `${-24 * counter}px`;
      }
    }
    else if (digits[0] != n || digits[0] > 0) {
      if (digits[0] < 0) {
        digits[0] = digits[0] * -1;
        result.replaceChild(document.createTextNode(digits[0]), result.childNodes[0]);
      }
      else {
        digits.splice(0, 0, n)
        result.insertBefore(document.createTextNode(n), result.firstChild);
        result.style.marginLeft = `${-24 * counter}px`;
      }
    }
    else if (digits[0] == n || digits[0] < 0) {
      digits.splice(0, 1, "");
      result.removeChild(result.firstChild);
    }
  }
}

let symbol_container_percent = document.getElementById("symbol_container_percent");
symbol_container_percent.addEventListener("click", clicked_percent);
function clicked_percent() {
  n = '%'
  console.log(digits);
  if (is_zero == true) { }
  else if (digits[digits.length - 1] != null) {
    if (total == 0) {
      if (digits_list[digits_list.length - 1] == null) {
        digits_list.push(parseFloat(digits.join("")));
      }
      digits_list[digits_list.length - 1] = (digits_list[digits_list.length - 1]) / 100;
      digits = [];
      equal_sign = true;
      decimalPoint = true;
      result.innerHTML = digits_list[digits_list.length - 1];
      last_symbol.push(n);
      opperators();
      digits = [total];
    }
    else {
      digits_list.push(parseFloat(digits.join("")));
      digits_list[digits_list.length - 1] = (digits_list[digits_list.length - 1]) / 100;
      digits = [digits_list[digits_list.length - 1]];
      equal_sign = true;
      decimalPoint = true;
      result.innerHTML = digits[digits.length - 1];
      opperators();
    }
  }
  else if (last_symbol[last_symbol.length - 1] != n) {
    equal_sign = true;
    decimalPoint = true;
    digits_list[digits_list.length - 1] = total / 100;
    result.innerHTML = digits_list[digits_list.length - 1];
    last_symbol.push(n);
    opperators();
  }

}

let symbol_container_deci = document.getElementById("symbol_container_deci");
symbol_container_deci.addEventListener("click", clicked_deci);
function clicked_deci() {
  n = '.'
  if (decimalPoint == true) { }
  else {
    if (digits.length == 0) {
      counter = 0;
      result.innerHTML = "";
      result.appendChild(document.createTextNode(0 + n));
      digits.push(n);
      digits_list.push(parseFloat(digits.join("")));
      decimalPoint = true;
      is_zero = false;
      result.style.marginLeft = `${-24 * counter}px`;
      counter++;
    }
    else {
      is_zero = false;
      equal_sign = false;
      result.appendChild(document.createTextNode(n));
      digits.push(n);
      digits_list.push(parseFloat(digits.join("")));
      decimalPoint = true;
    }
  }
}

let number_container_1 = document.getElementById("number_container_1");
number_container_1.addEventListener("click", clicked_1);
function clicked_1() {
  n = 1;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_2 = document.getElementById("number_container_2");
number_container_2.addEventListener("click", clicked_2);
function clicked_2() {
  n = 2;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_3 = document.getElementById("number_container_3");
number_container_3.addEventListener("click", clicked_3);
function clicked_3() {
  n = 3;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_4 = document.getElementById("number_container_4");
number_container_4.addEventListener("click", clicked_4);
function clicked_4() {
  n = 4;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_5 = document.getElementById("number_container_5");
number_container_5.addEventListener("click", clicked_5);
function clicked_5() {
  n = 5;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_6 = document.getElementById("number_container_6");
number_container_6.addEventListener("click", clicked_6);
function clicked_6() {
  n = 6;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_7 = document.getElementById("number_container_7");
number_container_7.addEventListener("click", clicked_7);
function clicked_7() {
  n = 7;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_8 = document.getElementById("number_container_8");
number_container_8.addEventListener("click", clicked_8);
function clicked_8() {
  n = 8;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_9 = document.getElementById("number_container_9");
number_container_9.addEventListener("click", clicked_9);
function clicked_9() {
  n = 9;
  if (digits.length == 0) {
    counter = 0;
    result.innerHTML = "";
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    is_zero = false;
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  else if (equal_sign == false && is_zero == false) {
    result.appendChild(document.createTextNode(n));
    digits.push(n);
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  if (digits.length == 1 && is_zero == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    is_zero = false;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
  if (symbol_C.innerHTML == "AC") {
    symbol_C.innerHTML = "C"
    symbol_C.style.left = '33%';
  }
}

let number_container_0 = document.getElementById("number_container_0");
number_container_0.addEventListener("click", clicked_0);
function clicked_0() {
  n = 0;

  if (digits.length == 0 && is_zero == false) {
    counter = 0;
    result.innerHTML = "";
    digits.push(n);
    result.appendChild(document.createTextNode(n));
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
    is_zero = true;
  }
  if (digits.length == 1 && equal_sign == true) {
    result.replaceChild(document.createTextNode(n), result.lastChild);
    digits[0] = n;
    equal_sign = false;
  }
  else if (digits.length >= 1 && is_zero == false) {
    digits.push(n);
    result.appendChild(document.createTextNode(n));
    result.style.marginLeft = `${-24 * counter}px`;
    counter++;
  }
  if (last_symbol[last_symbol.length - 1] == '%') {
    last_symbol = [];
  }
}

let symbol_container_multi = document.getElementById("symbol_container_multi");
symbol_container_multi.addEventListener("click", clicked_multi);
function clicked_multi() {
  n = '*';
  decimalPoint = false;
  if (digits.length == 0) { }
  else {
    digits_list.push(parseFloat(digits.join("")));
    digits = [];
    last_symbol.push(n);
    opperators();

    equal_sign = false;
    if (last_symbol.length > 1) {
      counter = 0;
      result.innerHTML = "";
      total_length = total.toString();
      if ((total / 0.0000000001) % 10 < 1) { result.appendChild(document.createTextNode(total + " ")); }
      else { result.appendChild(document.createTextNode(total.toFixed(9) + " ")); }
      result.style.marginLeft = `${-24 * (total_length.length / 1.62)}px`;
      counter++;
      equal_sign = false;
    }
  }
}

let symbol_container_divi = document.getElementById("symbol_container_divi");
symbol_container_divi.addEventListener("click", clicked_divi);
function clicked_divi() {
  n = "/";
  decimalPoint = false;
  if (digits.length == 0) { }
  else {
    digits_list.push(parseFloat(digits.join("")));
    digits = [];
    last_symbol.push(n);
    opperators();

    equal_sign = false;
    if (last_symbol.length > 1) {
      counter = 0;
      result.innerHTML = "";
      total_length = total.toString();
      if ((total / 0.0000000001) % 10 < 1) { result.appendChild(document.createTextNode(total + " ")); }
      else { result.appendChild(document.createTextNode(total.toFixed(9) + " ")); }
      result.style.marginLeft = `${-24 * (total_length.length / 1.62)}px`;
      counter++;
      equal_sign = false;
    }
  }
}

let symbol_container_add = document.getElementById("symbol_container_add");
symbol_container_add.addEventListener("click", clicked_add);
function clicked_add() {
  n = "+";
  decimalPoint = false;
  if (digits.length == 0) { }
  else {
    digits_list.push(parseFloat(digits.join("")));
    digits = [];
    last_symbol.push(n);
    opperators();

    equal_sign = false;
    if (last_symbol.length > 1) {
      counter = 0;
      result.innerHTML = "";
      total_length = total.toString();
      if ((total / 0.0000000001) % 10 < 1) { result.appendChild(document.createTextNode(total + " ")); }
      else { result.appendChild(document.createTextNode(total.toFixed(9) + " ")); }
      result.style.marginLeft = `${-24 * (total_length.length / 1.62)}px`;
      counter++;
      equal_sign = false;
    }
  }
}

let symbol_container_sub = document.getElementById("symbol_container_sub");
symbol_container_sub.addEventListener("click", clicked_sub);
function clicked_sub() {
  n = "-";
  decimalPoint = false;
  if (digits.length == 0) { }
  else {
    digits_list.push(parseFloat(digits.join("")));
    digits = [];
    last_symbol.push(n);
    opperators();

    equal_sign = false;
    if (last_symbol.length > 1) {
      counter = 0;
      result.innerHTML = "";
      total_length = total.toString();
      if ((total / 0.0000000001) % 10 < 1) { result.appendChild(document.createTextNode(total + " ")); }
      else { result.appendChild(document.createTextNode(total.toFixed(9) + " ")); }
      result.style.marginLeft = `${-24 * (total_length.length / 1.62)}px`;
      counter++;
      equal_sign = false;
    }
  }
}

let symbol_container_equal = document.getElementById("symbol_container_equal");
symbol_container_equal.addEventListener("click", clicked_equal);
function clicked_equal() {
  equal_sign = true;
  decimalPoint = true;
  if (last_symbol.length == 0) {
    digits_list.push(0);
    digits = [];
    equal_sign = false;
  }
  last_symbol.push('=');
  opperators();
  if (digits_list[digits_list.length - 1] == "") {
    digits_list = [];
    digits_list.push(0);
    digits = [];
    total = 0;
    equal_sign = false;
  }
  history_bar();
  last_symbol = [];
  digits_list = [];
  counter = 0;
  result.innerHTML = "";
  total_length = total.toString();
  if ((total / 0.0000000001) % 10 < 1) { result.appendChild(document.createTextNode(total + " ")); }
  else { result.appendChild(document.createTextNode(total.toFixed(9) + " ")); }
  result.style.marginLeft = `${-24 * (total_length.length / 1.62)}px`;
  counter++;
  digits = [total];
  if (total == 0) { is_zero = true; }
  else { is_zero = false; }
  total = 0;
}

function opperators() {
  if (digits_list[digits_list.length - 1] != null) {
    if (last_symbol.length > 1) {
      if (last_symbol[last_symbol.length - 2] == '+') {
        if (equal_sign == true) {
          if (digits.length == 0) {
            if (last_symbol[last_symbol.length - 1] == '%') { total += digits_list[digits_list.length - 1]; }
            else if (digits_list[0] == '-') { total += total * -1; }
            else { total += total; }
          }
          else {
            digits_list.push(parseFloat(digits.join("")));
            digits = [];
            total += parseFloat(digits_list[digits_list.length - 1]);
          }
        }
        else {
          total += parseFloat(digits_list[digits_list.length - 1]);
        }
      }
      else if (last_symbol[last_symbol.length - 2] == '-') {
        if (equal_sign == true) {
          if (digits.length == 0) {
            if (last_symbol[last_symbol.length - 1] == '%') { total -= digits_list[digits_list.length - 1]; }
            else if (digits_list[0] == '-') { total -= total * -1; }
            else { total -= total; }
          }
          else {
            digits_list.push(parseFloat(digits.join("")));
            digits = [];
            total -= parseFloat(digits_list[digits_list.length - 1]);
          }
        }
        else {
          total -= parseFloat(digits_list[digits_list.length - 1]);
        }
      }
      else if (last_symbol[last_symbol.length - 2] == "*") {
        if (equal_sign == true) {
          if (digits.length == 0) {
            if (last_symbol[last_symbol.length - 1] == '%') { total *= digits_list[digits_list.length - 1]; }
            else if (digits_list[0] == '-') { total *= total * -1; }
            else { total *= total; }
          }
          else {
            digits_list.push(parseFloat(digits.join("")));
            console.log(digits_list);
            digits = [];
            console.log(total);
            total *= parseFloat(digits_list[digits_list.length - 1]);
          }
        }
        else {
          total *= parseFloat(digits_list[digits_list.length - 1]);
        }
      }
      else if (last_symbol[last_symbol.length - 2] == "/") {
        if (equal_sign == true) {
          if (digits.length == 0) {
            if (last_symbol[last_symbol.length - 1] == '%') { total /= digits_list[digits_list.length - 1]; }
            else if (digits_list[0] == '-') { total /= total * -1; }
            else { total /= total; }
          }
          else {
            digits_list.push(parseFloat(digits.join("")));
            digits = [];
            total /= parseFloat(digits_list[digits_list.length - 1]);
          }
        }
        else {
          total /= parseFloat(digits_list[digits_list.length - 1]);
        }
      }
    }
    else {
      total = parseFloat(digits_list[digits_list.length - 1]);
      console.log(digits_list);
    }
  }
  else { total = 0; }
}

document.addEventListener("keydown", function (event) {
  if (event.key == '1') {
    clicked_1();
    setTimeout(function () { number_container_1.style = "background-color: #ffffff"; }, 100);
    number_container_1.style = "background-color: #c7c7c7";
  }
  else if (event.key == '2') {
    clicked_2();
    setTimeout(function () { number_container_2.style = "background-color: #ffffff"; }, 100);
    number_container_2.style = "background-color: #c7c7c7";
  }
  else if (event.key == '3') {
    clicked_3();
    setTimeout(function () { number_container_3.style = "background-color: #ffffff"; }, 100);
    number_container_3.style = "background-color: #c7c7c7";
  }
  else if (event.key == '4') {
    clicked_4();
    setTimeout(function () { number_container_4.style = "background-color: #ffffff"; }, 100);
    number_container_4.style = "background-color: #c7c7c7";
  }
  else if (event.key == '5') {
    clicked_5();
    setTimeout(function () { number_container_5.style = "background-color: #ffffff"; }, 100);
    number_container_5.style = "background-color: #c7c7c7";
  }
  else if (event.key == '6') {
    clicked_6();
    setTimeout(function () { number_container_6.style = "background-color: #ffffff"; }, 100);
    number_container_6.style = "background-color: #c7c7c7";
  }
  else if (event.key == '7') {
    clicked_7();
    setTimeout(function () { number_container_7.style = "background-color: #ffffff"; }, 100);
    number_container_7.style = "background-color: #c7c7c7";
  }
  else if (event.key == '8') {
    clicked_8();
    setTimeout(function () { number_container_8.style = "background-color: #ffffff"; }, 100);
    number_container_8.style = "background-color: #c7c7c7";
  }
  else if (event.key == '9') {
    clicked_9();
    setTimeout(function () { number_container_9.style = "background-color: #ffffff"; }, 100);
    number_container_9.style = "background-color: #c7c7c7";
  }
  else if (event.key == '0') {
    clicked_0();
    setTimeout(function () { number_container_0.style = "background-color: #ffffff"; }, 100);
    number_container_0.style = "background-color: #c7c7c7";
  }
  else if (event.key == '%') {
    clicked_percent();
    setTimeout(function () { symbol_container_percent.style = "background-color: #ffffff"; }, 100);
    symbol_container_percent.style = "background-color: #c7c7c7";
  }
  else if (event.key == '.') {
    clicked_deci();
    setTimeout(function () { symbol_container_deci.style = "background-color: #ffffff"; }, 100);
    symbol_container_deci.style = "background-color: #c7c7c7";
  }
  else if (event.key == '*') {
    clicked_multi();
    setTimeout(function () { symbol_container_multi.style = "background-color: #ffffff"; }, 100);
    symbol_container_multi.style = "background-color: #c7c7c7";
  }
  else if (event.key == '/') {
    clicked_divi();
    setTimeout(function () { symbol_container_divi.style = "background-color: #ffffff"; }, 100);
    symbol_container_divi.style = "background-color: #c7c7c7";
  }
  else if (event.key == '+') {
    clicked_add();
    setTimeout(function () { symbol_container_add.style = "background-color: #ffffff"; }, 100);
    symbol_container_add.style = "background-color: #c7c7c7";
  }
  else if (event.key == '-') {
    clicked_sub();
    setTimeout(function () { symbol_container_sub.style = "background-color: #ffffff"; }, 100);
    symbol_container_sub.style = "background-color: #c7c7c7";
  }
  else if (event.key == 'Enter') {
    clicked_equal();
    setTimeout(function () { symbol_container_equal.style = "background-color: #ffffff"; }, 100);
    symbol_container_equal.style = "background-color: #c7c7c7";
  }
  else if (event.key == 'Backspace') {
    if (digits.length > 0) {
      digits.pop();
      result.removeChild(result.lastChild);
      counter--;
      result.style.marginLeft = `${-24 * counter}px`;
    }
    if (digits.length == 0) {
      is_zero = true;
      digits = [0];
      result.innerHTML = "0";
    }
  }
});

let history = document.getElementById("Result_history_bar");
function history_bar() {
  if (equal_sign == true) {
    for (i = 0; i < digits_list.length; i++){
    history.appendChild(document.createTextNode(digits_list[i]));
    history.appendChild(document.createTextNode(last_symbol[i]));
    }
    history.appendChild(document.createTextNode(total));
  }
}