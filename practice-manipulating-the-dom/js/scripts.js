// 1: Set the text of the <h1> element

const h1 = document.querySelector("h1");
h1.textContent = "Things I like to do";

// 2: Set the color of the <h1> to a different color

h1.style.color = "firebrick";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

const desc = document.querySelector("p.desc");
desc.innerHTML = "During the pandemic in 2020, these were <strong>fun</strong>:";

// 4: Set the class of the <ul> to 'list'

const list = document.querySelector("ul");
list.className = "list";

// 5: Create a new list item and add it to the <ul>

const listItem = document.createElement("li");
listItem.innerHTML = "<input> Lifting weights";
list.appendChild(listItem);


// 6: Change all <input> elements from text fields to checkboxes

const checkboxes = document.querySelectorAll("ul.list li input");

for ( let i = 0 ; i < checkboxes.length ; i++ ) {
  checkboxes[i].type = "checkbox";
};


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

const deleteButton = document.createElement("button");
const extraDiv = document.querySelector("div.extra");

deleteButton.textContent = "Delete";
extraDiv.appendChild(deleteButton);


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

deleteButton.addEventListener('click', () => {
  const containerDiv = document.querySelector("div.container");
  containerDiv.removeChild(extraDiv);
});                                                     