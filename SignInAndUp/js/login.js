let boardInputDatas = {
    id: 0,
    password: "",
};

function setInputsEvent() {
    const idInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    idInput.onkeyup = handleBoardInputOnChange;
    passwordInput.onkeyup = handleBoardInputOnChange;
}

function setButtonEvent() {
    const submitButton = document.querySelector(".botton-blue");
    submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick() {
    saveBoard();
    clear();
}

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.idInput]: e.target.passwordInput,
    };
}

function saveBoard() {
    let boardDatas = !!localStorage.getItem("boardDatas") 
        ? JSON.parse(localStorage.getItem("boardDatas"))
        : [];

    if(boardDatas.length > 0 ) {
        boardInputDatas.id = boardDatas[boardDatas.length - 1].id + 1;
    }

    boardDatas = [
        ...boardDatas,
        boardInputDatas,
    ]

    localStorage.setItem("boardDatas", JSON.stringify(boardDatas));

    alert("회원가입 성공! 로그인 페이지로 이동합니다.");
    location.href = "./login.html";
}

function clear() {
    const idInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    const inputs = [ idInput, passwordInput ];
    inputs.forEach(input => input.value = "");


    boardInputDatas = {
        id: 0,
        password: "",
    };
} 

setInputsEvent();
setButtonEvent();