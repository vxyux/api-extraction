const api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// return a promise - exec
async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();

  console.log(data.bpi.EUR.rate);

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
  var rate_eur = data.bpi.EUR.rate;
  var rate_usd = data.bpi.USD.rate;
  var date = data.time.updated;

  document.getElementById('rate-eur').innerHTML =
    '<p>' + rate_eur + '</p>';

  document.getElementById('rate-usd').innerHTML =
    '<p>' + rate_usd + '</p>';

  document.getElementById('date').innerHTML =
    '<p>' + date + '</p>';
}
