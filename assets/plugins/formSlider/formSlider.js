/*========= first slide =========*/

document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream.s1');
  var items = document.querySelectorAll('.gallery__item.s1');

  var prev = document.querySelector('.gallery__prev.s1');
  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item.s1');
  });

  var next = document.querySelector('.gallery__next.s1');
  next.addEventListener('click', function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item.s1');
  });
});
setTimeout(function() {
  document.querySelector(".form").style.display = "grid"
  document.querySelector(".content-card").style.display = "none"
}, 5000);

var cont = 0
document.querySelector(".next").addEventListener("click", ()=> {
  cont++
  check_1()
});

document.querySelector(".prev").addEventListener("click", ()=> {
  cont--
  check_1()
});

function check_1() {
  var itemIndex = document.querySelectorAll(".element").length - 1;

  if (cont <= itemIndex) {
    document.querySelector(".part_one").style.marginLeft = "-" + cont + "00%";
  }
  if (cont > 0) {
    document.querySelector(".next").classList.add('active');
    document.querySelector(".prev").classList.add('active');
  } if (cont < itemIndex) {
    document.querySelector(".prev").classList.add('active')
    document.querySelector(".submit").classList.remove('active')
  } if (cont == itemIndex) {
    document.querySelector(".next").classList.remove('active')
    document.querySelector(".prev").classList.add('active')
    document.querySelector(".submit").classList.add('active')
  } if (cont == 0) {
    document.querySelector(".next").classList.add('active')
    document.querySelector(".prev").classList.remove('active')
    document.querySelector(".submit").classList.remove('active')
  }

}

document.getElementById("checkbox_student").addEventListener("click", ()=> {
  var CKstudent = document.getElementById("student");
  CKstudent.checked = true;
  if (CKstudent.checked == true) {
    document.getElementById("checkbox_student").classList.add("active")
  }
});
document.getElementById("checkbox_autonomous").addEventListener("click", ()=> {
  var CKautonomous = document.getElementById("autonomous");
  CKautonomous.checked = true;
  if (CKautonomous.checked == true) {
    document.getElementById("checkbox_autonomous").classList.add("active")
  }
});
document.getElementById("checkbox_trainee").addEventListener("click", ()=> {
  CKtrainee = document.getElementById("trainee");
  CKtrainee.checked = true;
  if (CKtrainee.checked == true) {
    document.getElementById("checkbox_trainee").classList.add("active")
  }
});
document.getElementById("checkbox_unemployed").addEventListener("click", ()=> {
  var CKunemployed = document.getElementById("unemployed")
  CKunemployed.checked = true;
  if (CKunemployed.checked == true) {
    document.getElementById("checkbox_unemployed").classList.add("active")
  }
});
document.getElementById("checkbox_employee").addEventListener("click", ()=> {
  var CKemployee = document.getElementById("employee")
  CKemployee.checked = true;
  if (CKemployee.checked == true) {
    document.getElementById("checkbox_employee").classList.add("active")
  }
});


document.querySelector(".checksboxs-2 .uncheckAll").addEventListener("click", ()=> {
  document.getElementById("student").checked = false;
  document.getElementById("checkbox_student").classList.remove("active")

  document.getElementById("autonomous").checked = false;
  document.getElementById("checkbox_autonomous").classList.remove("active")

  document.getElementById("trainee").checked = false;
  document.getElementById("checkbox_trainee").classList.remove("active")

  document.getElementById("unemployed").checked = false;
  document.getElementById("checkbox_unemployed").classList.remove("active")

  document.getElementById("employee").checked = false;
  document.getElementById("checkbox_employee").classList.remove("active")
});



//  checkboxs 2


document.getElementById("checkbox_have").addEventListener("click", ()=> {
  var CKno = document.getElementById("have")
  CKno.checked = true;
  if (CKno.checked == true) {
    document.getElementById("checkbox_have").classList.add("active")
    document.getElementById("no").checked = false;
    document.getElementById("checkbox_no").classList.remove("active")
    document.querySelector(".YesNo").classList.add("active")
  }
});

document.getElementById("checkbox_no").addEventListener("click", ()=> {
  var CKno = document.getElementById("no")
  CKno.checked = true;
  if (CKno.checked == true) {
    document.getElementById("checkbox_no").classList.add("active")
    document.getElementById("have").checked = false;
    document.getElementById("checkbox_have").classList.remove("active")
    document.querySelector(".YesNo").classList.remove("active") 
  }
});

