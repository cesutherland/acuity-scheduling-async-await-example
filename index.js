var Acuity = require('acuityscheduling');

var acuity = Acuity.basic({
  userId: process.env.ACUITY_USER_ID,
  apiKey: process.env.ACUITY_API_KEY
});

function acuityRequest (route, data) {
  const promise = new Promise(function (resolve, reject) {
    acuity.request(route, data, function (err, response, data) {
      if (err) {
        reject(err); // reject with connection/network error
      } else {
        resolve(data); // resolve with response data
      }
    });
  });
  return promise;
}

async function getAcuityProducts () {
  const acuityProducts = await acuityRequest('/products');

  console.log(acuityProducts);

  return acuityProducts;
}

const data = getAcuityProducts();
