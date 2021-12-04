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
    const result_comment = [
        '당신은 팀게임에 꼭 필요한 인재입니다. 지고있던 게임도 팀원들의 사기를 충전시켜 승리해본 경험이 많을 것입니다. 평소에 주변에서 "너는 너무 착해" 라는 말을 듣습니다. 만약에 이 결과를 같이보던 친구가 고개를 갸웃거린다면, 당신은 소시오패스일 것입니다.',
        '실력은 아닐지 몰라도 인성만큼은 첼린저입니다. 친구들이 롤하자고 연락을 하는 경우가 많습니다. 게임을 하면서 오히려 스트레스 받는 경우가 없는 당신은 진정한 승리자입니다. 하지만 "즐겜유저 역겹네" 라는 소리를 들어봤다면 그냥 팀 내부에 악성종양같은 존재입니다.',
        '자신이 못한것은 인정하고, 잘한것은 잘했다고 말하는 플레이어입니다. 어떻게 보면 사실상 팀에 가장 필요한 사람이라고 볼 수 있습니다. 냉철하게 자신을 분석해 게임 실력도 성장할 가능성이 있습니다. 하지만 우물에서 토론판이 벌여질 가능성도 있으므로 주의합시다.',
        '인성이 좋은편입니다. 어이없는 시비가 걸리더라도 왠만하면 차단 or 무시하며 게임을 합니다. 묵묵하게 자신이 해야할 역할을 수행하며 팀을 승리로 이끌기 위해 노력합니다. 하지만 진짜 잘못도 억까라고 생각하고 행동하는 경우가 있습니다. 혼자 할거면 그냥 탈주하세요.',
        '자신이 잘한것만 말합니다. 남이 못한거에 대해서는 목에 핏대를 세우지만, 내가 못한거는 억울한 상황입니다. 아리스토텔레스 빙의해서 말에 자신의 철학을 담아 토론을 하지만 자세히 들어보면 그냥 똥고집입니다. 게임은 지지만 팀과의 싸움에서는 승리하는 스타일 입니다.',
        '게임이 지고 있는 상황에서 자신이 못한것을 알지만, 너도 못했다고 일단 싸우고 보는 스타일입니다. 그러다 한타 한번 잘해서 승리하게 되면 자신의 말이 모두 맞았다는거 마냥 날뛰기 시작합니다. 게임을 포기하지는 않아서 짜증나면서도 자주 만나는 유형이라 감당합니다.',
        '일단 우기고 봅니다. 게임이 지는것은 무조건 우리팀 탓이고 이기면 자신이 잘해서라고 생각합니다. "나는 제대로 하면 OO은 갈텐데~" 라는 생각을 하는데 혼자만의 생각입니다. 귀막고 자신이 하고싶은 말만 하기 때문에 이 몬스터에게는 관심을 주면 안됩니다. 먹이금지!',
        '게임하다가 조금이라도 심기가 불편하면 욕을 합니다. 보통 사회에 불만이 많은 사람으로 세상이 자기 중심으로 돌아가야한다고 생각합니다. 팀에서 가장 잘하는건 나고 팀원들은 내 말을 들어야 욕이 안나옵니다. 앞에 키보드를 들어서 자신의 머리를 내려치세요.',
        '팀에 먼저 시비를 겁니다. 팀이 착하게 말해주면 유쾌한척을 하며 게임을 하고, 팀이 참지 못하고 대응하면 "니가 이런데 게임이 이기겠냐?" 라며 던지기 시작합니다. 팀의 멘탈을 강하게 만들기 위해 시련을 내주는 유형으로 정상적인 사람이 맞나 의심이 갑니다.',
        '조금이라도 질거 같은 분위기이면 우물에서 채팅으로 팀원들의 멘탈을 부십니다. 아무리 팀원들이 착하고 멘탈이 강해 격려해줘도 자신의 자존심때문에 게임을 하지 않습니다. 안쓰럽다는 생각이 들 정도로 비틀어진 사람이지만 찾아가서 핵꿀밤을 먹여주고 싶습니다.',
        '가끔 이유 없이 누누픽하고 유체화를 듭니다. 자신이 우사인볼트라도 된것 마냥 맵을 산책합니다. 누가 보물이라도 숨겨놨는지 구석구석 조사하고 다닙니다. 팀이 이기려고 노력하는 모습을 보니 웃음도 나오는 당신. 마음의 치료를 받아보는건 어떨까요?',
        '세상이 포기한 인재입니다. 게임에 로그인할때부터 팀원과 말싸움 하기 위해서라는 생각을 합니다. 아무도 시키지 않았는데 혼자 청학동 훈장님이라도 된것 마냥 훈계질을 시작합니다. 욕도 얼마나 매콤하게 하는지 팀원들의 머리가 얼얼해집니다. 이런사람을 만나면 그냥 탈주하세요. ',
    ];

    result_btn.addEventListener('click',  () => {
        test_section.classList.add('section-result');
    });

    result_art.className = "result_art";
    result_art.innerHTML = `
        <h3 class="h3-result">당신의 인성 티어는 <strong class="str-result"> ${result[sum]} </strong> 입니다.</h3>
        <img class="img-result" src=${result_img[sum]} />
        <p class="p-result">${result_comment[sum]}</p>
        <a href="../select.html" class="btn btn-warning btn-regame" aria-label="다른 라인 테스트하러 가기">다른 라인 테스트하러 가기</a>
    `;
    test_section.appendChild(result_art);  
}