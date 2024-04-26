function methodGauss(A, b, n) {
    for (let k = 0; k < n - 1; k++) {
        for (let j = k + 1; j < n; j++) {
            const factor = A[j][k] / A[k][k];
            b[j] -= factor * b[k];
            for (let i = k; i < n; i++) {
                A[j][i] -= factor * A[k][i];
            }
        }
    }
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
            sum += A[i][j] * x[j];
        }
        x[i] = (b[i] - sum) / A[i][i];
    }
    return x;
}