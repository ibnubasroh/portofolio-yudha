 const addBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
