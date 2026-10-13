// //function calculatetax(salary, taxrate) {

// //   if (salary < 20000) {
// //throw { error }("wrong computation")//

// // else {
// //     return salary * taxrate



// // const tax =
// //console.log("tax", calculatetax(10000, 0.1))
// // const tax = 
// //console.log("taxr", calculatetax(50000, 0.25))

// let number = 10
// for (number; number > -1; number--) {
//     console.log(number)
// }

// //const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // create a new array of prime numbers
// // create a new array of odd numbers
// // create a new array of every value multiplied by a factor of 2

// //const arr2 = [{name: "Sophia", gender: "F", age: 70}]
// // find all F users,
// // find all adults
// // create a new array of only their names

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const primeNumbers = arr.filter(num => {
//     if (num === 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true
// })

// console.log(primeNumbers);

// const oddNumbers = arr.filter(num => num % 2 !== 0);
// console.log(oddNumbers);

// const doubled = arr.map(num => num * 2);
// console.log(doubled);

// const arr2 = [
//     { name: "Sophia", gender: "F", age: 18 },
//     { name: "Samuel", gender: "M", age: 20 },
//     { name: "Chika", gender: "F", age: 17 },
//     { name: "David", gender: "M", age: 22 }
// ];
// const femaleUsers = arr2.filter(user => user.gender === "F");
// console.log(femaleUsers);

// const adults = arr2.filter(user => user.age >= 18);
// console.log(adults);

// const names = arr2.map(user => user.name);
// console.log(names);

// // class TaxCalculator {
// //     calculatetax(salary, taxrate) {
// //         return salary * taxrate
// //     }
// // }

// // const salary = 100000
// // const taxrate = 0.25
// // const taxcalculator = new TaxCalculator()
// // const tax = taxcalculator.calculatetax(salary, taxrate)

// // console.log("tax", tax)

// class Tipcalculator {
//     calculatetip(amount, tiprate) {

//         return amount * tiprate
//     }
// }


// class FireAlarm {
//     triggerAlarm(smokeLevel) {
//         if (smokeLevel >= 75) {
//             console.log("FIRE ALARN ON");
//         } else {
//             console.log("ALARM OFF");
//         }
//     }
// }
// let alarm = new FireAlarm(80)

// alarm.triggerAlarm(50);
// alarm.triggerAlarm(79);
// const navigation = document.getElementsByClassName(mobile)


// async function prompt() {
//     try {
//         if (salary > 20000) return salary * taxrate
//         else throw Error("wrong computation")
//     } catch (error) {
//         throw Error(error)
//     }
// }


// class TaxCalculator {
//     calculatetax(salary, taxrate) {
//         return salary * taxrate
//     }
// }

// // const salary = 100000
// // const taxrate = 0.25
// // const taxcalculator = new TaxCalculator()
// // const tax = taxcalculator.calculatetax(salary, taxrate)

// const prom = new Promise(function (resolve, reject) {
//     if (salary > 20000) resolve(calculatetax)
//     else reject(false)
// })

// prom.then(function (result) {
//     console.log(result)
// }).catch(function (error) { console.error(error) })
// // research on promise

// const menuButton = document.getElementById('menu-icon')
// console.log(menuButton)
// const nav = document.getElementById('desktop')
// menuButton.onclick = function(event){
    // event.preventDefault();
    // if(nav.classList.contains('hidden')){
        // nav.classList.remove('hidden')
    // }else nav.classList.add('hidden')

    // console.log(nav)
// }
 function taxcalculator(salary, taxrate, cb){
    const tax = salary * taxrate
    cb(tax)

}
taxcalculator(50000, 0.1, function(tax){
    console.log("tax", tax)
})
taxcalculator(20000, 0.2, function(tax){
    console.log("tax", tax)
})

const menuButton = document.getElementById("menu-icon");
const nav = document.getElementById("desktop");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("hidden");
});

nav.querySelectorAll("a, button").forEach(function (item) {
    item.addEventListener("click", function () {
        if (window.innerWidth < 561) {
            nav.classList.add("hidden");
        }
    });
});