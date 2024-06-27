function methodRunge(f, a, b, y0, n) {
  const h = (b - a) / n;
  let x = new Array(n + 1).fill(0).map((_, i) => a + i * h);
  let y = new Array(n + 1).fill(0);
  y[0] = y0;

  for (let i = 0; i < n; i++) {
    const k1 = h * f(x[i], y[i]);
    const k2 = h * f(x[i] + h / 2, y[i] + k1 / 2);
    const k3 = h * f(x[i] + h / 2, y[i] + k2 / 2);
    const k4 = h * f(x[i] + h, y[i] + k3);
    y[i + 1] = y[i] + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
  }

  return x.map((xi, idx) => ({ x: xi, y: y[idx] }));
}

// Приклад використання:

// Задаємо диференціальне рівняння у вигляді функції (наприклад, dy/dx = x + y)
function differentialEquation(x, y) {
  return x + y;
}

let params = { a: 0, b: 5, y0: 1, n: 20 };

// Виклик методу Рунге-Кутта четвертого порядку
const results = methodRunge(differentialEquation, params.a, params.b, params.y0, params.n);

// Виведення результатів
results.forEach((result, index) => {
  console.log(`Крок ${index}: x = ${result.x.toFixed(2)}, y = ${result.y.toFixed(6)}`);
});
