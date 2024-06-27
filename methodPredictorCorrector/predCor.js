function methodPredCor(fun, a, b, y0, n) {
  const h = (b - a) / n;
  let x = new Array(n + 1).fill(a).map((_, i) => a + i * h);
  let y = new Array(n + 1).fill(y0);
  let f = new Array(n + 1).fill(0).map((_, i) => fun(x[i], y[i]));

  for (let i = 1; i <= 3; i++) {
    const k1 = h * fun(x[i - 1], y[i - 1]);
    const k2 = h * fun(x[i - 1] + h / 2, y[i - 1] + k1 / 2);
    const k3 = h * fun(x[i - 1] + h / 2, y[i - 1] + k2 / 2);
    const k4 = h * fun(x[i - 1] + h, y[i - 1] + k3);
    y[i] = y[i - 1] + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    f[i] = fun(x[i], y[i]);
  }

  for (let i = 4; i <= n; i++) {
    const yPred = y[i - 1] + h / 24 * (55 * f[i - 1] - 59 * f[i - 2] + 37 * f[i - 3] - 9 * f[i - 4]);
    const fPred = fun(x[i], yPred);
    y[i] = y[i - 1] + h / 24 * (9 * fPred + 19 * f[i - 1] - 5 * f[i - 2] + f[i - 3]);
    f[i] = fun(x[i], y[i]);
  }

  return x.map((xi, idx) => ({ x: xi, y: y[idx] }));
}


// Приклад використання:

// Задаємо диференціальне рівняння у вигляді функції (наприклад, dy/dx = x + y)
function differentialEquation(x, y) {
  return x + y;
}

let params = { a: 0, b: 5, y0: 1, n: 10 };

const results = methodPredCor(differentialEquation, params.a, params.b, params.y0, params.n);

results.forEach((result, index) => {
  console.log(`Крок ${index}: x = ${result.x.toFixed(2)}, y = ${result.y.toFixed(6)}`);
});

