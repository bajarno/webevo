function randomGauss(min, max) {
  let rand = 0;

  for (let i = 0; i < 6; i += 1) {
    rand += Math.random();
  }

  rand /= 6;
  
  return min + rand * (max - min);
}