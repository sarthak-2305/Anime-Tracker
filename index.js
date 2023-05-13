let anime = []
const textField = document.getElementById("text-field")
const enterBtn = document.getElementById("enter")
const resetBtn = document.getElementById("reset")
const weekdayDropDown = document.getElementById("weekday")
const animeList = document.getElementById("anime-list")
const animeSchedule = document.getElementById("anime-schedule")
const animeInLocalStorage = JSON.parse(localStorage.getItem("anime"))
const errorMsg = document.getElementById("error-msg")

if (animeInLocalStorage)
{
    anime = animeInLocalStorage
    printStuff(anime)
}

//constructor for the object
function animeProperties(animeName, schedule) {
    this.animeName = animeName;
    this.schedule = schedule;
}

function printStuff(animeInfo) {
    nameString = ""
    scheduleString = ""
    for (let i =  0; i < animeInfo.length; i++) {
        nameString += `
            <li>${animeInfo[i].animeName}</li>
        `
        scheduleString += `
            <li>${animeInfo[i].schedule}</li>
        `
    }
    animeList.innerHTML = nameString
    animeSchedule.innerHTML = scheduleString
}

enterBtn.addEventListener("click", function() {
    if (textField.value.trim() === "") {
        return;
    }
    if (weekdayDropDown.value == "none")
    {
        errorMsg.innerHTML = "Please select a day of airing."
        return;
    }
    let newAnime = new animeProperties(textField.value, weekdayDropDown.value)
    anime.push(newAnime)
    printStuff(anime)
    localStorage.setItem("anime", JSON.stringify(anime))
    console.log(JSON.stringify(anime))
    textField.value = ""
    errorMsg.innerHTML = ""

})

resetBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    anime = []
    printStuff(anime)
    console.log(anime)
})


