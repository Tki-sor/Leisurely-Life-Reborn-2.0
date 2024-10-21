
ServerEvents.recipes(event => {
    // 移除已有的筛网配方
    event.remove({ type: "exdeorum:sieve" })
    event.remove({ type: "exdeorum:compressed_sieve" })
    event.remove({ type: "createsifter:sifting" })

    // 通用注册函数
    let registerSieveRecipes = (sieveList) => {
        sieveList.forEach(sieve => {
            sieve.input.forEach(input => {
                // 生成输出物品列表
                let outputArray = sieve.output.map(output => {
                    return Item.of(output.item, output.amount).withChance(output.chance)
                })

                // 注册 createsifter 的配方
                event.recipes.createsifter.sifting(outputArray, [input, `createsifter:${sieve.mesh}_mesh`])

                // 注册 exdeorum 的配方
                sieve.output.forEach(output => {
                    let mesh = sieve.mesh == "wrought_iron" ? "iron" : sieve.mesh
                    event.custom({
                        type: 'exdeorum:sieve',
                        ingredient: {
                            item: input
                        },
                        mesh: `exdeorum:${mesh}_mesh`,
                        result: output.item,
                        result_amount: {
                            type: 'minecraft:binomial',
                            n: output.amount,
                            p: output.chance
                        }
                    })

                })

            })
        })
    }

    // 泥土
    registerSieveRecipes([{
        mesh: "string",
        input: ['minecraft:dirt'],
        output: [
            { item: 'exdeorum:grass_seeds', amount: 1, chance: 0.05 },
            { item: 'exdeorum:mycelium_spores', amount: 1, chance: 0.03 },
            { item: 'exdeorum:stone_pebble', amount: 3, chance: 0.7 },
            { item: 'exdeorum:diorite_pebble', amount: 1, chance: 0.5 },
            { item: 'exdeorum:granite_pebble', amount: 1, chance: 0.5 },
            { item: 'exdeorum:andesite_pebble', amount: 1, chance: 0.5 },
            { item: 'exdeorum:tuff_pebble', amount: 1, chance: 0.5 },
            { item: 'exdeorum:calcite_pebble', amount: 1, chance: 0.5 }
        ]
    },
    {
        mesh: "flint",
        input: ['minecraft:dirt'],
        output: [
            { item: 'exdeorum:grass_seeds', amount: 1, chance: 0.07 },
            { item: 'exdeorum:mycelium_spores', amount: 1, chance: 0.04 },
            { item: 'exdeorum:stone_pebble', amount: 3, chance: 0.8 },
            { item: 'exdeorum:diorite_pebble', amount: 1, chance: 0.55 },
            { item: 'exdeorum:granite_pebble', amount: 1, chance: 0.55 },
            { item: 'exdeorum:andesite_pebble', amount: 1, chance: 0.5 },
            { item: 'exdeorum:tuff_pebble', amount: 1, chance: 0.5 },
            { item: 'exdeorum:calcite_pebble', amount: 1, chance: 0.5 },
            { item: 'exdeorum:deepslate_pebble', amount: 1, chance: 0.3 },
            { item: 'exdeorum:basalt_pebble', amount: 1, chance: 0.3 },
            { item: 'exdeorum:blackstone_pebble', amount: 1, chance: 0.25 }
        ]
    }])

    // 沙砾
    registerSieveRecipes([
        {
            mesh: "string",
            input: ["minecraft:gravel"],
            output: [
                { item: "minecraft:flint", amount: 1, chance: 0.25 }
            ]
        },
        {
            mesh: "flint",
            input: ["minecraft:gravel"],
            output: [
                { item: "minecraft:flint", amount: 1, chance: 0.25 },
                { item: "minecraft:coal", amount: 1, chance: 0.08},
                { item: ores.gold.item, amount: 1, chance: 0.015},
                { item: ores.iron.item, amount: 1, chance: 0.025},
                { item: ores.copper.item, amount: 1, chance: 0.025},
                { item: ores.nickel.item, amount: 1, chance: 0.02}
            ]
        },
        {
            mesh: "wrought_iron",
            input: ["minecraft:gravel"],
            output: [
                { item: "minecraft:diamond", amount: 1, chance: 0.003},
                { item: "minecraft:emerald", amount: 1, chance: 0.003},
                { item: ores.gold.item, amount: 1, chance: 0.02},
                { item: ores.iron.item, amount: 1, chance: 0.035},
                { item: ores.copper.item, amount: 1, chance: 0.03},
                { item: ores.nickel.item, amount: 1, chance: 0.02}
            ]
        }
    ])


    // 沙子
    registerSieveRecipes([
        {
            mesh: "flint",
            input: ["minecraft:sand"],
            output: [
                { item: ores.tin.item, amount: 1, chance: 0.025 },
                { item: ores.aluminium.item, amount: 1, chance: 0.02 },
                { item: ores.zinc.item, amount: 1, chance: 0.02 }
            ]
        },
        {
            mesh: "wrought_iron",
            input: ["minecraft:sand"],
            output: [
                { item: ores.tin.item, amount: 1, chance: 0.035 },
                { item: ores.aluminium.item, amount: 1, chance: 0.025 },
                { item: ores.zinc.item, amount: 1, chance: 0.025 }
            ]
        }
    ])
})