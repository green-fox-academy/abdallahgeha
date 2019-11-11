const basket = (shopList) => {
  const list = [...shopList];
  let sum = 0;
  let current = 0;
  do {
    current = 0;
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].amount > 0) {
        current += 1;
        list[i].amount -= 1;
      }
    }
    switch (current) {
      case (1):
        sum += current * (8);
        break;
      case (2):
        sum += (current * (8) * 0.95);
        break;
      case (3):
        sum += (current * (8) * 0.9);
        break;
      case (4):
        sum += (current * (8) * 0.8);
        break;
      default:
        sum += (current * (8) * 0.75);
    }
  } while (current > 0);
  return sum;
};

module.exports = basket;
