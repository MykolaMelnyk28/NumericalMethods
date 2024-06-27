function solveY(L, b, n) {
    let y = Array(n);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += L[i][j] * y[j];
        }
        y[i] = (b[i] - sum) / L[i][i];
    }
    return y;
}

function solveX(U, b, n, y) {
    let x = Array(n);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
            sum += U[i][j] * x[j];
        }
        x[i] = (y[i] - sum) / U[i][i];
    }
    return x;
}

function methodLU(A, b, n) {
    let L = matrix(0, n, n);
    let U = matrix(0, n, n);

    for (let i = 0; i < n; i++) {
        L[i][i] = 1;
        for (let k = i; k < n; k++) {
            let sum = 0;
            for (let j = 0; j < i; j++) {
                sum += L[i][j] * U[j][k];
            }
            U[i][k] = A[i][k] - sum;
        }
        for (let k = i; k < n; k++) {
            if (i !== k) {
                let sum = 0;
                for (let j = 0; j < i; j++) {
                    sum += L[k][j] * U[j][i];
                }
                L[k][i] = (A[k][i] - sum) / U[i][i];
            }
        }
    }
    let y = solveY(L, b, n);
    let x = solveX(U, b, n, y);
    return x;
}