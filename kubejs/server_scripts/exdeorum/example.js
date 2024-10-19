// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    // 无中生有 锤子
    event.remove({output: '#exdeorum:hammers'})
    event.shaped('exdeorum:stone_hammer', [
        ' SH',
        ' TS',
        'T  '], {
            S: '#forge:cobblestone',
            T: '#forge:rods/wooden',
            H: '#forge:tools/mallets'
        }
    )

    // 筛子
    Ingredient.all.itemIds.forEach(item => {
        if(Item.of(item).getMod() == 'exdeorum') {
            if(item.includes("sieve")) {
                event.remove({output: item})
            }
        }
    })
    event.shaped('exdeorum:oak_sieve', [
        'WHW',
        'WMW',
        'S S'
    ],{
        W: '#minecraft:planks',
        M: '#minecraft:wooden_slabs',
        S: '#forge:rods/wooden',
        H: '#forge:tools/mallets'
    })

})

