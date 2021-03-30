var gameData = {
    wood: 0,
    woodPerSec: 0.25,
    woodStorage: 1000,
    food: 100,
    foodModifier: 1,
    foodStorage: 1000,
    population: 2,
    fertilityRate: 50,
}

var foodStr = {

    farms : {
        num: 0,
        eff: 1
    },
    granarys : {
        num: 0,
        eff: 2
    },
    watermills : {
        num: 0,
        eff: 3
    },
    platnations : {
        num: 0,
        eff: 5
    }
}

var woodStr = {
    
    logCabins : {
        num: 0,
        eff: 2
    },
    sawmills : {
        num: 0,
        eff: 5
    },
    woodFactory : {
        num: 0,
        eff: 10
    }
}

var axeType = 1
var curAxeName = "Wood"
var hoeType = 1

var spring = {
    name: "Spring",
    foodModifier: 2,
    woodModifier: 1
}
var summer = {
    name: "Summer",
    foodModifier: 1,
    woodModifier: 0.4
}
var fall = {
    name: "Fall",
    foodModifier: 1,
    woodModifier: 1
}
var winter = {
    name: "Winter",
    foodModifier: 0.4,
    woodModifier: 2
}

var seasons = [spring, summer, fall, winter]

var si = 0

var curSeason = seasons[si]

var allPopulation = 2
var farmers = 0
var lumberjacks = 0
var workers = 0


var blank = []


// Tech

var techPoints = 0

var Technology = {
    
    nomadicAge: {
        id: 0
    },
    copperAge: {
        id: 1
    },
    ironAge: {
        id: 2
    },
    steelAge: {
        id: 3
    },
    platniumAge: {
        id: 4
    },
    diamondAge: {
        id: 5
    },
    iridumAge: {
        id: 6
    }

}

// Worker nums


function totalWorkers() {
    workers = farmers + lumberjacks
    return workers
}

function avaliableWorkers() {
    return (allPopulation - totalWorkers())
}

// Farmers/Food

function farmerPop() {
    if (avaliableWorkers() > 0)
    {
        console.log(avaliableWorkers())
        farmers += 1
    }
    updateGUI()
}

// Lumberjacks

function lumberjacksPop() {
    if (avaliableWorkers() > 0)
    {
        console.log(avaliableWorkers())
        lumberjacks += 1
    }
    updateGUI()
}

// Cooks
// Cant unlock till tech

function cookPop() {
    return
}

// Soldiers

function soldierPop() {
    return
}

// ARchers and Swordsmen
// Cant unlock till tech
function archerPop() {
    return
}

function swordsmenPop() {
    return
}

// Researchers

function Researchers() {
    return
}

// Blacksmiths
// Cant unlock till tech

function blacksmithsPop() {
    return
}
// Pop controls

function incPop(pop) {
    allPopulation += pop
}

function lowerPop(pop) {
    allPopulation -= pop
}

function checkDeath () {
    if (gameData.food < 0) {
        if (allPopulation <= 0) {
            endGame()
        }
        else {
            lowerPop(1)
            updateGUI()
        }
    }
}

function checkGrowth() {
    let newpop = Math.floor(allPopulation * (1+(1/gameData.food)) * (1-(1/gameData.fertilityRate)))
    if (gameData.food > (curSeason.foodModifier * (allPopulation + newpop)) * 3) {
        incPop(newpop)
        updateGUI()
    }
}


function eatFood() {
    gameData.food -= (allPopulation * 3)+Math.round(allPopulation * 0.1)
    updateGUI()
}

// Food

function gatherFood() {
    gameData.food += curSeason.foodModifier 
    updateGUI()
}

// Food structures

function addFood() {
    gameData.food +=  (Math.round(farmers * curSeason.foodModifier) + (foodStr.farms.num * foodStr.farms.eff) + (foodStr.granarys.num * foodStr.granarys.eff) +
    (foodStr.watermills.num * foodStr.watermills.eff) + (foodStr.platnations.num * foodStr.platnations.eff)) * hoeType
}

function farm() {
    foodStr.farms.num += 1
    updateGUI()
}

function granary () {
    foodStr.granarys.num += 1
    updateGUI() 
}

function watermill() {
    foodStr.watermills.num += 1
    updateGUI()
}

function plantation() {
    foodStr.platnations.num += 1
    updateGUI()
}

// Hoe upgrades

function copperHoe() {
    hoeType = 2
}

function ironHoe() {
    hoeType = 3
}

function SteelHoe() {
    hoeType = 4
}

function platHoe() {
    hoeType = 5
}

function diamondHoe() {
    hoeType = 6
}

function iridumHoe() {
    hoeType = 7
}



// Food upgrades

function chopWood() {
    gameData.wood += 1
    updateGUI()
}

// Wood structures

function addWood() {
    gameData.wood += (Math.round(lumberjacks * curSeason.woodModifier) + (woodStr.logCabins.num * woodStr.logCabins.eff) + 
    (woodStr.sawmills.num * woodStr.sawmills.eff) + (woodStr.woodFactory.num * woodStr.woodFactory.eff)) * axeType
    updateGUI()
}

function logCabin() {
    woodStr.logCabins.num += 1
    updateGUI()
}

function sawmill() {
    woodStr.sawmills.num += 1
    updateGUI()
}

function woodFactory() {
    woodStr.woodFactory.num += 1
    updateGUI()
}

// Wood upgrades

function copperAxe() {
    axeType = 2
    curAxeName = "Copper Axe"
}

function ironAxe() {
    axeType = 3
    curAxeName = "Iron Axe"
}

function steelAxe() {
    axeType = 4
    curAxeName = "Steel Axe"
}

function platAxe() {
    axeType = 5
    curAxeName = "Platnium Axe"
}

function diamondAxe() {
    axeType = 7
    curAxeName = "Diamond Axe"
}

function iridumAxe() {
    axeType = 10
    curAxeName = "Iridium Axe"
}

function resetClicks() {
    fclicks = 0
    wclicks = 0
}

var fclicks = 0 
function fClicksPerSec() { 
    ++fclicks 
    return fclicks
} 

function foodPerSec() {
    return (Math.round(((Math.round(farmers * curSeason.foodModifier) + (foodStr.farms.num * foodStr.farms.eff) + (foodStr.granarys.num * foodStr.granarys.eff) +
    (foodStr.watermills.num * foodStr.watermills.eff) + (foodStr.platnations.num * foodStr.platnations.eff)) * hoeType) + (fclicks * curSeason.foodModifier)))
}

var wclicks = 0 
function wClicksPerSec() { 

    ++wclicks 
    return wclicks
} 

function woodPerSec() {
    return (Math.round(((Math.round(lumberjacks * curSeason.woodModifier) + (woodStr.logCabins.num * woodStr.logCabins.eff) + 
    (woodStr.sawmills.num * woodStr.sawmills.eff) + (woodStr.woodFactory.num * woodStr.woodFactory.eff)) * axeType) + (wclicks * curSeason.woodModifier)))
}


function changeSeason() {
    ++si
    if (si >= 4) {
        si = 0
    } 
    curSeason = seasons[si]
}

//function endGame() {
//    alert("You louse")
//}
// var mainGameLoop = window.setInterval(function() {
//     chopWood()
// }, 1000)


function updateGUI() {
    
    document.getElementById("season").textContent = `Season: ${curSeason.name}`
    document.getElementById("food").textContent = `Food: ${Math.round(gameData.food)}     (Per Second: ${foodPerSec()})`
    document.getElementById("wood").textContent = `Wood: ${Math.round(gameData.wood)}     (Per Second: ${woodPerSec()})`
    document.getElementById("population").textContent = "Population: " + allPopulation
    document.getElementById("farmers").textContent = "Farmers: " + farmers
    document.getElementById("lumberjacks").textContent = "Lumberjacks: " + lumberjacks
    document.getElementById("axes").textContent = "Current Axe: " + curAxeName
    document.getElementById("researchPoints").textContent = "Tech Points: " + techPoints
}

// time settings
function mainLoop() {
    setInterval(updateGUI, 1000)
    setInterval(addFood, 1000)
    setInterval(addWood, 1000)
    setInterval(eatFood, 10000)
    setInterval(checkDeath, 3000)
    setInterval(checkGrowth, 20000)
    setInterval(foodPerSec, 1000)
    setInterval(woodPerSec, 1000)
    setInterval(resetClicks, 1000)
    setInterval(changeSeason, 5000)
}

mainLoop()

// weird stuff
