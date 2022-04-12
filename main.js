// Names

let names = ["Russ", "Bridget", "Ophelia", "Hillard", "Cole", "Tomas", "Alejandro", "Dudley", "Kamille", "Josefa", "Marco"];

let russ = 0;
let bridget = 0;
let ophelia = 0;
let hillard = 0;
let cole = 0;
let tomas = 0;
let alejandro = 0;
let dudley = 0;
let kamille = 0;
let josefa = 0;
let marco = 0;

// Gettin ID's

let valueContainer = document.getElementById("valueContainer");
let messages = document.getElementById("messages");
let highscoreDisplay = document.getElementById("highscore");
let scoreboard = document.getElementById("scoreboard");
let winner = document.getElementById("winner");

let value = 0;

// Listeners

let time = Math.floor(Math.random() * 15);
let money;
let highscore = 0;
let moneys = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000]
let modes = ["send", "buy", "spend"];
let mode = modes[Math.floor(Math.random() * modes.length)];
console.log(time * 250);

let timer = setInterval(function() {
    money = Math.floor(Math.random() * moneys[Math.floor(Math.random() * moneys.length)])
    highscoreDisplay.innerHTML = `<p id="highscore">Record: $${highscore}</p`
    if (mode == "buy") {
        let today = new Date();
        today = today.getHours() + ":" + today.getMinutes();
        let name = names[Math.floor(Math.random() * names.length)];
        messages.innerHTML += `<p><span style="color: #ff8800;font-size: 20px;"><b>${names[Math.floor(Math.random() * names.length)]}</span> ha comprado <span style="color:#00f;">$${money}</span> WCoins</b>   -   ${today}</p>`
        money = money / 2;
        value -= money;
        valueContainer.innerHTML = "$" + value + ` <span style="color: #f00">▼</span>`;
        switch (name) {
            case "Russ":
                russ -= money;
            break;
            case "Bridget":
                bridget -= money;
            break;
            case "Ophelia":
                ophelia -= money;
            break;
            case "Hillard":
                hillard -= money;
            break;
            case "Cole":
                cole -= money;
            break;
            case "Tomas":
                tomas -= money;
            break;
            case "Alejandro":
                alejandro -= money;
            break;
            case "Dudley":
                dudley -= money;
            break;
            case "Kamille":
                kamille -= money;
            break;
            case "Josefa":
                josefa -= money;
            break;
            case "Marco":
                marco -= money;
            break;
        }
        money = 0;
        time = Math.floor(Math.random() * 15);
        console.log(time * 250);
        console.log(name);
        mode = modes[Math.floor(Math.random() * modes.length)];
    }else if (mode == "send") {
        let today = new Date();
        today = today.getHours() + ":" + today.getMinutes();
        let name = names[Math.floor(Math.random() * names.length)];
        messages.innerHTML += `<p><span style="color: #ff8800;font-size: 20px;"><b>${name}</span> ha vendido <span style="color:#00f;">$${money}</span> WCoins</b>   -   ${today}</p> `;
        value += money / 3;
        if (value <= 0) {
            value = 0;
        }
        valueContainer.innerHTML = "$" + value + ` <span style="color: #0f0">▲</span>`;
        switch (name) {
            case "Russ":
                russ += money;
            break;
            case "Bridget":
                bridget += money;
            break;
            case "Ophelia":
                ophelia += money;
            break;
            case "Hillard":
                hillard += money;
            break;
            case "Cole":
                cole += money;
            break;
            case "Tomas":
                tomas += money;
            break;
            case "Alejandro":
                alejandro += money;
            break;
            case "Dudley":
                dudley += money;
            break;
            case "Kamille":
                kamille += money;
            break;
            case "Josefa":
                josefa += money;
            break;
            case "Marco":
                marco += money;
            break;
        }
        money = 0;
        time = Math.floor(Math.random() * 15);
        console.log(time * 250);
    }else if ("spend") {
        let today = new Date();
        today = today.getHours() + ":" + today.getMinutes();
        let name = names[Math.floor(Math.random() * names.length)];
        messages.innerHTML += `<p><span style="color: #ff8800;font-size: 20px;"><b>${name}</span> ha gastado <span style="color:#00f;">$${money}</span> WCoins</b>   -   ${today}</p> `;
        switch (name) {
            case "Russ":
                russ -= money/2;
            break;
            case "Bridget":
                bridget -= money/2;
            break;
            case "Ophelia":
                ophelia -= money/2;
            break;
            case "Hillard":
                hillard -= money/2;
            break;
            case "Cole":
                cole -= money/2;
            break;
            case "Tomas":
                tomas -= money/2;
            break;
            case "Alejandro":
                alejandro -= money/2;
            break;
            case "Dudley":
                dudley -= money/2;
            break;
            case "Kamille":
                kamille -= money/2;
            break;
            case "Josefa":
                josefa -= money/2;
            break;
            case "Marco":
                marco -= money/2;
            break;
        }
    }
    mode = modes[Math.floor(Math.random() * modes.length)];
    if (value >= highscore) {
        highscore = value;
    } 

    perfil = Math.max(russ, bridget, ophelia, hillard, cole, tomas, alejandro, dudley, kamille, josefa, marco);

    variableMasAlta = russ == perfil ? "Russ" :
                      bridget == perfil ? "Bridget" :
                      ophelia == perfil ? "Ophelia" :
                      hillard == perfil ? "Hillard" :
                      cole == perfil ? "Cole" :
                      tomas == perfil ? "Tomas":
                      alejandro == perfil ? "Alejandro":
                      dudley == perfil ? "Dudley":
                      kamille == perfil ? "Kamille":
                      josefa == perfil ? "Josefa":
                      marco == perfile ? "Marco": null;


    winner.innerHTML = `<b>Mayor WCoins:  <span style="color:#0f0">${variableMasAlta} ($${perfil})</span></b>`
    scoreboard.innerHTML = `<p><b>Russ: $${russ}| Bridget: $${bridget} | Ophelia: $${ophelia} | Hillard: $${hillard} | Cole: $${cole} | Tomas: $${tomas} | Alejandro: $${alejandro} | Dudley: $${dudley} | Kamille: $${kamille} | Josefa: $${josefa} | Marco: $${marco}</b></p>` 
    highscoreDisplay.innerHTML = `<p id="highscore"><b>Record: $${highscore}</b></p>`
}, time * 50);
