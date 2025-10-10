function insert_Row() {
  // Write your code here
  const table = document.getElementById("sampleTable");
  const newElement = document.createElement("tr");
  newElement.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
  const tbody = table.firstElementChild;
  tbody.insertBefore(newElement, tbody.firstElementChild);
}
