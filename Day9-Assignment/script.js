//Digital alarm Assistant

function setAlarm(time, message) {
    setTimeout(() => {
        console.log(message);
    }, time);
}
setAlarm(10000, "this was an alarm set after 10 sec")


//tax calculator
function taxCALC(amount, percentage) {
    return amount - (amount * percentage / 100)
}
console.log("amount after tax: " + taxCALC(100, 13))

//recursive countdown timer
function countdown(num) {
    if(num==0){
        console.log('blast of...');
        return;
    }
    console.log(num);
    setTimeout(() => {
        countdown(num-1);
    }, 1000)}
countdown(5)

//Even number checker
function isEven(num){
    if(num==0) return true;
    if(num==1) return false;

    return isEven(num-2);
}
console.log(isEven(555))

//basic calculator call back

function calc(a,b,operation){   
    return operation(a,b)
}

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b
}
function multiply(a,b){
    return  a*b;
}
function division(a,b){
    return a/b;
}
console.log(calc(20,1,add))

//book search simulator
function searchBook(name, callback){
    console.log("Searching for your "+name)

    setTimeout(()=>{
        const found = `Found book: "${name}"`
        const result = console.log(found);
        callback(result);
    },2000);
}
searchBook("my book" , function(result){});