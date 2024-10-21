
let $RealisticTorchBlock = Java.loadClass('com.chaosthedude.realistictorches.blocks.RealisticTorchBlock')

BlockEvents.rightClicked(event => {
    let burntime = event.getBlock().getBlockState().getValue($RealisticTorchBlock.getBurnTime())
    event.player.displayClientMessage(`剩余燃烧时间 ${burntime} 分钟`, true)

})

PlayerEvents.loggedIn(event => {
    event.player.sendSystemMessage(`欢迎游玩遗忘之海整合包，当前为§c开发版§f，不代表最终品质。`)
})

let $FluidTags = Java.loadClass("net.minecraft.tags.FluidTags")
let $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
BlockEvents.rightClicked("exdeorum:stone_barrel", event => {
    let block = event.getBlock()
    let pos = block.getPos()
    let blockEntity = block.getEntity()
    let tank = blockEntity.getTank()
    let level = event.getLevel()

    let hasFullLava = (tank.getFluid().getFluid().is($FluidTags.LAVA) && tank.getFluidAmount() == 1000)


    event.player.sendSystemMessage(hasFullLava)

    event.level.runCommandSilent(`summon minecraft:blaze ${pos.x} ${pos.y+1} ${pos.z}`)
})