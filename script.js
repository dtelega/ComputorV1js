function calculate() {

    var a=0, b=0, c=0;
    var  result_field = document.getElementById('result_field');
    var details_field = document.getElementById('details_field');
    var result, details;

    var equation = document.getElementById('equation').value;

    if (equation.search('=') === -1 || equation.search('X') === -1){
        console.log("FAIL");
        return;
    }
    equation = equation.split('=');
    if (equation[1][0] !== '-' && equation[1][0] !== '+'){
        equation[1] ="+" + equation[1];
    }
    equation[1] = equation[1].replace(/-/g, 'p');
    equation[1] = equation[1].replace(/\+/g, 'm');
    equation[1] = equation[1].replace(/m/g, '-');
    equation[1] = equation[1].replace(/p/g, '+');
    equation[1] = equation[1].replace(/\*\*/g, '*');
    equation = equation.join('');
    equation = equation.replace(/\+/g," +");
    equation = equation.replace(/-/g, " -");
    equation = equation.split(' ');

    equation.forEach(function (item, i, equation) {
        if (equation[i].indexOf("X^2")+1) {
            equation[i] = equation[i].replace("*X^2", "");
            a += Number(equation[i]);

        }
        else if (equation[i].indexOf("X^1") + 1){
            equation[i] = equation[i].replace("*X^1", "");
            b += Number(equation[i]);

        }
        else if (equation[i].indexOf("X^0") + 1){
            equation[i] = equation[i].replace("*X^0", "");
            c += Number(equation[i]);

        }
        else if (!(equation[i].indexOf("0") + 1)){
            alert("The polynomial degree is stricly greater than 2, I can't solve.");
        }
    });
    details = a+"*X<sup>2</sup> + "+b+"*X + "+c+" = 0;<br>";
    console.log(a,b,c);
    var D = (b*b) - (4*a*c);
    details += "D="+D+";\n<br>";
    console.log("D="+D);
    var x1,x2;
    if (D < 0) {

        details += "пара комплексно-сопряженных корней<br>";
        result = "x<sub>1</sub> = (";
        result += - b / ( 2 * a );
        result += ", ";
        result += (-D)**(0.5) / ( 2 * a );
        result += "), x<sub>2</sub> = (";
        result += - b / ( 2 * a);
        result += ", ";
        result += -((-D)**(0.5) / ( 2 * a ));
        result += ").";

    }
    else if (D > 0)
    {
        //x1 = (-b - Math.sqrt(D)) / (2*a);
        //x2 = (-b + Math.sqrt(D)) / (2*a);
        x1 = (-b - D**(0.5)) / (2*a);
        x2 = (-b + D**(0.5)) / (2*a);
        result = "X<sub>1</sub> = "+x1+"<br>X<sub>2</sub> = "+x2+"";
        console.log("x1="+x1+";x2="+x2);
    }
    else if (D === 0)
    {
        x1 = (-b)/(2*a);
        console.log("x="+x1);
        result = "x="+x1+";\n";
    }
    result_field.innerHTML = result;
    details_field.innerHTML = details;
}

function check_input(input) {
    input.value = input.value.replace(/[^\d\.\X\\+\-\\=\^\\*]/g, '');
}
