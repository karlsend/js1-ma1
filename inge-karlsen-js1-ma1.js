// QUESTION: 1
const cat = {
complain: function () {
console.log("Meow!");
}
}
cat.complain();

// QUESTION: 2
const heading = document.querySelector("h3");

// QUESTION: 3
const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

// QUESTION: 4
const heading = document.querySelector("h3");
heading.classList.add("subheading");

// QUESTION: 5
const paragraphs = document.querySelectorAll("p");

// QUESTION: 6
const resultsContainer = document.getElementsByClassName(".results");
resultsContainer.innerHTML = '<p>New paragraph</p>';

// QUESTION: 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function catNames (catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}
catNames(cats);

// QUESTION: 8
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function catNames (catArray) {
  let catHTML = "";
for (let i = 0; i < catArray.length; i++) {
  catHTML += '<h5> + {catArray[i].name} + </h5>';
  }
  return catHTML;
}
// QUESTION: 9
const catHTML = catNames(cats);
resultsContainer.innerText = catHTML;

// QUESTION: 10
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function catAge(catArray) {
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {

        let ageValue = "Age unknown";

        if (catArray[i].age) {
            ageValue = catArray[i].age;
        }

        catHTML += `<div><h5>${catArray[i].name}</h5>
                    <p>${ageValue}</p></div>`;
    }

    return catHTML;
}

catAge(cats);
