let a = new Date();
let moth_number = a.getMonth();
let month_name = ["january","february","march","april","may","june",
                  "july","august","september","octomber","november","december"];

let lastday = new Date(a.getFullYear(),moth_number+1,0).getDate();
let firstday = new Date(a.getFullYear(),moth_number,1).getDay()-1;

let m = document.querySelector(".today-date div h1");
let d = document.querySelector(".today-date div p");



m.innerText = month_name[moth_number];
d.innerText = a.toDateString();

var day ="";

for (let i=firstday; i>=1;i-- ) {
    day += `<div class="empty"></div>`;
}

for (let i=1; i<=lastday;i++ ) {
    if (i == new Date().getDate()){
        day += `<div class="today">${i}</div>`;
    }
    else{
        day += `<div>${i}</div>`;
    }
}

document.querySelector(".number").innerHTML = day;

