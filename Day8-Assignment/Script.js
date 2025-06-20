// sum of even number
function SumEVEN(num) {
    let sum = 0 ;
    for (let i = 0; i <= num; i++) {
        if(i%2==0){
            sum = sum+i;
        }
    }
    console.log(sum);   
}
SumEVEN(100);

//multiplication table generator
function mulTABLE(num){
    console.log("Multiplication Table of "+num)
    for (let i = 1; i <= 10; i++) {
        console.log(num+" x "+i+" = "+(num*i));
    }
}
let tname =parseInt(prompt("you want the table of")) 
mulTABLE(tname)

//pattern printing
function pattern(num){
    for (let i = 1; i <= num ; i++) {
        let str = ``
        for (let j = 1 ; j<=i ; j++) {
            str = str+'*'
        } 
        console.log(str)
    }
}
pattern(5)

//input validation
function inputVAL(){
    let num = parseInt(prompt("enter a number between 1-10"));
    let validated = false;

    while (!validated) {
        if(!isNaN(num) && num<11 && num>0){
            validated=true ;
            alert("validated");
        }
        else{
            alert("not validated");
            num = parseInt(prompt("invalid num kindly enter"))
        }
    }

}
inputVAL()

//reverse An array
function arrayREv(array){
    let revARR =[] ;

    for(let i = array.length-1 ; i>=0; i--) {
        revARR.push(array[i])
    }

    console.log(revARR)
}
arrayREv([1,2,3,4,5,6])


//frequency counter
function freqCOUNTER(array){

    let uniqARR = [];

    for (let i = 0; i < array.length; i++) {
        if(!uniqARR.includes(array[i])){
            uniqARR.push(array[i])
        }
    }
    for (let i = 0; i < uniqARR.length; i++) {
        let count = 0 ;
        for (let j = 0; j < array.length; j++) {
            if(uniqARR[i]==array[j]){
                count++;
            }
        }
        console.log(uniqARR[i]+" frequency is "+count)
    }
}
freqCOUNTER([1,2,1,3,3,4,2,4,3,5])

//Sum of positive number
function sumPositiveNum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>0){
            sum = sum+array[i]
        }
    }
    console.log(sum)
}
sumPositiveNum([1,-1,2,-2,2])

//Student Record System
const students = {
    name: "Alice Johnson",
    age: 16,
    grade: "10th",
    subjects: ["Math", "Science", "English"] ,

    addSUB: function(book){
     return this.subjects.push(book);
    },

    updateGRADE: function(newGrade){
        this.grade = newGrade;
    },

    displayINFO: function(){
    console.log("student info")
    console.log("name: "+this.name);
    console.log("Age: "+this.age);
    console.log("Grade: "+ this.grade);
    console.log("subjects: "+this.subjects);   
    }

}
students.addSUB("History")
students.updateGRADE("12th")
students.displayINFO()


//library system
const library = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    availablity:"available"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    availablity: "available"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    availablity: "available"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    availablity: "Borrowed"
  }
];
function displayAvailable() {
    library.forEach(e=>{
        if(e.availablity=="available"){
            console.log("available books: "+e.title+" by "+e.author);  
        }
    })
}
function markBorrowed(book){
    library.forEach(e=>{
        if(e.title==book){
            e.availablity = "borrowed";
        }
    })
}
function addBook(title , author , year , availablity){
    library.push({title,author,year,availablity})
}
markBorrowed("The Great Gatsby")
addBook("Case For India" , "Will Durant" , 1920 , "available")
displayAvailable()
