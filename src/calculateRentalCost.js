/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCONT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCONT = 20;
  const price = DAY_COST * days;

  if (days < SHORT_TERM) {
    return price;
  }

  if (days < LONG_TERM) {
    return price - SHORT_TERM_DISCONT;
  }

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCONT;
  }
}

module.exports = calculateRentalCost;
