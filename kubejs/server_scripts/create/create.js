

ServerEvents.recipes(event => {
    //安山合金
    event.remove({ id: "create:crafting/materials/andesite_alloy_from_block" })
    event.replaceInput({}, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceOutput({}, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceInput({}, "create:andesite_alloy_block", "gtceu:andesite_alloy_block")
    event.replaceOutput({}, "create:andesite_alloy_block", "gtceu:andesite_alloy_block")

    // 机壳
    event.remove({ output: '#create:casing' })
    event.shaped("create:andesite_casing", [['#forge:plates/andesite_alloy'], ['#minecraft:planks']])
    event.shaped("create:brass_casing", [['#forge:plates/brass'], ['#forge:treated_wood']])
    event.shaped("create:railway_casing", [['#forge:plates/steel'], ["create:brass_casing"]])
    event.shaped("create:copper_casing", [['#forge:plates/copper'], ['#forge:treated_wood']])

    // 传动杆
    event.remove({ output: 'create:shaft' })
    event.shaped(Item.of('create:shaft', 2), [
        "A",
        "B"
    ], {
        A: '#forge:tools/saws',
        B: '#forge:ingots/andesite_alloy'
    })
    event.recipes.create.cutting(['2x create:shaft'], ['create:andesite_alloy'])

    // 齿轮
    event.remove({ output: 'create:cogwheel' })
    event.shaped('create:cogwheel', [
        "A",
        "B",
        "C"
    ], {
        A: '#forge:tools/hammers',
        B: 'create:shaft',
        C: '#forge:gears/wood'
    })

    // 传送带
    event.remove({ output: 'create:belt_connector' })
    event.shaped('create:belt_connector', [
        "AAA",
        "AAA"
    ], {
        A: '#forge:foils/rubber'
    })
    event.shaped('create:belt_connector', [
        "ABA"
    ], {
        A: '#forge:plates/rubber',
        B: 'botania:manaweave_cloth'
    })
    event.shaped('create:belt_connector', [
        "AAA",
        "AAA"
    ], {
        A: '#forge:plates/rubber'
    })
    event.recipes.create.mixing('create:belt_connector', '9x gtceu:sticky_resin').heated()

    // 水车
    event.remove({ output: 'create:water_wheel' })
    event.shaped('create:water_wheel', [
        " A ",
        "CBC",
        " F "
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
        C: '#minecraft:planks',
        F: '#forge:rings/iron'
    })

    // 动力辊压机
    event.remove({ output: 'create:mechanical_press' })
    event.shaped('create:mechanical_press', [
        ['', 'create:shaft', ''],
        ['#forge:gears/iron', 'create:andesite_casing', '#forge:springs/iron'],
        ['', '#forge:storage_blocks/iron', '']
    ])

    // 动力搅拌器
    event.remove({ output: 'create:mechanical_mixer' })
    event.shaped('create:mechanical_mixer', [
        ['', 'create:cogwheel', ''],
        ['#forge:gears/iron', 'create:andesite_casing', '#forge:springs/iron'],
        ['', 'create:whisk', '']
    ])

    // 搅拌器
    event.remove({ output: 'create:whisk' })
    event.shaped('create:whisk', [
        " A ",
        "CBC",
        "CCC"
    ], {
        A: '#forge:tools/hammers',
        B: 'create:shaft',
        C: '#forge:plates/iron'
    })

    // 溜槽
    event.remove({ output: 'create:chute' })
    event.shaped('create:chute', [
        "ABA",
        "A A"
    ], {
        A: '#forge:plates/iron',
        B: '#forge:tools/hammers'
    })

    // 工作盆
    event.remove({ id: 'create:crafting/kinetics/basin' })
    event.shaped('create:basin', [
        "A A",
        "ABA",
        "AAA"
    ], {
        A: '#forge:plates/andesite_alloy',
        B: '#forge:tools/hammers'
    })

    // 手摇曲柄
    event.remove({ output: 'create:hand_crank' })
    event.shaped('create:hand_crank', [
        "A  ",
        "BBB",
        "  C"
    ], {
        A: 'create:cogwheel',
        B: '#minecraft:planks',
        C: 'create:shaft'
    })

})