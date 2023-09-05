const api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

async function getapi(url) {

  const response = await fetch(url);

  var data = await response.json();

  console.log(data);
  if (repsonse) {
    hideloader();
  }

}