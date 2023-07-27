function solution(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
) {

  let resultado1 = cost_per_minute.map((item) => {
    if (item.toString().includes(".")) {
      return parseFloat(
        (item * ride_time).toFixed(item.toString().split(".")[1].length)
      );
    } else {
      return parseFloat((item * ride_time).toFixed(1));
    }
  });
  
  let resultado2 = cost_per_mile.map((item) => {
    if (item.toString().includes(".")) {
      return parseFloat(
        (item * ride_distance).toFixed(item.toString().split(".")[1].length)
      );
    } else {
      return parseFloat((item * ride_distance).toFixed(1));
    }
  });

  let resultadoFinal = resultado1.map((item, i) => item + resultado2[i]);

  return resultadoFinal;
}
