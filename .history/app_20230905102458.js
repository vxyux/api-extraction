const api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

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
  var rate = document.createElement('p');
  var content = document.createTextNode(data.bpi.EUR.rate);
  rate.appendChild(content);

  var element = (document.getElementById('display').innerHTML =
    '<p>'+ con +'</p>');

  // make element the tag's parent
  element.appendChild(rate);
}
