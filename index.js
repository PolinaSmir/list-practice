const root = document.getElementById("root");
const addButton = document.getElementById("add-item");
const input = document.getElementById("text-of-item");

addButton.addEventListener("click", addListItem);

function addListItem(event) {
  event.preventDefault();

  const listItem = createListItem();

  input.value = "";

  root.append(listItem);
}

function createListItem() {
  const listItem = document.createElement("li");
  listItem.append(input.value);
  listItem.append(editButton());
  listItem.append(createDelButton());
  return listItem;
}

function createDelButton() {
  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("spaceBetweenDelete");
  buttonDelete.addEventListener("click", deleteItem);
  buttonDelete.innerHTML = "Delete";
  return buttonDelete;
}

function deleteItem({ target: { parentElement } }) {
  parentElement.remove();
}

function editButton() {
  const editButton = document.createElement("button");
  editButton.classList.add("spaceBetweenDelete");
  editButton.addEventListener("click", turnIntoInput);
  editButton.addEventListener("click", returnTextFromInput);
  editButton.innerHTML = "Edit";
  return editButton;
}

function turnIntoInput({
  target: {
    parentNode: {
      firstChild: { data },
    },
  },
}) {
  console.dir(event.target.parentNode.firstChild.data); //content text
  console.dir(event.target.parentNode); // for placement
  const editInput = document.createElement("input");
  editInput.append(data);
  event.target.parentElement.insertBefore(editInput, event.target);
  event.target.parentNode.firstChild.remove();
  //event.target.parentNode.firstElementChild.append(editInput);
}

function returnTextFromInput({
  target: {
    parentNode: {
      firstChild: { data },
    },
  },
}) {
  console.dir(event);
  const text = data;
  //event.target.append(data);
  event.target.parentNode.innerHTML.append(data);
  event.target.parentElement.insertBefore(text, event.target);
  event.target.parentNode.firstChild.remove();
}
