class car {
    constructor (brand) {
        console.log("Constructor  executed")
        this.brand = brand;
    }
    start(){
        console.log("Car Started");
    }

    stop(){
        console.log("car Stopped");
    }

    // setbrand (brand){
    //     this.BrandName = brand;
    // }


}

let innova = new car("Innova"); // Each time constructor is executed.
innova.setbrand("Toyato.");

let fortuner = new car("Innova"); 
fortuner.setbrand("Toyato.")  

let qualis = new car;

// console.log("JS COnnected")

// const student = {
//     firstName: "Venkatesh",
//     marks: 91,
//     printMarks: function () {
//         console.log("Marks = ", this.marks)
//     }
// }

// const tax = {
//     calcTax1 (){
//         console.log("Tax is 10%. ");
//     },

//     calcTax2 : function(){
//         console.log("Tax is 20%");
//     }
// }


// var taxValue = tax.calcTax2()

// console.log(taxValue);
// console.log(typeof(taxValue));