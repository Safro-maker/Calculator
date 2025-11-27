function proizv(a,b) {
    return a*b;
};
function summa(a,b) {
    return a+b;
};
function razn(a,b) {
    return a-b;
};
function del(a,b) {
    return a/b;
};
function operate(a,b,op) {
    if (op=="+") return summa(a,b);
    if (op=="*") return proizv(a,b);
    if (op=="-") return razn(a,b);
    if (op=="/") return del(a,b);
};
let num1="";
let num2="";
let oper="";
const vvod = document.getElementById("vvod");
const elements = document.getElementById("elements");
const one = document.getElementById("one");
one.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "1";
    if (oper =="") {
    num1=num1+"1";
    }
    else {
    num2=num2+"1";
    };
});
const two = document.getElementById("two");
two.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "2";
    if (oper =="") {
    num1=num1+"2";
    }
    else {
    num2=num2+"2";
    };
});
const three = document.getElementById("three");
three.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "3";
    if (oper =="") {
    num1=num1+"3";
    }
    else {
    num2=num2+"3";
    };
});
const razd = document.getElementById("razd");
razd.addEventListener("click", () => {
    if(oper=="") {
        oper="/";
        vvod.textContent = vvod.textContent + " / ";
    };
});
const four = document.getElementById("four");
four.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "4";
    if (oper =="") {
    num1=num1+"4";
    }
    else {
    num2=num2+"4";
    };
});
const five = document.getElementById("five");
five.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "5";
    if (oper =="") {
    num1=num1+"5";
    }
    else {
    num2=num2+"5";
    };
});
const six = document.getElementById("six");
six.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "6";
    if (oper =="") {
    num1=num1+"6";
    }
    else {
    num2=num2+"6";
    };
});
const umn = document.getElementById("umn");
umn.addEventListener("click", () => {
    if(oper=="") {
        oper="*";
        vvod.textContent = vvod.textContent + " * ";
    };
});
const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "7";
    if (oper =="") {
    num1=num1+"7";
    }
    else {
    num2=num2+"7";
    };
});
const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "8";
    if (oper =="") {
    num1=num1+"8";
    }
    else {
    num2=num2+"8";
    };
});
const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "9";
    if (oper =="") {
    num1=num1+"9";
    }
    else {
    num2=num2+"9";
    };
});
const veach = document.getElementById("veach");
veach.addEventListener("click", () => {
    if(oper=="") {
        oper="-";
        vvod.textContent = vvod.textContent + " - ";
    };
});
const nol = document.getElementById("nol");
nol.addEventListener("click", () => {
    vvod.textContent = vvod.textContent + "0";
    if (oper =="") {
    num1=num1+"0";
    }
    else {
    num2=num2+"0";
    };
});
const toch = document.getElementById("toch");
toch.addEventListener("click", () => {
    if(oper=="") {
        if(num1.includes(".")==false && num1!="") {
            num1=num1+".";
            vvod.textContent  = vvod.textContent + ".";
        }
    }
    else {
        if(num2.includes(".")==false && num2!="") {
            num2=num2+"."; 
            vvod.textContent = vvod.textContent + ".";
        }
    }
})
const ravn = document.getElementById("ravn");
ravn.addEventListener("click", () => {
    if(num1!="" && num2!="" && oper!="") {
        let n = operate(Number(num1),Number(num2),oper)
        vvod.textContent = String(n);
        num1=n;
        oper="";
        num2="";
    }
});
const sloj = document.getElementById("sloj");
sloj.addEventListener("click", () => {
    if(oper=="") {
        oper="+";
        vvod.textContent = vvod.textContent + " + ";
    };
});
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    vvod.textContent="";
    oper="";
    num1="";
    num2="";
});
const bs = document.getElementById("backspace");
bs.addEventListener("click", () => {
    n=vvod.textContent;
    vvod.textContent=n.slice(0, -1);
})

