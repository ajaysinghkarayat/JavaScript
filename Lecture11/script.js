// const student = {
//     fullname: "shradha khapra",
//     marks: 94.4
//     printMark : function() {
//         console.log("marks = ", this.marks);
//     }
// };

// const employee = {
//     calcTax()
//     {
//         console.log("tax rate is 10%");
//     }
// }

// const employee1 = {
//     calTax : function () {
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary: 50000,
//     calcTax()
//     {
//         console.log("tax rate is 20%");
//     }
// };

// karanArjun.__proto__ = employee;

// class ToyotaCar {
//     start()
//     {
//         console.log("start");
//     }

//     stop()
//     {
//         console.log("stop");
//     }

//     setBrand(brand)
//     {
//         this.brandName = brand
//     }
// }


class ToyotaCar {

    setBrand(brand)
    {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");