 const addBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function formatWaktu() {
  const now = new Date();
  return now.toLocaleString("id-ID", {
    weekday: "long", day: "numeric", month: "long",
    year: "numeric", hour: "2-digit", minute: "2-digit"
  });
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((taskObj, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${taskObj.text}</strong><br><small>Ditambahkan: ${taskObj.time}</small>`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Hapus";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const waktu = formatWaktu();

  tasks.push({ text: taskText, time: waktu });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  taskInput.value = "";
});

renderTasks();
