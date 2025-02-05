function isPerfectNumber(num) {
    let sum = 0;
    let divisors = [];
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
            divisors.push(i);
        }
    }

    return {
        sum: sum,
        divisors: divisors,
        isPerfect: sum === num
    };
}

const result = isPerfectNumber(28);
console.log(`Divisors: ${result.divisors.join(", ")}`); // نمایش مقسوم‌علیه‌ها به‌صورت لیست
console.log(result);
