function solution(departure: number[], destination: number[]): number {
  let rFinal: number;
  let r1: number =
    departure[0] -
    Math.floor(departure[0]) +
    (destination[0] - Math.floor(destination[0]));
  let r2: number =
    Math.ceil(departure[0]) -
    departure[0] +
    (Math.ceil(destination[0]) - destination[0]);

  if (
    departure[0] % 1 !== 0 &&
    destination[0] % 1 !== 0 &&
    departure[0] < 1 &&
    destination[0] < 1
  ) {
    r1 > r2
      ? (rFinal =
          r2 +
          (destination[1] > departure[1]
            ? destination[1] - departure[1]
            : departure[1] - destination[1]))
      : (rFinal =
          r1 +
          (destination[1] > departure[1]
            ? destination[1] - departure[1]
            : departure[1] - destination[1]));
  } else if (
    (departure[0] % 2 === 0 && destination[0] % 2 === 0) ||
    (departure[0] % 2 === 1 && destination[0] % 2 === 1) ||
    departure[0] % 1 !== 0 ||
    destination[0] % 1 !== 0
  ) {
    rFinal =
      destination[0] -
      departure[0] +
      (destination[1] > departure[1]
        ? destination[1] - departure[1]
        : departure[1] - destination[1]);
  } else {
    rFinal = destination[0] - departure[0] + (departure[1] + destination[1]);
  }

  return parseFloat(rFinal.toFixed(1));
}
