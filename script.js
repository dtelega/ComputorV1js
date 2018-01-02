// TODO: polynomial degree
// TODO: sqrt

function calculate() {

    var a = 0;
    var b = 0;
    var c = 0;
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
        else {
            alert("The polynomial degree is stricly greater than 2, I can't solve.");
        }
    });

    console.log(a,b,c);
    var D = (b*b) - (4*a*c);

    console.log("D="+D);
    var x1,x2;
    if (D < 0)
        console.log("nety x")
    else if (D > 0)
    {
        x1 = (-b - Math.sqrt(D)) / (2*a); // TODO: my sqrt
        x2 = (-b + Math.sqrt(D)) / (2*a);
        console.log("x1="+x1+";x2="+x2);
    }
    else if (D == 0)
    {
        x1 = (-b)/(2*a);
        console.log("x="+x1);
    }
}

function check_input(input) {
    input.value = input.value.replace(/[^\d\.\X\\+\-\\=\^\\*]/g, '');
}