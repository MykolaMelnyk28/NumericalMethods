function methodNewton(func, derivative, x0, eps, kmax) {
    let x = x0;
    let k = 0;
    let error = eps + 1;

    while (error > eps && k < kmax) {
        const f_x = func(x);
        const f_prime_x = derivative(x);

        if (f_prime_x === 0) {
            throw new Error("Похідна дорівнює нулю, метод розбігається.");
        }

        const x_new = x - f_x / f_prime_x;
        error = Math.abs(x_new - x);
        x = x_new;
        k++;
    }

    return x;
}