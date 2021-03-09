function showData() {
  let list = document.getElementById("data-items");

  fetch("http://127.0.0.1:5000/show-data/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => createtr(item));
    });
}
7;

function createtr(blog) {
  const tableitem = `<tr>
    <td>${blog.id}</td>
    <td>${blog.header}</td>
    <td>${blog.title}</td>
    <td>${blog.description}</td>
    <td>${blog.body1}</td>
    <td>${blog.body2}</td>
    <td>${blog.body3}</td>
    <td>${blog.body4}</td>
    <td>${blog.body5}</td>
    <td>${blog.image}</td>
    <td>${blog.category}</td>
    <td>${blog.video}</td>
    <td><a href="http://127.0.0.1:5000/delete-data/${blog.id}/">DELETE</a>
    </td>
    </tr>`;

  let list = document.getElementById("data-items");
  console.log("hello");
  list.innerHTML += tableitem;
}

showData();
