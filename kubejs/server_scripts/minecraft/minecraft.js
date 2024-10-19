
ServerEvents.recipes(event => {
    // 木板
    event.forEachRecipe(
        {
            output: "#minecraft:planks",
            type: "create:cutting",
            input: "#minecraft:logs"
        }, recipe => {
            if (recipe.getOriginalRecipeIngredients().length > 1) return
            event.remove({ output: `${recipe.getOriginalRecipeResult().getId()}`, type: "create:cutting", input: `${recipe.getOriginalRecipeIngredients()[0].getFirst().getItem().getId()}` })
            event.recipes.create.cutting([Item.of(`${recipe.getOriginalRecipeResult().getId()}`, 3)],
                recipe.getOriginalRecipeIngredients())
        })

    // 木台阶
    Ingredient.of('#minecraft:wooden_slabs').itemIds.forEach(id => {
        // 提取出木头的种类
        const woodType = id.split(':')[1].split('_slab')[0]
        // 提取出是哪个mod的
        const mod = id.split(':')[0]
        event.recipes.create.cutting([Item.of(id, 2)], [`${mod}:${woodType}_planks`])

    })

    //箱子
    event.remove({ output: 'minecraft:chest' })
    event.shaped('minecraft:chest', [
        'TWT',
        'WFW',
        'TWT'
    ], {
        T: '#forge:treated_wood',
        W: '#minecraft:planks',
        F: '#forge:gems/flint'
    })

    // 床
    colorList.forEach(color => {
        event.remove({ output: `minecraft:${color}_bed` })
    })
    colorList.forEach(color => {
        event.shaped(Item.of(`minecraft:${color}_bed`, 1), [
            "AAA",
            "BBB",
            "CDC"
        ], {
            A: `minecraft:${color}_carpet`,
            B: '#minecraft:wooden_slabs',
            C: '#minecraft:wooden_fences',
            D: '#forge:tools/mallets'
        })
    })

    // 地毯
    colorList.forEach(color => {
        event.remove({ id: `minecraft:${color}_carpet` })
    })
    colorList.forEach(color => {
        event.shaped(Item.of(`minecraft:${color}_carpet`, 1), [
            "AA"
        ], {
            A: `minecraft:${color}_wool`
        })

        event.shaped(Item.of(`minecraft:${color}_carpet`, 3), [
            "AAB"
        ], {
            A: `minecraft:${color}_wool`,
            B: '#forge:tools/saws'
        })
    })

    // 染料
    colorList.forEach(color => {
        // 输出color对应的染料，输入color+1对应的染料
        if (colorList.indexOf(color) == colorList.length - 1) {
            event.recipes.botania.mana_infusion(`minecraft:${color}_dye`, `minecraft:${colorList[0]}_dye`, 200)
        } else {
            event.recipes.botania.mana_infusion(`minecraft:${color}_dye`, `minecraft:${colorList[colorList.indexOf(color) + 1]}_dye`, 200)
        }
    })
})