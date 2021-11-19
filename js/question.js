function que(){
        const qjson = {
            "harr" : [
                "어라?? 나는 분명 미드 골랐는데..",
                "어라?? 나는 분명 미드 골랐는데..",
                "어라?? 나는 분명 미드 골랐는데..",
                "어라?? 나는 분명 미드 골랐는데..",
                "어라?? 나는 분명 미드 골랐는데..",
        ],
            "parr1" : [
                "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. ",
                "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. ",
                "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. ",
                "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. ",
                "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. ",
        ],
        "parr2" : [
            "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!",
            "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!",
            "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!",
            "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!",
            "이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!이번 판 캐리는 내가 할거다. 이번 판 캐리는 내가 할거다. 딜러 정글러를 골랐으니까!",
    ]
        }

    var harr = qjson.harr;
    var parr1 = qjson.parr1;
    var parr2 = qjson.parr2;
    const body = document.querySelector(".test-section");
    for(var i = 0; i < 5 ; i++){
    const art = document.createElement("article");
    art.className = "question";
    art.innerHTML = `
    <h3>${harr[i]}</h3>
    <p>${parr1[i]}</p>
    <p>${parr2[i]}</p>
    <div class="btn-group mt-3" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check yes" name="q${i}-btnradio" id="q${i}-btnradio1" autocomplete="off">
        <label class="btn btn-outline-primary" for="q${i}-btnradio1">Yes</label>

        <input type="radio" class="btn-check no" name="q${i}-btnradio" id="q${i}-btnradio2" autocomplete="off">
        <label class="btn btn-outline-danger" for="q${i}-btnradio2">No</label>

        <input type="radio" class="btn-check maybe" name="q${i}-btnradio" id="q${i}-btnradio3" autocomplete="off">
        <label class="btn btn-outline-success" for="q${i}-btnradio3">Maybe</label>
    </div>
    `;
    body.appendChild(art);  
    }
}

que()