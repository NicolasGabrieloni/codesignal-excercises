function solution(l: number, fares: number[]) {

    let resultado = fares.map((item) => item * l);
    
    if (resultado[4] <= 20) {
        return "UberSUV";
    } else if (resultado[3] <= 20){
        return "UberBlack"
    } else if (resultado[2] <= 20){
        return "UberPlus"
    } else if (resultado[1] <= 20){
        return "UberXL"
    } else if (resultado[0] <= 20){
        return "UberX"
    }
}