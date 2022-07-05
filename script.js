const LContainer = document.querySelector("#lists-container");

function getList() {
  fetch("http://localhost:3000/lists")
    .then((respone) => respone.json())
    .then(function (response) {
      var html = response.map(function (e, i) {
        return `
        <div class="item  ${
          e.completed == true ? "completed" : "undone"
        }" idValue="${e.id}">
          <b class="times">
            ${
              e.times
            } ${e.date} <input class="status" type="checkbox" ${e.completed == true ? "checked=true" : ""} />
          </b>
          <div class="times" style="float: right">
            <button>Edit</button> <button>Remove</button>
          </div>
          <h4 class="title">${e.title}</h4>
          <p class="description">${e.description}</p>
        </div>`;
      });

      LContainer.innerHTML = html.join("");

      var items = document.querySelectorAll(".item");

      items.forEach((element) => {
        // Revome button
        var remove = element.childNodes[3].childNodes[3];
        remove.onclick = function () {
          element.remove();
        };

        // Set status
        var input = element.childNodes[1].childNodes[1];
        element.childNodes[1].childNodes[1].onclick = function () {
          if (input.checked) {
            element.classList.add("completed");
            element.classList.remove("undone");
          } else {
            element.classList.add("undone");
            element.classList.remove("completed");
          }
        };
      });
    });
}

getList();
