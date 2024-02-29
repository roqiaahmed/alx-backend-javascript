function getPaymentTokenFromAPI(success) {
  return new Promise((res, rej) => {
    if (success) {
      res({ data: "Successful response from the API" });
    }
    rej();
  });
}
module.exports = getPaymentTokenFromAPI;
