function methodEuler(f, a, b, y0, n) {
  let h = (b - a) / n;
  let x = new Array(n + 1).fill(0).map((_, i) => a + i * h);
  let y = new Array(n + 1).fill(y0);

  for (let i = 0; i < n; i++) {
    y[i + 1] = y[i] + h * f(x[i], y[i]);
  }

  return x.map((xi, idx) => ({ x: xi, y: y[idx] }));
}

// Приклад використання:

// Задаємо диференціальне рівняння у вигляді функції (наприклад, dy/dx = x * y)
function differentialEquation(x, y) {
    return x + y;
}

let params = { a: 0, b: 5, y0: 1, n: 20 };

const results = methodEuler(differentialEquation, params.a, params.b, params.y0, params.n);

results.forEach((result, index) => {
    console.log(`Крок ${index}: x = ${result.x.toFixed(2)}, y = ${result.y.toFixed(6)}`);
});
