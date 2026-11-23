(function () {
    const btn = document.querySelector("#btn1");
    const div = document.querySelector("#res-table");

    btn.addEventListener("click", () => {
        div.innerHTML = "Loading...";
        fetch("/stations")
            .then((response) => response.json())
            .then((data) => {
                let html = "<table>";
                html += `<tr>
                <th>Station ID</th>
                <th>Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>`;
                data.results.forEach((station) => {
                    html += `<tr>
                    <td>${station.id}</td>
                    <td>${station.name}</td>
                    <td>${station.latitude}</td>
                    <td>${station.longitude}</td>
                    </tr>`;
                });
                html += "</table>";
                div.innerHTML = html;
            })
            .catch((error) => {
                div.textContent = `Blad ${error}`;
            });
    });
})();
