document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("colorBox");
  const startButton = document.getElementById("startTimeout");

  function changeBackgroundColor() {
    setTimeout(() => {
      colorBox.style.backgroundColor = "blue";
    }, 5000);
  }

  
  startButton.addEventListener("click", changeBackgroundColor);
});

// let a=new Date();
// console.log(a.toDateString());
// console.log(a.toTimeString());
// console.log(a.toLocaleDateString());

// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getTime());

// console.log(date.setDate(13));
// console.log(date.setDate(11));
// console.log(date.setMinutes(13));

// let a={
//     id:1,
//     age:23,
//     name:"bhavani",
//     details:function(){
//         console.log(this.name);
//     }
// }
// console.log(a.details);

// let a = {
//   id: 1,
//   age: 23,
//   name: "bhavani",

//   }

//   let b= function(x){
//     let name="Kalisetti"
//   console.log(this.name+ "  "+x );
// };
// let c=b.call(a, [ "durga", "durga","8688724292",5,9,12222])
// console.log(c)
