const timeText = document.getElementById("timeText");

// Doesnt work sadly
const OpenGoogleSearchUI = () => {
    // let searchInput = document.querySelector("[name='q']");
    // searchInput.focus();
    // searchInput.click();
}

function UpdateClock() {
    setTimeout(UpdateClock, 1000);

    // Maybe 2 time formats instead
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
    const options = {
        weekday: "long", day: "numeric", month: "long",
        hour: "numeric", minute: "numeric"
    };

    // System lcoale
    const dateFormat = new Intl.DateTimeFormat("en-GB", options);

    const time = dateFormat.formatToParts();
    console.log(time);
    // timeText.textContent = `${time.weekday}, ${time.day} ${time.month} ${time.hour} ${time.minute}`;
    timeText.textContent = `${time[0].value}, ${time[2].value} ${time[4].value}\n${time[6].value}:${time[8].value}`;
}

const OnWindowLoaded = () => {
    OpenGoogleSearchUI();
    UpdateClock();
}

window.onload = OnWindowLoaded();