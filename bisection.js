function bisectionMethod(func, a, b, eps) {
    if (func(a) * func(b) >= 0) {
        throw new Error("Функція не має кореня на заданому інтервалі.");
    }

    let left = a;
    let right = b;
    let mid = 0;

    while ((right - left) >= eps) {
        mid = (left + right) / 2;
        if (func(mid) === 0) {
            return mid;
        } else if (func(mid) * func(left) < 0) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return (left + right) / 2;
}

function testMethodIter() {
    const func = x => x ** 2 - 5;
    const a = 0;
    const b = 50;
    const eps = 0.0000000000000001;
    console.log('Результат:',  bisectionMethod(func, a, b, eps));

}

testMethodIter();