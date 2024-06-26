function successiveApproximation(func, x0, epsilon = 1e-6, maxIterations = 1000) {
    let x = x0;
    let prevX;
    let iterations = 0;

    do {
        prevX = x;
        x = func(x);
        iterations++;
    } while (Math.abs(x - prevX) > epsilon && iterations < maxIterations);

    return { root: x, iterations: iterations };
}