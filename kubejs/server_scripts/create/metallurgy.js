
ServerEvents.recipes(event => {
    let { create } = event.recipes

    // 熔铸盖/盆
    event.remove({ output: 'createmetallurgy:foundry_lid' })
    event.remove({ output: 'createmetallurgy:glassed_foundry_lid' })
    event.remove({ output: 'createmetallurgy:foundry_basin' })
    event.shaped('createmetallurgy:foundry_lid', [
        "A A",
        "A A"
    ], {
        A: '#forge:plates/andesite_alloy'
    })
    event.shaped('createmetallurgy:glassed_foundry_lid', [
        "ABA",
        "ABA"
    ], {
        A: '#forge:plates/andesite_alloy',
        B: '#forge:glass'
    })
    event.shaped('createmetallurgy:foundry_basin', [
        "A A",
        "A A",
        "AAA"
    ], {
        A: '#forge:plates/andesite_alloy'
    })

    // 铸造台
    event.replaceInput({ output: 'createmetallurgy:casting_table' }, '#forge:ingots/andesite_alloy', '#forge:plates/andesite_alloy')
})

ServerEvents.recipes(event => {
    let meltings = [
        ['minecraft:iron', 12],
        ['gtceu:brass', 8],
        ['minecraft:gold', 8],
        ['minecraft:copper', 10],
        ['gtceu:bronze', 8],
        ['gtceu:tin', 6],
        ['gtceu:zinc', 6]
    ]
    let { createmetallurgy } = event.recipes
    event.remove({ type: "createmetallurgy:melting" })
    event.remove({ type: "createmetallurgy:casting_in_table" })

    // 铸模(锭)
    event.remove({ output: '#forge:graphite_molds' })
    createmetallurgy.casting_in_table('createmetallurgy:graphite_ingot_mold', [Fluid.of("gtceu:brass", 288), Ingredient.of('forge:ingots').asStack()], 12 * 20)
    // (粒)
    createmetallurgy.casting_in_table('createmetallurgy:graphite_nugget_mold', [Fluid.of("gtceu:brass", 288), Ingredient.of('forge:nuggets').asStack()], 12 * 20)

    meltings.forEach(melting => {
        let ingot = ""
        let dust = ""
        let nugget = ""
        let time = melting[1]
        let fluid = melting[0]

        let rest = melting[0].slice(melting[0].indexOf(':') + 1)
        let crushed_ore = `gtceu:crushed_${rest}_ore`
        let purified_ore = `gtceu:purified_${rest}_ore`
        let refined_ore = `gtceu:refined_${rest}_ore`
        let pure_dust = `gtceu:pure_${rest}_dust`
        let impure_dust = `gtceu:impure_${rest}_dust`
        if (melting[0].startsWith("gtceu")) {
            ingot = melting[0] + "_ingot"
            dust = melting[0] + "_dust"
            nugget = melting[0] + "_nugget"
        } else {
            // let prefix = melting[0].slice(melting[0].indexOf(':'))
            ingot = melting[0] + "_ingot"
            
            dust = `gtceu:${rest}_dust`
            fluid = `gtceu:${rest}`

            nugget = melting[0] + "_nugget"
            if (Ingredient.of(`#forge:nuggets/${rest}`).test(nugget)) {
                nugget = melting[0] + "_nugget"
            } else {
                nugget = `gtceu:${rest}_nugget`
            }
        }
        // ingot
        createmetallurgy.melting(Fluid.of(fluid, 144), ingot, time * 20, 'melt')
        createmetallurgy.melting(Fluid.of(fluid, 144), dust, time * 20, 'melt')
        createmetallurgy.casting_in_table(ingot, [Fluid.of(fluid, 144), 'createmetallurgy:graphite_ingot_mold'], time * 10)

        // other ore/dust
        createmetallurgy.melting(Fluid.of(fluid, 144), crushed_ore, time * 30, 'melt')
        createmetallurgy.melting(Fluid.of(fluid, 144), purified_ore, time * 30, 'melt')
        createmetallurgy.melting(Fluid.of(fluid, 144), refined_ore, time * 30, 'melt')
        createmetallurgy.melting(Fluid.of(fluid, 144), pure_dust, time * 20, 'melt')
        createmetallurgy.melting(Fluid.of(fluid, 144), impure_dust, time * 20, 'melt')

        // nugget
        createmetallurgy.melting(Fluid.of(fluid, 16), nugget, time * 4, 'melt')
        createmetallurgy.casting_in_table(nugget, [Fluid.of(fluid, 16), 'createmetallurgy:graphite_nugget_mold'], time * 2)
    })
})