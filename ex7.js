const less = (num) => {
    if (!num || num.length === 0) return "آرایه معتبر نیست یا خالی است.";
    return Math.min(...num);
};

console.log(less([3, 4, 72, 2, 4, 3, 4])); // خروجی: 2