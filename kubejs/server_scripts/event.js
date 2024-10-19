
let $RealisticTorchBlock = Java.loadClass('com.chaosthedude.realistictorches.blocks.RealisticTorchBlock')

BlockEvents.rightClicked(event => {
    let burntime = event.getBlock().getBlockState().getValue($RealisticTorchBlock.getBurnTime())
    event.player.displayClientMessage(`剩余燃烧时间 ${burntime} 分钟`, true)
})

PlayerEvents.loggedIn(event => {
    event.player.sendSystemMessage(`欢迎游玩遗忘之海整合包，当前为§c开发版§f，不代表最终品质。`)
})