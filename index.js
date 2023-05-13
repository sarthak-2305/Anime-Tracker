let anime = []
const textField = document.getElementById("text-field")
const enterBtn = document.getElementById("enter")
const resetBtn = document.getElementById("reset")
const weekdayDropDown = document.getElementById("weekday")
const animeList = document.getElementById("anime-list")
const animeSchedule = document.getElementById("anime-schedule")

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
    let newAnime = new animeProperties(textField.value, weekdayDropDown.value)
    anime.push(newAnime)
    printStuff(anime)
    console.log(JSON.stringify(anime))
    textField.value = ""

})

resetBtn.addEventListener("click", function() {
    anime = []
    printStuff("", "")
    console.log(anime)
})


