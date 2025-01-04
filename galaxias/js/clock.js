function clockRun() {
    const galaxiasClock = document.querySelector(".left-clock");
    setInterval(() => {
        const now = new Date();
        let nowHours = now.getHours();
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        nowHours = nowHours % 12 || 12;
        const nowClockText = `${nowHours}:${nowMinutes}`;
        galaxiasClock.innerHTML = nowClockText;
    }, 1000)
}

clockRun();