function clockRun() {
    const galaxiasClock = document.querySelector(".window-right-clock");
    setInterval(() => {
        const now = new Date();

        // 날짜 가져오기
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월 두 자리로 표시
        const date = now.getDate().toString().padStart(2, '0'); // 일 두 자리로 표시

        // 요일 배열 (영문 대문자)
        const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        const day = daysOfWeek[now.getDay()];

        // 날짜와 요일 표시 형식
        const nowClockText = `${year}.${month}.${date} ${day}`;
        galaxiasClock.innerHTML = nowClockText;
    }, 1000);
}

clockRun();