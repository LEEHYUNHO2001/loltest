function selectcard(){
    const line = ["top", "mid", "jung", "sup", "ad"];
    const img = ["../img/card/top.jpg", "../img/card/mid.jpg", "../img/card/jung.jpg",
    "../img/card/sup.jpg", "../img/card/ad.jpg"];
    const p = ["우직한 탑라이너 vs 정신병자", "바쁜 로밍의 미드 vs 무한 미아핑 ", "리더쉽 정글 vs 삐져서 메이플스토리", "멘탈까지 서포팅 vs 봇 버린 도구", "집중의 카이팅 vs 답없다~ 우물"];

    const ul = document.querySelector(".select-list-items");
    for(var i = 0; i < 5 ; i++){
    const li = document.createElement("li");
    li.className = "select-item-card";
    li.innerHTML = `
        <li class="select-item-card">
            <div class="select-item select-item${i}">
                <img src="${img[i]}" alt="카드_앞면">
                <p>${p[i]}</p>
                <button onclick="location.href='line/${line[i]}.html'"> 시작하기 </button>
            </div>
            <div class="select-item-back select-item${i}-back">
                <img src="../img/card/card.jpg" alt="카드_뒷면">
            </div>
        </li>
    `;
    ul.appendChild(li);  
    }
}
selectcard()