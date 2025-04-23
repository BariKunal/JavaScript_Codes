function calculateEMI() {
    let amount = parseFloat(document.getElementById('amount').value);
    let year = parseFloat(document.getElementById('year').value);
    let rate = parseFloat(document.getElementById('rate').value);

    // Update display values
    document.getElementById('val').value = "₹ " + amount.toLocaleString();
    document.getElementById('yValue').value = year + " years";
    document.getElementById('rateVal').value = rate + " %";

    
    let monthlyRate = rate / 12 / 100;
    let months = year * 12;
    let emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

    
    document.getElementById('emi').textContent = Math.round(emi).toLocaleString();
}


document.getElementById('amount').addEventListener('input', calculateEMI);
document.getElementById('year').addEventListener('input', calculateEMI);
document.getElementById('rate').addEventListener('input', calculateEMI);


document.querySelector('.kb').addEventListener('click', calculateEMI);


calculateEMI();
