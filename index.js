const words = {
    A: {
        Аpple: "Алим",
        Address: "Хаяг",
        Absorb: "Шингээх",
        Accessory: "Дагалдах хэрэгсэл",
        Add: "Нэмэх",
    },
    B: {
        Book: "Ном",
        Boss: "Толгойлогч, удирдагч",
        Borrow:"Зээлэх",
        Bread:"Талх",
        Bike:"Дугуй",
    },
    C: {
        Cat: "Муур",
        Chocolate:"Шоколад",
        Complain:"Гомдоллох",
        Complex:"Нарийн, төвөгтэй",
        Corner:"Булан",
    },
};

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function toSecond () {
    let value = document.getElementById("toSecond").innerHTML;
    document.getElementById("english-word").innerHTML = value;
    document.getElementById("mongol-word").innerHTML = words.A.Аpple;

    // switch(value) {
    //     case "Apple":
    //         document.getElementById("english-word").value = value;
    //         document.getElementById("mongol-word").value = words.A.Аpple;
    //         break;
    // }
}