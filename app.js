// 11.Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

// Input:
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// const proMap = products.map((i)=>{
//     let sum = (i.price - (i.price/100)*i.discount)*i.quantity
//     return sum
// })

// const proRed = proMap.reduce((acc, curVal)=>{
//     acc += curVal;
//     return acc
// }, 0)
// console.log(proRed);

// 12.Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

// Input:
// const obj = {
//   "it": 20,
//   "mushuk": 10,
//   "sigir": 200,
//   "tovuq": 2
// }
// Output: ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]

// let arr = [];
// let keys = Object.keys(obj)
// for(let key of keys){
//     arr.push(key, obj[key])
// }
// console.log(arr);

// 13.GPA ni hisoblovchi dastur tuzing.

// GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];
// let keys = Object.keys(grades)
// let surat = 0
// let maxraj = 0
// const gradeMap = grades.map((i)=>{
//     surat += i.grade*i.kredit;
//     maxraj += i.kredit;

// })
// console.log(surat/maxraj);

// 14.Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};
// let keys = Object.keys(rightAnswers);
// let right = 0;
// let wrong = 0;
// for(let key of keys){
//   if(rightAnswers[key]==myAnswers[key]){
//     right++
//   }else{
//     wrong++
//   }
// }
// console.log(`${right}ta to'g'ri, ${wrong}ta noto'g'ri ishlangan`);

// 15.Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.

// Input:

// const obj = { a: 2, b: 3, c: 4, d: 6 };
// let keys = Object.keys(obj);
// Output:  const res = { a: 6, b: 9, c: 12, d: 18 }
// function getMultipleValues(n) {
//   let newObj = {};
//   for (let key of keys) {
//     newObj[key] = obj[key] * n;
//   }
//   return newObj;
// }

// console.log(getMultipleValues(3));

// 16.Quyidagi obyektdan destructing orqali barcha qiymatlarini oling.

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// let [nameI, company] = Object.values(product)
// let [nameB, price, founder] = Object.values(company)
// let [firstName, lastName, birthDate] = Object.values(founder)
// console.log(nameI);
// console.log(nameB);
// console.log(price);
// console.log(firstName);
// console.log(lastName);
// console.log(birthDate);

// 17.Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring.
// const pupils = [
//     {
//       name: "Elbek",
//       protcent: 95,
//     },
//     {
//       name: "Zafar",
//       protcent: 78,
//     },
//     {
//       name: "Aziz",
//       protcent: 83,
//     },
//     {
//       name: "Jasur",
//       protcent: 88,
//     },
//     {
//       name: "Bobur",
//       protcent: 66,
//     },
//     {
//       name: "Kamron",
//       protcent: 75,
//     },
//   ];

// let keys = Object.keys(pupils);
// let sum = 0;
// let conunter = 0;
// const pupMap = pupils.map((i)=>{
//     sum+= i.protcent;
//     conunter++;
// })
// console.log((sum/conunter).toFixed(1));

// 18.grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let pupMap = pupils.map((i) => {
//   if (i.protcent >= 90) {
//     i.baho = 5;
//   } else if (i.protcent >= 80) {
//     i.baho = 4;
//   } else if (i.protcent >= 70) {
//     i.baho = 3;
//   } else {
//     i.baho = 2;
//   }
//   return i
// });
// console.log(pupMap);





//19 isPassed propertyga protcent 70 dan o'tsa va teng bo’lsa true, aks holda false qiymat o'zlashtirilsin.
// const pupils = [
//     {
//       name: "Elbek",
//       protcent: 95,
//     },
//     {
//       name: "Zafar",
//       protcent: 78,
//     },
//     {
//       name: "Aziz",
//       protcent: 83,
//     },
//     {
//       name: "Jasur",
//       protcent: 88,
//     },
//     {
//       name: "Bobur",
//       protcent: 66,
//     },
//     {
//       name: "Kamron",
//       protcent: 75,
//     },
//   ];

//   let pupMap = pupils.map((i) => {
//     if (i.protcent >= 70) {
//       i.isPassed = true;
//     } else {
//         i.isPassed = false
//     }
//     return i
//   });
//   console.log(pupMap);



// 20.Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// let otganlar = [];
// let yiqilganlar = [];
// let pupMap = pupils.map((i) => {
//     if (i.protcent >= 70) {
//       i.isPassed = true;
//       otganlar.push(i)
//     } else {
//         i.isPassed = false
//         yiqilganlar.push(i)
//     }
//     return i
//   });
//   console.log(`o'tganlar soni ${otganlar.length}ta, yiqilganlar esa ${yiqilganlar.length}ta`);