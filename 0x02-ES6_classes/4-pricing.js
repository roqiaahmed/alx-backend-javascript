import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number");
    } else {
      this._amount = amount;
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError("Currency must be a Currency");
    }
  }

  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== "number") {
      throw new TypeError("Amount must be a number");
    } else {
      this._amount = newAmount;
    }
  }
  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError("Currency must be a Currency");
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number");
    } else if (typeof conversionRate !== "number") {
      throw new TypeError("ConversionRate must be a number");
    } else {
      return amount * conversionRate;
    }
  }
}
