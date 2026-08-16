const data = {
    1: {
        title: 'BIG TETRIS S1',
        serialx: '<span class="style-ci">모드 번호</span><br>S4 기준 1번 모드<br>S4.1 기준 1번 모드',
        character: '<span class="style-ci">모드 특징</span><br>인지도: 상위권<br>모드의 종류: modern(모던속, MODE)<br>모드가 추가된 시즌: 1',
        description: '<span class="style-ci">모드 설명</span><br>JSTRIS에서 따왔으며, 보드 크기가 5X10인 모드이다.<br>인지도가 애니띵 중에서 가장 높다고 해도 과언이 아닌 모드이다.(시즌 1~2 한정)',
        setcmd: '<span class="style-ci">명령어</span><br><span class="style-0">/set options.boardwidth=5;options.boardheight=10;match.modename=BIG TETRIS S1</span><br>애니띵 제목 추가<br><span class="style-0">/set name=ANYTHING S4.1 - BIG TETRIS S1</span>'
    },

    2: {
        title: '77PAIRS',
        serialx: '<span class="style-ci">모드 번호</span><br>S4 기준 4번 모드<br>S4.1 기준 2번 모드',
        character: '<span class="style-ci">모드 특징</span><br>인지도: 상위권<br>모드의 종류: square(사각류, SQUA)<br>모드가 추가된 시즌: 1',
        description: '<span class="style-ci">모드 설명</span><br>보드 크기가 정사각형인 7X7이다.<br>그리고 가방마저도 PAIRS이다.<br>다른 근본 모드 3개에 비하면 이 모드의 게임플레이는 썩었다.<br>‘에이 그래도 근본 모드인데?’라고 생각한다면 오산이다.',
        setcmd: '<span class="style-ci">명령어</span><br><span class="style-0">/set options.bagtype=pairs;options.boardwidth=7;options.boardheight=7;match.modename=77PAIRS</span><br>애니띵 제목 추가<br><span class="style-0">/set name=ANYTHING S4.1 - 77PAIRS</span>'
    },

    3: {
        title: '20W10H',
        serialx: '<span class="style-ci">모드 번호</span><br>S4 기준 5번 모드<br>S4.1 기준 3번 모드',
        character: '<span class="style-ci">모드 특징</span><br>인지도: 상위권<br>모드의 종류: across(어크로스, ACRO)<br>모드가 추가된 시즌: 1',
        description: '<span class="style-ci">모드 설명</span><br>보드가 10X20에서 20X10으로 바뀐 모드이다.<br>가로로 눕혀진 필드를 연상할 수 있으며, DAS 억까를 많이 당할 수 있다.',
        setcmd: '<span class="style-ci">명령어</span><br><span class="style-0">/set options.boardwidth=20;options.boardheight=10;match.modename=20W10H</span><br>애니띵 제목 추가<br><span class="style-0">/set name=ANYTHING S4.1 - 20W10H</span>'
    },

    4: {
        title: '4W4H',
        serialx: '<span class="style-ci">모드 번호</span><br>S4 기준 6번 모드<br>S4.1 기준 4번 모드',
        character: '<span class="style-ci">모드 특징</span><br>인지도: 상위권<br>모드의 종류: 4-wide(포와류, 4WID)<br>모드가 추가된 시즌: 1',
        description: '<span class="style-ci">모드 설명</span><br>보드 너비가 4칸이며, 높이마저도 4칸이다.<br>이로 인해 즉사를 당할 수 있다.<br>이 모드에서 생존할 수 있는 방법은 2가지가 있는데, 약 1초마다 1번씩 퍼클을 하든지, 무한 콤보로 무적 상태를 만들든지... 무조건 둘 중 하나는 해야한다.',
        setcmd: '<span class="style-ci">명령어</span><br><span class="style-0">/set options.boardwidth=4;options.boardheight=4;match.modename=4W4H</span><br>애니띵 제목 추가<br><span class="style-0">/set name=ANYTHING S4.1 - 4W4H</span>'
    },
};

const params = new URLSearchParams(location.search);
const id = params.get("id");

const card = data[id];

if (card) {
    document.getElementById("title").innerHTML = card.title;
    document.getElementById("serialx").innerHTML = card.serialx;
    document.getElementById("character").innerHTML = card.character;
    document.getElementById("description").innerHTML = card.description;
    document.getElementById("setcmd").innerHTML = card.setcmd;
}
