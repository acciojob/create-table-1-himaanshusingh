function insert_Row() {
  // Write your code here
  const table = document.getElementById("sampleTable");
  const newElement = document.createElement("tr");
  newElement.innerHTML = "<td>New Cell1</td><td>New cell2</td>";
  table.insertBefore(newElement, table.firstElementChild);
}
