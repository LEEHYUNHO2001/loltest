function que(){
        const qjson = {
            "harr" : [
                "해줄까 말까~",
                "퍼스트 블러드",
                "에휴 집이나 가자",
                "더블킬",
                "왕 귀요",
                "남자라면..",
                "결국 패배",
                "세상은 아직 살만해",
                "적당히 단단",
                "배고프네",
                "생각해보니 억울",
        ],
            "parr1" : [
                "레드팀에 걸렸다. 우리팀 정글이 3렙갱 올 생각에 벌써 신난다. 갑자기 우리팀 정글이 위쪽으로 올라온다.",
                "아직은 게임 초반. 나는 반반 가고있다. 슬슬 정글러들이 3렙 찍을 타이밍..? 리신이 바텀에서 3렙 갱승해서 죽었다.",
                "상대 탑과 같은 타이밍에 집을 갔다. 근데 우리팀 리신이 탑에 달려온다. 내가 충분히 먹을수 있는데 왜 오지?",
                "적 정글이 날카롭게 찔렀지만 슈퍼플레이로 더블킬을 해냈다. '할만한데??' 근데 채팅창을보니 정글과 바텀이 싸운다.",
                "나는 나름 잘컸다. 하지만 적 바텀은 괴물이 되었다. 한타하면 해볼만하긴 한데..",
                "상대 탑 무빙이 예사롭지않다. 날 꼬시고 있다. 남자답게 싸우자! 역시나 땅굴에 적 정글이 있었다.",
                "결국 패배했다. 바로 게임을 잡았다. 근데 왜 서폿이 걸리지?",
                "탑을 양보받았다. 대신에 단단한것좀 해달라고한다. 팀 조합을 보니 뭘 해도 되긴 할거같은데?",
                "적당히 단단하면서 강한 캐릭터를 골랐다. 근데 나의 공격적인 성향 때문일까? 죽어버렸다.",
                "뭔가 게임이 이상하게 돌아간다. 희망이 없어보인다. 배는 고픈데..",
                "깔끔한 패배. 내가 못하긴 했는데 봇도 잘한거 없는거같다.",
        ],
        "parr2" : [
            " 리신 : 리쉬 안함?",
            "멘탈이 살짝 부서진다.",
            "리신 : 나도 망했음 조금만 먹고감",
            "하.. 한마디 할까..",
            "그냥 합류하지 말고 탑이나 밀까?",
            "ㅈㄱㅊㅇ",
            "닷지 유도나 해볼까?",
            "칼챔해서 캐리하자",
            "잔나 : 단단한거나 하라니까. 게임 하기 싫냐?",
            "사람이 밥은 먹어야지. 라면이나 끓이면서 할까?",
            "'그니까 칼챔이나 시켜주지' 라는 생각이 든다.",
    ]
        }

    var harr = qjson.harr;
    var parr1 = qjson.parr1;
    var parr2 = qjson.parr2;
    const body = document.querySelector(".test-section");
    for(var i = 0; i <11 ; i++){
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