function result() {
    // yes의 갯수를 세기위한 변수를 하나 선언함
    var yes_counter = 0; 
    // 페이지에서 yes인 클래스를 가진 콤포넌트들을 다 참아서 elements에 저장
    var elements = document.getElementsByClassName("yes");
    // 이 elements들을 하나씩 확인하기
    for (var i=0; i<elements.length; i++) {
        // i번째 element가 check 되어 있는지 확인하기
        if (elements[i].checked) {
            // yes_counter를 1 증가
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
    // 대답안한 문항이 있는지 확인하기
    // no라고 대답한 갯수까지 합쳐서 5이면 모든 질문에 대답했다는 의미
    var no_counter = 0;
    elements = document.getElementsByClassName("no");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            no_counter++;
        }
    }

    if (yes_counter + no_counter + maybe_counter !=5) {
        alert("선택안한 문제가 있습니다. 모든 문제에 답해주세요.");
        return;
    }

    var sum = yes_counter + Math.floor(maybe_counter / 2.0);

    if (sum == 5)
        location.href="result/trash.html";
    else if (sum == 4)
        location.href="result/stone.html";
    else if (sum == 3)
        location.href="result/iron.html";
    else if (sum == 2)
        location.href="result/bronze.html";
    else if (sum == 1)
        location.href="result/silver.html";
    else
        location.href="result/gold.html";
}