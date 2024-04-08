for (let i = 10; i >= 1; i--) {
    console.log('countdown: ', i);
}
let number = 10;
while (number >= 1) {
    console.log('Countdown: ', number);
    number--;
}

for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += '*';
    }
    console.log(row);
}
for (i = 5; i > 0; i--) {
    console.log('*'.repeat(i))
}