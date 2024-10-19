
ServerEvents.recipes(event => {
    Ingredient.of('#forge:ingots').itemIds.forEach(item => {
        let excluded = [
            'minecraft:nether_brick',
            'minecraft:brick',
            'minecraft:honeycomb',
            'minecraft:clay_ball',
            ingots.zinc.item,
            ingots.tin.item
        ]
        if(excluded.includes(item)) return
        event.remove({output: item, type: "smelting"})
        event.remove({output: item, type: "blasting"})
    })
    // event.smelting(ingots.zinc.item, ores.zinc.)
})


