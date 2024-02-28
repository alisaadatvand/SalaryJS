let btn = document.querySelector(".btn");
let root = document.querySelector(".root");

btn.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add("main");
  root.insertAdjacentElement("afterbegin", div);

  // remove div . title
  let title = document.querySelector(".title");
  title.classList.remove("show");
  title.classList.add("remove");

  // remove btn
  let remove = document.createElement("button");
  remove.innerHTML = "&times";
  remove.classList.add("removebtn");
  root.insertAdjacentElement("afterbegin", remove);

  // form
  let form = document.createElement("form");
  form.classList.add("form");
  div.insertAdjacentElement("afterbegin", form);

  // input first name
  let firstNameLabel = document.createElement("label");
  let firstName = document.createElement("input");
  firstNameLabel.textContent = "first name :";
  firstNameLabel.classList.add("label");
  firstName.classList.add("input");
  firstName.setAttribute("required", "");
  firstName.setAttribute("type", "text");
  form.insertAdjacentElement("afterbegin", firstNameLabel);
  form.insertAdjacentElement("beforeend", firstName);

  // input last name
  let lastNameLabel = document.createElement("label");
  let lastName = document.createElement("input");
  lastNameLabel.textContent = "last name :";
  lastNameLabel.classList.add("label");
  lastName.classList.add("input");
  lastName.setAttribute("required", "");
  lastName.setAttribute("type", "text");
  form.insertAdjacentElement("beforeend", lastNameLabel);
  form.insertAdjacentElement("beforeend", lastName);

  // degree
  let degreeLabel = document.createElement("label");
  degreeLabel.textContent = "degree :";
  degreeLabel.classList.add("label");
  form.insertAdjacentElement("beforeend", degreeLabel);
  let select = document.createElement("select");
  select.classList.add("input");
  select.setAttribute("required", "");
  form.insertAdjacentElement("beforeend", select);
  for (let i = 1; i <= 5; i++) {
    let options = document.createElement("option");
    if (i === 1) {
      options.setAttribute("value", "Phd");
      options.textContent = "Phd";
    } else if (i === 2) {
      options.setAttribute("value", "Master");
      options.textContent = "Master";
    } else if (i === 3) {
      options.setAttribute("value", "Bachelor");
      options.textContent = "Bachelor";
    } else if (i === 4) {
      options.setAttribute("value", "Diploma");
      options.textContent = "Diploma";
    } else if (i === 5) {
      options.setAttribute("value", "Other");
      options.textContent = "Other";
    }
    select.insertAdjacentElement("beforeend", options);
  }

  // clock
  let clockLabel = document.createElement("label");
  clockLabel.textContent = "clock :";
  clockLabel.classList.add("label");
  form.insertAdjacentElement("beforeend", clockLabel);
  let clock = document.createElement("input");
  clock.classList.add("input");
  clock.setAttribute("type", "number");
  clock.setAttribute("required", "");
  form.insertAdjacentElement("beforeend", clock);

  // tax
  let taxLabel = document.createElement("label");
  taxLabel.textContent = "tax :";
  taxLabel.classList.add("label");
  form.insertAdjacentElement("beforeend", taxLabel);
  let tax = document.createElement("input");
  tax.classList.add("input");
  tax.setAttribute("type", "number");
  tax.setAttribute("required", "");
  form.insertAdjacentElement("beforeend", tax);

  // submit
  let btnSubmit = document.createElement("div");
  btnSubmit.classList.add("submit");
  btnSubmit.textContent = "submit";
  form.insertAdjacentElement("beforeend", btnSubmit);

  remove.addEventListener("click", function () {
    div.classList.add("remove");
    remove.classList.add("remove");
    title.classList.remove("remove");
    title.classList.add("show");
  });

  btnSubmit.addEventListener("click", function(){
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value
    let degreeValue = select.value
    let clockValue = Number(clock.value)
    let taxValue = Number(tax.value)
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(degreeValue);
    console.log(clockValue);
    console.log(taxValue);
    function salary(f,l,d,c,t){
        switch(d){
            case "Phd":{
                let salary = c*400000
                let taxSalary = salary*t/100
                let pureSalary = salary-taxSalary
                return `${f} ${l} your salary is ${salary} and your tax is ${taxSalary} and your puresalary is ${pureSalary}`
            }
            case "Master":{
                let salary = c*300000
                let taxSalary = salary*t/100
                let pureSalary = salary-taxSalary
                return `${f} ${l} your salary is ${salary} and your tax is ${taxSalary} and your puresalary is ${pureSalary}`
            }
            case "Bachelor":{
                let salary = c*200000
                let taxSalary = salary*t/100
                let pureSalary = salary-taxSalary
                return `${f} ${l} your salary is ${salary} and your tax is ${taxSalary} and your puresalary is ${pureSalary}`
            }
            case "diploma":{
                let salary = c*100000
                let taxSalary = salary*t/100
                let pureSalary = salary-taxSalary
                return `${f} ${l} your salary is ${salary} and your tax is ${taxSalary} and your puresalary is ${pureSalary}`
            }
            default:{
                let salary = c*80000
                let taxSalary = salary*t/100
                let pureSalary = salary-taxSalary
                return `${f} ${l} your salary is ${salary} and your tax is ${taxSalary} and your puresalary is ${pureSalary}`
            }
        }
    }

    let result=salary(firstNameValue,lastNameValue,degreeValue,clockValue,taxValue)
    let finalDiv = document.createElement("div")
    finalDiv.classList.add("result")
    finalDiv.innerHTML=result
    root.insertAdjacentElement("beforeend",finalDiv)
    btnSubmit.addEventListener("click",function(){
        location.href="./index.html"
        finalDiv.classList.add("remove")
    })
            remove.addEventListener("click",function(){
            finalDiv.classList.add("remove")
        })
  })
});
