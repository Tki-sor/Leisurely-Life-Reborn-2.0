
ServerEvents.recipes(event => {
    event.remove({ id: "thermal:bronze_dust_4" })
    // event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:nuggets' })
    event.remove({ type: 'smelting', output: '#forge:nuggets'})
})

ServerEvents.tags("item", event => {
    event.remove('exdeorum:hammers', "exdeorum:wooden_hammer")
    event.remove('forge:ingots', [
        'minecraft:honeycomb',
        'minecraft:clay_ball'
    ])
})