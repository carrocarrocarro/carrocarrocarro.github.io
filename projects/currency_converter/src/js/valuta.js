var Countries = Array();          

function loadCountries() {
    let country = {};

    country.name = 'Sweden';
    country.currency = 'SEK';
    country.exchangeRate = 1;
    Countries.push(country);

    country = {};
    country.name = 'Norway';
    country.currency = 'NOK';
    country.exchangeRate = 1.231;
    Countries.push(country);

    country = {};
    country.name = 'Dennmark';
    country.currency = 'DDK';
    country.exchangeRate = 0.71;
    Countries.push(country);

    country = {};
    country.name = 'Island';
    country.currency = 'ISK';
    country.exchangeRate = 15.50;
    Countries.push(country);

    country = {};
    country.name = 'Finnland';
    country.currency = 'EUR';
    country.exchangeRate = 0.096;
    Countries.push(country);
    
    let table = document.getElementById('country-list');

    let html = '<table id="currency-table"x>'
        html += '<tr>';
            html += '<th>Country</th>'
            html += '<th>Currency</th>'
            html += '<th>Exchangerate</th>'
        html += '</tr>';
    for( i=0;i<Countries.length;i++) {
            
        html += '<tr>';
            html += '<td>' + Countries[i].name + '</td>'
            html += '<td>' + Countries[i].currency + '</td>'
            html += '<td>' + Countries[i].exchangeRate + '</td>'
        html += '</tr>';
    }    
        
    html += '</table>';
    Helper.setHtml('country-list', html); 
    
}

// Exchange rate calculator funktion
function calc() {
    
    let num1 = document.getElementById('number').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const result = document.getElementById('result');
    let sek = 1;
    let ddk = 0.71;
    let nok = 1.231;
    let isk = 15.5;
    let eur = 0.096;
    console.log('num1');

    if(num1.length === 0) {
        alert('Print a number.');
        return;
    }
    else if(toCurrency === 'none') {
        alert('Pick a currency');
        return;
    }

    else if(toCurrency === 'sek'){
        num2 = Number(num1) * sek;
        result.innerHTML = num1 + ' SEK is ' + num2.toFixed(2) + ' SEK.';
    }

    else if(toCurrency === 'ddk'){
        num2 = Number(num1) * ddk;
        result.innerHTML = num1 + ' SEK is ' + num2.toFixed(2) + ' DDK.';
    }

    else if(toCurrency === 'nok'){
        num2 = Number(num1) * nok;
        result.innerHTML = num1 + ' SEK is ' + num2.toFixed(2) + ' NOK.';
    }

    else if(toCurrency === 'isk'){
        num2 = Number(num1) * isk;
        result.innerHTML = num1 + ' SEK is ' + num2.toFixed(2) + ' ISK.';
    }

    else if(toCurrency === 'eur'){
        num2 = Number(num1) * eur;
        result.innerHTML = num1 + ' SEK is ' + num2.toFixed(2) + ' EUR.';
    }

}




// Show calc page
function showCalc() {

    const calcPage = document.getElementById('rate-counter');
    const currencyPage = document.getElementById('table-page');
    const calcBtn = document.getElementById('calc-btn');
    const currencyBtn = document.getElementById('currency-btn');
    calcPage.style.display ='flex';
    currencyPage.style.display ='none';
    calcBtn.classList.add('active-btn');
    currencyBtn.classList.remove('active-btn');
    
}

//Show currency page
function showCurrency() {

    const calcPage = document.getElementById('rate-counter');
    const currencyPage = document.getElementById('table-page');
    const calcBtn = document.getElementById('calc-btn');
    const currencyBtn = document.getElementById('currency-btn');
    currencyPage.style.display ='flex';
    calcPage.style.display ='none';
    currencyBtn.classList.add('active-btn');
    calcBtn.classList.remove('active-btn');
   
}