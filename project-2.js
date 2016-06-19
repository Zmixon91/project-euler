// Each new term in the Fibonacci sequence is generated by adding the previous two
// terms.By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four
// million, find the sum of the even- valued terms.

function sumFib() {
	var fib = [1, 2]
	var current = 0
	var iterator = 1
	var out = null
	while (current < 4000000) {
		current = fib[iterator - 1] + fib[iterator]
		fib.push(current)
		iterator++
	}
	fib.map((x) => { if (x % 2 === 0) out += x })
	return out
}

let metric = require('./mymetric.js')
console.log(metric.benchmark(50, sumFib))