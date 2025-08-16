// 1-

// var number = Number(window.prompt("plese enter a vaild number"));
// if(isNaN(number))
// {
//     window.alert("please inter a correct number");
// }
// else
// {
// window.alert(number);
// }



// 2-


// var number = +window.prompt("please enter the number");
// if(isNaN(number))
// {
//     window.alert("please inter a correct number");
// }

// else if(number%3==0 && number%4==0)
// {
//     window.alert("YES");
// }
// else
// {
//     window.alert("NO");
// }


// 3-


// var number1 = +window.prompt("please enter the first number");
// var number2 = +window.prompt("please enter the second number");

// if(isNaN(number1) || isNaN(number2))
// {
//     window.alert("please inter a correct number");
// }

// else if(number1>number2)
// {
//     window.alert(number1);
// }
// else if(number2>number1)
// {
//     window.alert(number2);
// }
// else
// {
//     window.alert(" tne two numbers are equal");
// }

// 4-

// var number = +window.prompt("please enter the number");

// if(isNaN(number))
// {
//      window.alert("please inter a correct number");
// }

// else if(number<0)
// {
//     window.alert("Negative");
// }
// else if(number>0)
// {
//     window.alert("Positive")
// }

// else
// {
//     window.alert("Zero Number")
// }


// 5-


// var number1 = +window.prompt("please enter the first number");
// var number2 = +window.prompt("please enter the second number");
// var number3 = +window.prompt("please enter the third number");


// if(isNaN(number1) || isNaN(number2) || isNaN(number3))
// {
//     window.alert("please inter a correct number");
// }

// else if(number1 >= number2 && number1>= number3 && number2 <= number3)

//     {
//         window.alert(`the Max number is ${number1}`);
//         window.alert(`the MIN number is ${number2}`);
//     }
// else if(number1 >= number2 && number1> number3 && number3 <= number2)

//     {
//         window.alert(`the Max number is ${number1}`);
//          window.alert(`the MIN number is ${number3}`);
//     }
// else if(number2 >= number1 && number2> number3 && number1 <= number3 )

//     {
//         window.alert(`the Max number is ${number2}`);
//          window.alert(`the MIN number is ${number1}`);
//     }
// else if(number2 >= number1 && number2> number3 && number3 <= number1 )

//     {
//         window.alert(`the Max number is ${number2}`);
//          window.alert(`the MIN number is ${number3}`);
//     }
// else if(number3 >= number1 && number3> number2 && number2 <= number1)

//     {
//         window.alert(`the Max number is ${number3}`);
//          window.alert(`the MIN number is ${number2}`);
//     }
// else 

//     {
//         window.alert(`the Max number is ${number3}`);
//          window.alert(`the MIN number is ${number1}`);
//     }


// 6-

//  var number = +window.prompt("please enter the first number");

//  if(isNaN(number))
//  {
//     window.alert("plaese inter a acorrect number")
//  }

//  else if(number%2==0)
//  {
// window.alert(" the number is Even")
//  }
//  else
//  {
//     window.alert(" the number is Odd")
//  }



// 7-

// var letter = window.prompt(" please enter your letter");

// if(letter=="o" ||letter=="O" || letter=="u" || letter=="U" || letter=="I" || letter=="i" || letter=="e" || letter=="E" ||letter=="a" || letter=="A")

//     {
//         window.alert("Vowel")
//     }

//     else
//          {
//         window.alert("Constant")
//     }


// 9-

// var number = +window.prompt(" enter the number");

// for(var i=1 ; i<= number; i++)
// {
//     window.alert(i)
// }



// 10-


var number = +window.prompt(" enter the number");

for(var i=1 ; i<=12 ; i++)
{
    console.log(i * number);
}


// 11-

// var number = +window.prompt(" enter the number");

// for(var i =1 ; i<=number ;i++)
// {
//     if(i%2==0)
//     {
//         window.alert(i);
//     }
// }



// 12-


// var number = +window.prompt(" enter the number");
// var power = +window.prompt(" enter the power");

// var box = 1;

// for(var i=1 ; i<= power ; i++)
// {
// box = box * number;
// }

// window.alert(box);




// 12-
// var total = 0;
// for(var i=1 ; i<=5 ; i++)
// {
//    total = total + +window.prompt(`inter the subject ${i}`)
// }

// window.alert( `the total is ${total}`);

// window.alert( `Verage is ${total/5} `);

// window.alert(`Persentage is ${(total/500) * 100}%`);



// 13-


// var month = +window.prompt("inter the month");

// if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
// {
//     window.alert("Dayes are 31");
// }
// else if(month == 2)
// {
//     window.alert("Dayes are 28");
// }
// else
// {
//    window.alert("Dayes are 30");
// }


// 14-


// var total = 0;
// for(var i=1 ; i<=5 ; i++)
// {
//    total = total + +window.prompt(`inter the subject ${i}`)
// }

// window.alert( `the total is ${total}`);

// var percentage =`${(total/500) * 100} `;
// window.alert(percentage);

// if(percentage >= 90)
// {
//     window.alert("Grade A")
// }
// else if(percentage < 90 && percentage>=80)
// {
//     window.alert("Grade B")
// }
// else if(percentage < 80 && percentage>=70)
// {
//     window.alert("Grade C")
// }
// else if(percentage < 70 && percentage>=60)
// {
//     window.alert("Grade D")
// }
// else if(percentage < 60 && percentage>=40)
// {
//     window.alert("Grade E")
// }
// else
// {
// window.alert(`Grade F`);
// }

////////////////////////////////////////////////////////////////////// SWITCH ///////////////////////////////////////////////////


// 15-


// var month = +window.prompt("enter the month");
// switch(month)
// {
// case 1:
// case 3:
// case 5:
// case 7:
// case 8:
// case 10:
// case 12:

// window.alert("Dyes are 31");

// break;

// case 2 :
//     window.alert("Dyes are 28");
//     break;
//     default :
//     window.alert("Daye are 30")
// }



// 16-

// var alphapet = window.prompt("enter the alphapet");

// switch (alphapet) {
//     case "o":
//     case "O":
//     case "a":
//     case "A":
//     case "i":
//     case "I":
//     case "u":
//     case "U":
//     case "e":
//     case "E":

//         window.alert(" Vowel");
//         break;

//     default :
//         window.alert("Constant");

// }

// 17-


// var num1 = +window.prompt("enter number 1");
// var num2 = +window.prompt("enter number 2");

// switch(true)
// {
// case num1 >= num2 :
//     window.alert(num1);
//     break;

//     default :
//     window.alert(num2)
// }



// 18-


// var number = +window.prompt(" inter the number")

// switch(true)
// {
// case number%2 ==0:
//     window.alert("Even");
//     break;

//     default:
//         window.alert("Odd");
// }

// 19-

// var number = +window.prompt(" inter the number");

// switch(true)
// {
//     case number<0:
//         window.alert("Negative");
//         break;
//     case number>0:
//         window.alert("Positive");
//         break;

//         default:
//             window.alert("Zero")
// }


// 20-

// var num1 = +window.prompt("enter the first number");
// var operation = window.prompt("what the operation");
// var num2 = +window.prompt("enter the second number");

// if(operation== "*" )
// {
//     window.alert(num1*num2);
// }
// else if(operation== "/" )
// {
//     window.alert(num1/num2);
// }
// else if(operation== "+" )
// {
//     window.alert(num1+num2);
// }
// else
// {
//        window.alert(num1-num2);

// }