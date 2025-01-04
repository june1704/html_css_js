function clockRun() {
    const galaxiasClock = document.querySelector(".window-left-clock");
    setInterval(() => {
        const now = new Date();
        let nowHours = now.getHours();
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const period = nowHours >= 12 ? "PM" : "AM"; 
        nowHours = nowHours % 12 || 12;
        const formattedHours = nowHours < 10 ? `0${nowHours}` : nowHours;
        const nowClockText = `${formattedHours}:${nowMinutes} ${period}`;
        galaxiasClock.innerHTML = nowClockText;
    }, 1000);
}

clockRun();