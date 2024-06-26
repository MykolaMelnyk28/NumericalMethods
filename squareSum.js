function leastSquares(xValues, yValues) {
    if (xValues.length !== yValues.length || xValues.length === 0) {
        throw new Error('Невідповідність розмірності аргументів або порожній набір даних.');
    }

    const n = xValues.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXX = 0;

    for (let i = 0; i < n; i++) {
        sumX += xValues[i];
        sumY += yValues[i];
        sumXY += xValues[i] * yValues[i];
        sumXX += xValues[i] * xValues[i];
    }

    const meanX = sumX / n;
    const meanY = sumY / n;

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = meanY - slope * meanX;

    return { slope, intercept };
}

const xValues = [1, 10, 3, 4, 5];
const yValues = [2, 3, 4, 5, 6];
const result = leastSquares(xValues, yValues);
console.log('Коефіцієнт наклону:', result.slope);
console.log('Відрізок на осі y:', result.intercept);