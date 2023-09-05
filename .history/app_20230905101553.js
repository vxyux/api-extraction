const api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

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
  for(let r of data.list)
}