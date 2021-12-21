function answer(qjson) {
  var harr = qjson.harr;
  var parr1 = qjson.parr1;
  var parr2 = qjson.parr2;
  const section = document.querySelector(".test-section");
  for (var i = 0; i < 11; i++) {
    const art = document.createElement("article");
    art.className = "question";
    art.innerHTML = `
    <h3>${harr[i]}</h3>
    <p>${parr1[i]}</p>
    <p>${parr2[i]}</p>
    <div class="btn-group mt-3" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check yes" name="q${i}-btnradio" id="q${i}-btnradio1" autocomplete="off">
        <label class="btn btn-outline-primary" for="q${i}-btnradio1">네</label>

        <input type="radio" class="btn-check no" name="q${i}-btnradio" id="q${i}-btnradio2" autocomplete="off">
        <label class="btn btn-outline-danger" for="q${i}-btnradio2">아니오</label>

        <input type="radio" class="btn-check maybe" name="q${i}-btnradio" id="q${i}-btnradio3" autocomplete="off">
        <label class="btn btn-outline-success" for="q${i}-btnradio3">고민됨</label>
    </div>
    `;
    section.appendChild(art);
  }
}
