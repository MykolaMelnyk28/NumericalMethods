function leastSquaresMethod(n, xValues, yValues) {
    if (xValues.length !== yValues.length || xValues.length === 0 || xValues.length !== n) {
        throw new Error('Невірні вхідні дані');
    }
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

    for (let i = 0; i < n; i++) {
        sumX += xValues[i];
        sumY += yValues[i];
        sumXY += xValues[i] * yValues[i];
        sumXX += xValues[i] * xValues[i];
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
}


const xValues = [1, 2];
const yValues = [-1, -2];

const coefficients = leastSquaresMethod(2, xValues, yValues);
console.log('Кут нахилу (slope):', coefficients.slope);
console.log('Перетин (intercept):', coefficients.intercept);