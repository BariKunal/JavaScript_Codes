let amount = parseFloat(document.getElementById('amount').value);
let year = parseFloat(document.getElementById('year').value);
let rate = parseFloat(document.getElementById('rate').value);

document.getElementById('val').value = "₹ " + amount.toLocaleString();
document.getElementById('yValue').value = year + " years";
document.getElementById('rateVal').value = rate + " %";

var monthlyRate = rate / 12 / 100;
var months = year * 12;
var emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

document.getElementById('emi').textContent = Math.round(emi).toLocaleString();


document.getElementById('amount').addEventListener('input', calculateEMI);
document.getElementById('year').addEventListener('input', calculateEMI);
document.getElementById('rate').addEventListener('input', calculateEMI);

calculateEMI();