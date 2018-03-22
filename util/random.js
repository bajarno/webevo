function randomGauss(end = 1, start = 0) {
  let rand = 0;

  for (let i = 0; i < 6; i += 1) {
    rand += Math.random();
  }

  rand /= 6;
  
  return start + rand * (end - start);
}