document.getElementById('practicalMarks3').addEventListener('mouseleave',()=>{
    var theory1=parseInt(document.getElementById("theoryMarks1").value);
    var theory2=parseInt(document.getElementById("theoryMarks2").value);
    var theory3=parseInt(document.getElementById("theoryMarks3").value);
    var theory4=parseInt(document.getElementById("theoryMarks4").value);
    var theory5=parseInt(document.getElementById("theoryMarks5").value);
    var practical1=parseInt(document.getElementById("practicalMarks1").value);
    var practical2=parseInt(document.getElementById("practicalMarks2").value);
    var practical3=parseInt(document.getElementById("practicalMarks3").value);

    if(theory1==''||theory2==''||theory3==''||theory4==''||theory5==''||practical1==''||practical2==''||practical3==''){
        alert("Please enter every fields!!")
    }
    else{
        document.getElementById("totalMarks1").innerHTML=theory1;
        document.getElementById("totalMarks2").innerHTML=theory2;
        document.getElementById("totalMarks3").innerHTML=theory3;
        document.getElementById("totalMarks4").innerHTML=theory4;
        document.getElementById("totalMarks5").innerHTML=theory5;
        document.getElementById("totalMarks6").innerHTML=practical1;
        document.getElementById("totalMarks7").innerHTML=practical2;
        document.getElementById("totalMarks8").innerHTML=practical3;

        var sum=parseInt(theory1+theory2+theory3+theory4+theory5+practical1+practical2+practical3);

        document.getElementById("totalMarks").innerHTML=sum;
        var perc=parseInt(sum/8);
        document.getElementById("percentage").innerHTML=perc;
        const Grade = perc >= 90 ? 'O' : perc >= 80 ? 'A+' : perc >= 70 ? 'A' : perc >= 60 ? 'B+' : perc >= 51 ? 'B' : 'F';
        document.getElementById('grade').innerHTML=Grade;
        document.getElementById('result').innerHTML = Grade === 'F' ? 'Fail' : 'Pass';
        }
    
    });