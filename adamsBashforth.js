function methodAdamsBashforth(fun, a, b, y0, n) {
  const h = (b - a) / n;
  let x = new Array(n + 1).fill(a).map((_, i) => a + i * h);
  let y = new Array(n + 1).fill(0);
  y[0] = y0;

  for (let i = 0; i < 3; i++) {
    const k1 = h * fun(x[i], y[i]);
    const k2 = h * fun(x[i] + h / 2, y[i] + k1 / 2);
    const k3 = h * fun(x[i] + h / 2, y[i] + k2 / 2);
    const k4 = h * fun(x[i] + h, y[i] + k3);
    y[i + 1] = y[i] + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
  }

  let f = new Array(n + 1);
  for (let i = 0; i < 4; i++) {
    f[i] = fun(x[i], y[i]);
  }

  for (let i = 3; i < n; i++) {
    f[i] = fun(x[i], y[i]);
    y[i + 1] = y[i] + h / 24 * (55 * f[i] - 59 * f[i - 1] + 37 * f[i - 2] - 9 * f[i - 3]);
    x[i + 1] = x[i] + h;
  }

  f[n] = fun(x[n], y[n]);

  return x.map((xi, idx) => ({ x: xi, y: y[idx] }));
}

// Приклад використання:

// Задаємо диференціальне рівняння у вигляді функції (наприклад, dy/dx = x + y)
function differentialEquation(x, y) {
  return x + y;
}

let params = { a: 0, b: 5, y0: 1, n: 20 };

const results = methodAdamsBashforth(differentialEquation, params.a, params.b, params.y0, params.n);

results.forEach((result, index) => {
  console.log(`Крок ${index}: x = ${result.x.toFixed(2)}, y = ${result.y.toFixed(6)}`);
});
