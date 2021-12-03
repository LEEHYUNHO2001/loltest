function result() {
    var yes_counter = 0; 
    var elements = document.getElementsByClassName("yes");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            yes_counter++;
        }
    }
    
    var maybe_counter = 0;
    elements = document.getElementsByClassName("maybe");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            maybe_counter++;
        }
    }

    var no_counter = 0;
    elements = document.getElementsByClassName("no");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            no_counter++;
        }
    }

    if (yes_counter + no_counter + maybe_counter !=11) {
        alert("선택안한 문제가 있습니다. 모든 문제에 답해주세요.");
        return;
    }

    var sum = yes_counter + Math.floor(maybe_counter / 2.0);

    var cell = document.getElementById("cell"); while ( cell.hasChildNodes() ) { cell.removeChild( cell.firstChild ); }
    const result_btn = document.getElementById('cell');
    const test_section = document.getElementById('cell');
    const result_art = document.createElement("article");
    const result_img = ["../../img/lol/god.jpg", "../../img/lol/challenger.png", "../../img/lol/grandmaster.png", "../../img/lol/master.png", "../../img/lol/diamond.png", "../../img/lol/platinum.png", "../../img/lol/gold.png", "../../img/lol/silver.png", "../../img/lol/bronze.png", "../../img/lol/iron.png", "../../img/lol/stone.jpg", "../../img/lol/trash.jpg"];
    const result = ['그저 빛', '첼린저', '그랜드마스터', '마스터', '다이아', '플레티넘', '골드', '실버', '브론즈', '아이언', '스톤즈', '쓰레기'];

    result_btn.addEventListener('click',  () => {
        test_section.classList.add('result_section');
    });

    result_art.className = "result_art";
    result_art.innerHTML = `
        <h3 class="h3-result">당신의 인성 티어는 ${result[sum]} 입니다.</h3>
        <img class="img-result" src=${result_img[sum]} />
    
    `;
    test_section.appendChild(result_art);  

    // if (sum == 10)
    //     location.href="result/trash.html";
    // else if (sum == 9)
    //     location.href="result/stone.html";
    // else if (sum == 8)
    //     location.href="result/iron.html";
    // else if (sum == 7)
    //     location.href="result/bronze.html";
    // else if (sum == 6)
    //     location.href="result/silver.html";
    // else if (sum == 5)
    //      location.href="result/gold.html";
    // else if (sum == 4)
    //      location.href="result/gold.html";
    // else if (sum == 3)
    //      location.href="result/gold.html";
    // else if (sum == 2)
    //      location.href="result/gold.html";
    // else if (sum == 1)
    //      location.href="result/gold.html";
    // else
    //      location.href="result/gold.html";
}