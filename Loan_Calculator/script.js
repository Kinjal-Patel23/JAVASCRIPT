function calculateEMI(){
    let loanAmount = Number(document.getElementById("loanAmount").value);
    let interestRate = Number(document.getElementById("interestRate").value);
    let loanTenure = Number(document.getElementById("loanTenure").value);

    let P = loanAmount;
    let R = (interestRate / 100) / 12;
    let N = loanTenure * 12;

    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    let totalAmount = (EMI * N);

    let totalInterest = (totalAmount - P);

    document.getElementById("emi").innerText = Math.round(EMI);
    document.getElementById("principal").innerText = P;
    document.getElementById("totalInterest").innerText = Math.round(totalInterest);
    document.getElementById("totalAmount").innerText = Math.round(totalAmount);
}


