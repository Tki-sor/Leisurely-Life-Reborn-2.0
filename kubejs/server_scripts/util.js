
const colorList = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]

// 直接定义为对象
const ores = {
    iron: { item: '', tag: '' },
    gold: { item: '', tag: '' },
    diamond: { item: '', tag: '' },
    copper: { item: '', tag: '' },
    tin: { item: '', tag: '' },
    silver: { item: '', tag: '' },
    lead: { item: '', tag: '' },
    nickel: { item: '', tag: '' },
    lithium: { item: '', tag: '' },
    aluminium: { item: '', tag: '' },
    zinc: { item: 'gtceu:crushed_sphalerite_ore', tag: '#forge:crushed_ores/sphalerite' }
};

// 动态生成 item 和 tag
Object.keys(ores).forEach(oreType => {
    const ore = ores[oreType];
    
    // 只有当 item 为空时才生成
    if (!ore.item) {
        ore.item = `gtceu:crushed_${oreType}_ore`;
    }
    
    // 只有当 tag 为空时才生成
    if (!ore.tag) {
        ore.tag = `#forge:crushed_ores/${oreType}`;
    }
})

const ingots = {
    iron: { item: 'minecraft:iron_ingot', tag: '' },
    gold: { item: 'minecraft:gold_ingot', tag: '' },
    diamond: { item: 'minecraft:diamond', tag: '#forge:gems/diamond' },
    copper: { item: '', tag: '' },
    tin: { item: '', tag: '' },
    silver: { item: '', tag: '' },
    lead: { item: '', tag: '' },
    nickel: { item: '', tag: '' },
    lithium: { item: '', tag: '' },
    aluminium: { item: '', tag: '' },
    zinc: { item: '', tag: '' }
}

Object.keys(ingots).forEach(ingotType => {
    const ingot = ingots[ingotType];
    
    // 只有当 item 为空时才生成
    if (!ingot.item) {
        ingot.item = `gtceu:${ingotType}_ingot`;
    }
    
    // 只有当 tag 为空时才生成
    if (!ingot.tag) {
        ingot.tag = `#forge:ingots/${ingotType}`;
    }
})