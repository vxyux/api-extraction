const api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// return a promise - execute the rest while loading this function
async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();

  console.log(data);

  if (response) {
    hideloader();
  }
  show(data);
}

getapi(api_url);

function hideloader() {
  document.getElementById('loading').style.display = 'none';
}

function show(data) {
  var rate_eur = data.bpi.EUR.data.symbol bpi.EUR.rate;
  var rate_usd = data.bpi.USD.rate;
  var date = data.time.updated;
  var disclaimer = data.disclaimer;

  document.getElementById('rate-eur').innerHTML =
    '<p>' + rate_eur + '</p>';

  document.getElementById('rate-usd').innerHTML =
    '<p>' + rate_usd + '</p>';

  document.getElementById('disclaimer').innerHTML =
    '<p>' + disclaimer + '</p>';

  document.getElementById('date').innerHTML = '<p>' + date + '</p>';
}
