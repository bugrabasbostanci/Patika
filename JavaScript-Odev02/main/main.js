const addButton = document.querySelector("#addButton");
const taskArea = document.querySelector("#task");
const taskList = document.querySelector("#taskList");
const taskListItems = document.getElementsByTagName("li");

// butona tıklandığında toastların görünümünü gizledim
const errorButton = document.getElementById("errorButton");
const successButton = document.getElementById("successButton");
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () {
  document.querySelector("#deleteToast").style.display = "none";
});

errorButton.addEventListener("click", function () {
  document.querySelector("#errorToast").style.display = "none";
});
successButton.addEventListener("click", function () {
  document.querySelector("#successToast").style.display = "none";
});

// ekle butonu handler
addButton.addEventListener("click", function () {
  if (!taskArea.value || taskArea.value == "" > 0) {
    // alert("Hatali Giris Yaptiniz");

    // error toast görünür hale geldi
    const toastErr = document.querySelector(".error");
    toastErr.classList.remove("hide");
    toastErr.classList.add("d-block");
    setTimeout(function () {
      toastErr.classList.remove("d-block");
      toastErr.classList.add("hide");
    }, 2500);
  } else {
    const newListItem = document.createElement("li");
    taskList.append(newListItem);
    newListItem.innerText = taskArea.value;

    // success toast görünür hale geldi
    const toastScs = document.querySelector(".success");
    toastScs.classList.remove("hide");
    toastScs.classList.add("d-block");
    setTimeout(function () {
      toastScs.classList.remove("d-block");
      toastScs.classList.add("hide");
    }, 2500);

    // localstorage ekleme
    saveListItemToLocalStorage(taskArea.value);

    // Yeni eklenen list öğelerine kapatma butonu eklemek için
    addCloseButtonToElement(newListItem);
    hideElementOnClick(newListItem.querySelector(".close"));

    // Yeni eklenen list öğelerine checked olayı eklemek için
    newListItem.addEventListener("click", function () {
      if (newListItem.classList.contains("checked")) {
        newListItem.classList.remove("checked");
      } else {
        newListItem.classList.add("checked");
      }
    });
    // öge eklendikten sonra taskArea'yı temizle
    taskArea.value = "";
  }
});

function addCloseButtonToElement(element) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  element.appendChild(span);
}

function hideElementOnClick(element) {
  element.onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";

    const toastDel = document.querySelector(".delete");
    toastDel.classList.remove("hide");
    toastDel.classList.add("d-block");
    setTimeout(function () {
      toastDel.classList.remove("d-block");
      toastDel.classList.add("hide");
    }, 2500);
  };
}

// Var olan öğeler için kapatma butonu ve checked olayını uygulamak için
for (let i = 0; i < taskListItems.length; i++) {
  addCloseButtonToElement(taskListItems[i]);
  hideElementOnClick(taskListItems[i].querySelector(".close"));

  taskListItems[i].addEventListener("click", function () {
    if (taskListItems[i].classList.contains("checked")) {
      taskListItems[i].classList.remove("checked");
    } else {
      taskListItems[i].classList.add("checked");
    }
  });
}

// listeye yeni eklenen ögeleri local storage ekleyen function
function saveListItemToLocalStorage(item) {
  // Önce localStorage'da kayıtlı öğeleri al
  const storedItems = localStorage.getItem("taskListItems");

  // Eğer daha önce kayıtlı öğeler varsa JSON formatından diziye dönüştür
  const itemsArray = storedItems ? JSON.parse(storedItems) : [];

  // Yeni öğeyi dizinin sonuna ekle
  itemsArray.push(item);

  // Diziyi JSON formatına dönüştür ve localStorage'a kaydet
  localStorage.setItem("taskListItems", JSON.stringify(itemsArray));
}
