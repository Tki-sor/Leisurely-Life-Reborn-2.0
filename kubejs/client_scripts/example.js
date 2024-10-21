// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {
    
})

ClientEvents.lang("en_us", (event) => {
    let heatedTip = [
        ["melt", "Melt(Magma Block)"]
    ]
    heatedTip.forEach(([key, text]) => {
        event.add("create.recipe.heat_requirement." + key, text)
    })
})

ClientEvents.lang("en_us", (event) => {
    let heatedTip = [
        ["melt", "熔化（岩浆块）"]
    ]
    heatedTip.forEach(([key, text]) => {
        event.add("create.recipe.heat_requirement." + key, text)
    })
})