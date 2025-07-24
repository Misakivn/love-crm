document.getElementById("personForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const nickname = document.getElementById("nickname").value;
  const lastDate = document.getElementById("lastDate").value;
  const notes = document.getElementById("notes").value;

  const personItem = document.createElement("li");
  personItem.innerHTML = `
    <strong>${name}</strong> (${nickname || "Không có biệt danh"})<br>
    Lần gặp: ${lastDate || "Chưa rõ"}<br>
    📓 Ghi chú: ${notes || "..."}`

  document.getElementById("personList").appendChild(personItem);

  // Clear form
  this.reset();
});
