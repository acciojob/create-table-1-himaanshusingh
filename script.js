const tbody = document.querySelector("tbody");
function insert_Row() {
  const tr = document.createElement("tr");
  tr.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
  tbody.prepend(tr);
}
