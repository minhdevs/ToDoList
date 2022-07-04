const LContainer = document.querySelector("#lists-container");

function getList() {
  fetch("http://localhost:3000/lists")
    .then((respone) => respone.json())
    .then(function (response) {
      var html = response.map(function (e, i) {
        return `
            <div class="item ${
              e.completed == true ? "completed" : "undone"
            }" idValue="${e.id}">
                <h3 class="times">${
                  e.times
                } ${e.date}  <input type="checkbox" ${e.completed == true ? "checked=true" : ""}" /></h3>
                <h4 class="title">${e.title}</h4>
                <p class="description">${e.description}</p>
            </div>
            `;
      });

      LContainer.innerHTML = html.join("");
    });
}

getList();
