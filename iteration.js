function generalIterationMethod(A, b, n, eps, kmax) {
    function updateX(x) {
        let x_new = new Array(n);
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    sum += A[i][j] * x[j];
                }
            }
            x_new[i] = (b[i] - sum) / A[i][i];
        }
        return x_new;
    }

    let x = new Array(n).fill(0);
    let k = 0;
    let error = eps + 1;

    while (error > eps && k < kmax) {
        const x_new = updateX(x);
        x = x_new.slice();
        k++;
    }

    return x;
}
