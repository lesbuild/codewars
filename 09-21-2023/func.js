function movie(card, ticket, perc) {
    let cnt = 0;
  while (ticket * cnt <= Math.ceil(card)) {
    cnt++;
    card += ticket * perc ** cnt;
  }
  return cnt;
}