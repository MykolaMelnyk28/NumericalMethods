function adamsMoulton(fun, a, b, y0, n) {
    let t = a;
    let y = y0;
    const h = (b - a) / n;
    const ys = [y0];

    for (let i = 0; i < n; i++) {
        // Прогнозуючий крок (явний метод Адамса-Башфорта)
        const yPredict = y + h * fun(t, y);

        // Коригуючий крок (неявний метод Адамса-Мултона)
        const tNext = t + h;
        let yCorrect = y + h * (fun(tNext, yPredict) + fun(t, y)) / 2;
        
        // Ітерація для підвищення точності коригуючого кроку
        const maxIterations = 10; // максимальна кількість ітерацій
        const tolerance = 1e-6; // допустима похибка
        for (let j = 0; j < maxIterations; j++) {
            const yNew = y + h * (fun(tNext, yCorrect) + fun(t, y)) / 2;
            if (Math.abs(yNew - yCorrect) < tolerance) {
                yCorrect = yNew;
                break;
            }
            yCorrect = yNew;
        }

        y = yCorrect;
        t = tNext;
        ys.push(y);
    }

    return ys;
}

// Диференціальне рівняння: y' = x + y
function fun(x, y) {
    return x + y;
}

// Початкові умови
const params = {
    a: 0,   // початкове значення x
    b: 5,   // кінцеве значення x
    y0: 1,  // початкове значення y
    n: 20   // кількість кроків
};

const results = adamsMoulton(fun, params.a, params.b, params.y0, params.n);

console.log("Результати:", results);