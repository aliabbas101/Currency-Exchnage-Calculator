/** Task 1: Get Currency Codes and add them as options in both from and to dropdowns */

getCurrencyCodes().then((result) => {
  console.log(result);
});

/** Task 2: Get store the following data in seperate variabls:
 *   Amount entered in amount field
 *   Currency Code Selected in From dropdown
 *   Currency Code selected in To Dropdown */

/** Task 3: Upon clicking the convert button call the convert method and display the result below the form  */

/**
 * Returns a promise
 * Convert the given amount to targeted currency
 * amount: number
 * from: string
 * to: string
 */
function convert(amount, to, from) {
  var myHeaders = new Headers();
  myHeaders.append('apikey');

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  ).then((response) => {
    return response.json();
  });
}

/** Returns a Promise with currency Codes */
function getCurrencyCodes() {
  const myHeaders = new Headers({
    'X-Access-Key':
      '$2b$10$OCcmrz7Cgh61Kf27nY9eXuxPiKbjdK6tKL0N/3zL3hLeKVITry2we',
  });

  const requestInfo = {
    method: 'GET',
    headers: myHeaders,
  };

  return fetch(
    'https://api.jsonbin.io/v3/b/646a73a18e4aa6225ea1636c',
    requestInfo
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}
