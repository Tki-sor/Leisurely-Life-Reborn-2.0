// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry("item", event => {
    let addMesh = (mesh) => {
        event.create(`createsifter:${mesh}_mesh`, "createsifter:mesh")
            .parentModel("createsifter:block/meshes/mesh")
            .texture("mesh", `createsifter:item/${mesh}_mesh`)
    }
    let meshList = [
        "wrought_iron"
    ]

    meshList.forEach(mesh => {
        addMesh(mesh)
    })

    // event.create("advanced_mesh","createsifter:advanced_mesh")

    event.create("llr:tki")
})