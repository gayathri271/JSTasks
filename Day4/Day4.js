let Data = [
  {
    name: "Alice",
    salary: 50000,
  },
  {
    name: "Charlie",
    salary: 60000,
  },
  {
    name: "Bob",
    salary: 45000,
  },
];

const NewData = Data.filter((user) => user.salary > 45000);
// console.log(NewData);
// let listed=JSON.stringify(NewData)
// let display=document.getElementById("display")
// display.innerHTML=JSON.stringify(NewData)
console.log(`${JSON.stringify(NewData)}`);

function BonusGain(salary, bonus) {
  console.log(`${this.name} earns ${this.salary} and got a bonus of ${bonus}`);
}
BonusGain.call(Data[0], Data[0], 5000);
BonusGain.call(Data[1], Data[1], 6000);
BonusGain.call(Data[2], Data[2], 4000);


let updatedData = Data.map((x) => {
  if (x.name == "Alice") {
    return { ...x, bonus: 5000 };
  } else if (x.name == "Charlie") {
    return { ...x, bonus: 6000 };
  }else if(x.name=="Bob"){
    return {...x,bonus:4000};
  }
});
console.log(JSON.stringify(updatedData));

let TotalBonus=updatedData.reduce((acc,curr)=>acc+curr.bonus,0)
console.log("Total Bonus Given:",TotalBonus);

