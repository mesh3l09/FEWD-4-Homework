// var student="reem";
//document.getElementById("xname3").innerHTML=student);

// var age =17;


function xname2()
{
var num=document.getElementById("Xname1").value;


{
     if (num%3==0 && num%5 ==0 && num%7==0)
    {
       document.getElementById("Xname3").innerHTML="PlingPlangPlong!";
       
    }

    else if (num%3==0 && num%5 ==0 )
    {
       document.getElementById("Xname3").innerHTML="PlingPlang!";
    }

    else if (num%3==0 && num%7 ==0 )
    {
       document.getElementById("Xname3").innerHTML="PlingPlong!";
    
    } 

    else if (num%7==0 && num%5 ==0 )
    {
       document.getElementById("Xname3").innerHTML="PlangPlong!";
    }


    else if (num%3==0)
    {
    //    document.getElementById("Xname3").innerHTML="Pling!";
    document.getElementById("Xname3").innerHTML="Pling";
  
}
     else if (num%5==0)
    
    {
       document.getElementById("Xname3").innerHTML="Plang!";
    }
    
     else if (num%7==0)
    {
       document.getElementById("Xname3").innerHTML="Plong!";
    }
    
    else
    {
       document.getElementById("Xname3").innerHTML=`"${num}"`;
    }
}

}




    

// var num = 67;

// if(num%2 == 0)
// {
//    document.getElementById("xname3").innerHTML="numbe is even");
// }
// else {
//    document.getElementById("xname3").innerHTML="number is odd");
// }
//____________________________________________

//1. function definition

// function checkEvenOrOdd(num){

// if(num%2 == 0)
// {
//     //document.getElementById("xname3").innerHTML="numbe is even");
//     return true;
// }
// else {
//     //document.getElementById("xname3").innerHTML="number is odd");
//     return false;
// }

// }
// // 2. call function 
// checkEvenOrOdd(72);


// // 3. call statement 

// var isEven = checkEvenOrOdd(32);

//document.getElementById("xname3").innerHTML=isEven);

