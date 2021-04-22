const quotes = require('./quotes');

function randomQuote() {
  var randomItem = quotes[Math.floor(Math.random() * quotes.length)];
  return randomItem;
}

module.exports = randomQuote;