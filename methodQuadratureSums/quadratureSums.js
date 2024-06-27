function quadratureSums(f, a, b, n) {
    let sum = 0;
    const h = (b - a) / n;
    for (let i = 0; i < n; i++) {
      const xi = a + i * h;
      const xi1 = a + (i + 1) * h;
      const xiMid = (xi + xi1) / 2;
      sum += f(xiMid) * (xi1 - xi);
    }
    return sum;
  }
  
  const a = 0; // start iteratioin
  const b = 1; // end iteration
  const n = 100;

  const f = (x) => {
    return Math.sin(x);
  };

  const result = quadratureSums(f, a, b, n);
  console.log('Результат квадратурних сум:', result);
  