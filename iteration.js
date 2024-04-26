function methodIter(A, b, n, eps, kmax) {
    let x = new Array(n).fill(0);
    let x_new = new Array(n);
    let k = 0;
    let error = eps + 1;
    while (error > eps && k < kmax) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    sum += A[i][j] * x[j];
                }
            }
            x_new[i] = (b[i] - sum) / A[i][i];
        }
        error = Math.max(...x_new.map((value, index) => Math.abs(value - x[index])));
        x = x_new.slice();
        k++;
    }
    return x;
}

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

// Приклад використання:
let func = x => Math.cos(x); // Функція, корінь якої ми шукаємо
let x0 = 1; // Початкове наближення
let result = successiveApproximation(func, x0);
console.log(result);


function testMethodIter() {
    const A = [[4, -1, 0], [-1, 4, -1], [0, -1, 3]];
    const b = [10, 10, 10];
    const n = 3;
    const eps = 0.0001;
    const kmax = 1000;
    const result = methodIter(A, b, n, eps, kmax);
    console.log('Результат:',  methodIter(A, b, n, eps, kmax));
    //console.log('Результат:',  simpleIterationMethod(A, b, n, eps, kmax));
    console.log('Результат:',  generalIterationMethod(A, b, n, eps, kmax));

}

testMethodIter();