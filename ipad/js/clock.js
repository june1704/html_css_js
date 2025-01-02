function clockRun() {
    const ipadClock = document.querySelector(".ipad-clock");
    setInterval(() => {
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const nowClockText = `${nowHours}:${nowMinutes}`;
        ipadClock.innerHTML = nowClockText;
    }, 1000);
}

clockRun();