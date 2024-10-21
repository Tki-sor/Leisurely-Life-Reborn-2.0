
ServerEvents.recipes(event => {
    Ingredient.of('#forge:ingots').itemIds.forEach(item => {
        let excluded = [
            'minecraft:nether_brick',
            'minecraft:brick',
            'minecraft:honeycomb',
            'minecraft:clay_ball',
            ingots.zinc.item,
            ingots.tin.item,
            'minecraft:copper_ingot'
        ]
        if (excluded.includes(item)) return
        event.remove({ output: item, type: "smelting" })
        event.remove({ output: item, type: "blasting" })
    })
    event.remove({ output: 'minecraft:copper_ingot', type: "smelting" })

    event.blasting('gtceu:brass_ingot', 'gtceu:brass_dust')
    event.blasting('gtceu:bronze_ingot', 'gtceu:bronze_dust')
})


