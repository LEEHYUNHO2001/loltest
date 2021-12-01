function selectcard(){
    const line = ["top", "mid", "jung", "sup", "ad"];
    const img = ["../img/card/top.jpg", "../img/card/mid.jpg", "../img/card/jung.jpg",
    "../img/card/sup.jpg", "../img/card/ad.jpg"];
    const p = ["우직한 탑라이너 <br> vs <br> 탑신병자", "무한 로밍 <br> vs <br> 무한 미아핑 ", "갱단 정글 <br> vs <br> 메이플스토리", "멘탈케어 <br> vs <br> 봇 버린 도구", "집중의 카이팅 <br> vs <br> 답없다~ 우물"];

    const ul = document.querySelector(".select-list-items");
    for(var i = 0; i < 5 ; i++){
    const li = document.createElement("li");
    li.className = "select-item-card";
    li.innerHTML = `
        <li class="select-item-card">
            <div class="select-item select-item${i}">
                <img src="../img/card/front.jpg" alt="카드_앞면">
                <div class="container">
                    <img src="${img[i]}" alt="캐릭터">
                    <p>${p[i]}</p>
                    <button onclick="location.href='line/${line[i]}.html'"> 시작하기 </button>
                </div class="container">
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