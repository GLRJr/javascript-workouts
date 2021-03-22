const bill =100;
const bills =[125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const total = [calcTip(125)+125, calcTip(555)+555, calcTip(44)+44];

function  calcTip(bill){
  if (bill <= 300 && bill >=50){ 
        tip = bill * 0.15
      }else {   
        tip = bill * 0.2;
      }
      return tip;
} 




calcTip(bill);
console.log(total);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`);