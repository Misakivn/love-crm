document.getElementById("personForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const nickname = document.getElementById("nickname").value;
  const lastDate = document.getElementById("lastDate").value;
  const notes = document.getElementById("notes").value;

  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const personItem = document.createElement("li");

  personItem.innerHTML = `
    <a href="person/${slug}.html">${name}</a> (${nickname || "Không có biệt danh"})`;

  document.getElementById("personList").appendChild(personItem);

  this.reset();
});
