function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    var result = document.getElementById('result');

    if (principal <= 0) {
        document.getElementById("principal").placeholder = "Enter a positive number";
    } else {
        result.innerHTML = 'If you deposit <em>' + principal +'</em><br>at an interest rate of <em>' + rate + '%</em>.<br>You will receive an amount of <em>' + interest + '</em>,<br>in the year <em>' + year + '</em>';
    }

    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        