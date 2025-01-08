let boardInputDatas = {
    username: "",
    password: "",
};

function setInputsEvent() {
    const idInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    idInput.onkeyup = handleBoardInputOnChange;
    passwordInput.onkeyup = handleBoardInputOnChange;
}

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.name]: e.target.value,
    };
}

function setButtonEvent() {
    const submitButton = document.querySelector(".botton-blue")
    submitButton.onclick = handleSubmitOnClick;
}

function saveBoard() {
    let boardDatas = localStorage.getItem("boardDatas")
    ? JSON.parse(localStorage.getItem("boardDatas"))
    : [];

    const user = boardDatas.find(
        data =>
            data.username === boardInputDatas.username &&
            data.password === boardInputDatas.password
    );

    if(user) {
        alert("로그인 성공!");
        location.href = "./login.html";
    } else {
        alert("로그인 실패!");
    }
}

setInputsEvent();
setButtonEvent();