const tasklistbox = document.querySelector(".tasklistbox");
const button =  document.querySelector(".btn2");
const input = document.querySelector(".inpt1");
const listContainer = document.querySelector(".list-container");
const buttonContainer = document.querySelector(".button-container")
const button2 = document.querySelector(".btn3")

const skl2 = document.querySelector(".skl2");
const skl1 = document.querySelector(".skl1")
const skl3 = document.querySelector(".skl3")
const skl4 = document.querySelector(".skl4")


 button.addEventListener("click",go)
  function go (){
    tasklistbox.style.display = "block"
    listContainer.style.height = "450px"
    let li = document.createElement("li");
    li.classList.add("li")
    li.innerText = input.value;
    tasklistbox.appendChild(li)

    if(input.value == ""){
        alert("nese yaz")
    }
    else{
    input.value = ""
    let deleteButton = document.createElement("div")
    deleteButton.classList.add("deleteButton")
    li.appendChild(deleteButton)
    deleteButton.innerHTML = '<img src = "./image/Group7.png" witdh = 20px height = 20px>'

    deleteButton.addEventListener("click",function(){
    tasklistbox.removeChild(li)
    })

    }

}

const  stoote = document.querySelector(".a");

function fnClick (){
    stoote.addEventListener("mouseover",hover);
    stoote.addEventListener("mouseout",hover1);
    function hover(){
        
        skl2.style.display = "block"
        skl1.style.display = "none"
        skl3.style.display = "none"
        skl4.style.display = "none"
    };
    function hover1 (){
            
            skl1.style.display = "block"
            skl2.style.display = "none"
            skl3.style.display = "none"
            skl4.style.display = "none"
        };
    
     skl1.style.display = "block";
     skl4.style.display = "none";

     
     let list, i, switching, b, shouldSwitch;
     list = document.querySelector(".tasklistbox");
     switching = true;
     while (switching) {
         switching = false;
         b = list.querySelectorAll(".li");
         for (i = 0; i < (b.length - 1); i++) {
             shouldSwitch = false;
            if (b[i].innerText.toLowerCase()> b[i + 1].innerText.toLowerCase()) {
              shouldSwitch = true;
               break;
             };
        };
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
         };
    };

    stoote.removeEventListener("click",fnClick);
    stoote.addEventListener("click", onClick);

};

function onClick (){
    skl1.style.display = "none";
    skl3.style.display = "block";
    stoote.addEventListener("mouseover",hover);
    stoote.addEventListener("mouseout",hover1);
    function hover(){
        skl4.style.display = "block"
        skl3.style.display = "none"
        skl1.style.display = "none"
        skl2.style.display = "none"
     };

     function hover1 (){
         
        skl4.style.display = "none"
        skl3.style.display = "block"
        skl1.style.display = "none"
        skl2.style.display = "none"

            };

    let list, i, switching, b, shouldSwitch;
    list = document.querySelector(".tasklistbox");
    switching = true;
    while (switching) {
        switching = false;
        b = list.querySelectorAll(".li");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i + 1].innerText.toLowerCase()>b[i].innerText.toLowerCase()) {
              shouldSwitch = true;
              break;
           };
       };
       if (shouldSwitch) {
           b[i].parentNode.insertBefore(b[i + 1], b[i]);
           switching = true;
          };
    };
    stoote.removeEventListener("click", onClick);
    stoote.addEventListener("click",fnClick);
    stoote.addEventListener("mouseover",hover);
    stoote.addEventListener("mouseout",hover1);
};
stoote.addEventListener("click",fnClick);

button.addEventListener("mouseover", myScript);
button.addEventListener("mouseout", myScript1);
function myScript (){
    button.style.background = "red"
    button2.style.background= "yellow"
    button.style.border = "solid 1px"
    button2.style.border = "solid 1px"

};
function myScript1 (){
    button.style.background= "#833AE0"
    button2.style.background= "#9953F1"
};
function hover(){
    skl1.style.display = "none"
    skl2.style.display = "block"
 };
function hover1 (){
    skl1.style.display = "block"
    skl2.style.display = "none"
};

let i = 1;
while(i=fnClick()){
stoote.addEventListener("mouseover",hover);
stoote.addEventListener("mouseout",hover1);
}
