function fibonacci(n){
    let fibo=[1,2];
    if (n>2) {
        var i=1;
        while (i+1<n) {
            fibo.push(fibo[i]+fibo[i-1]);
            i++;
        };
    }else{
        if (n==1) {
            fibo=[1];
        };
        if (n==2) {
            fibo=[1,2];
        };
    };
    return fibo;
}

function sumInArray(arr){
    let sum=0;
    arr.forEach(number => {
        sum+=number;
    });
    return sum;
}

n=1
sum_global=0
while (sumInArray(fibonacci(n))<4000000) {
    n++;
    sum_global+=n;
};

console.log(n);
console.log(sum_global);
console.log(sumInArray(fibonacci(n)));
console.log(fibonacci(n));

console.log(n-1);
console.log(sum_global-n);
console.log(sumInArray(fibonacci(n-1)));
console.log(fibonacci(n-1));


console.log(sumInArray(fibonacci(1)));
console.log(sumInArray(fibonacci(2)));
console.log(sumInArray(fibonacci(5)));
console.log(sumInArray(fibonacci(10)));