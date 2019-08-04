
let shapeList = [];
let randomShapes = [Rectangle]
let counter = 1

window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d')
    
    resizeCanvas(ctx)
    
    
    
    window.addEventListener('resize', function () {
        resizeCanvas(ctx)
    })
    
    canvas.addEventListener('click', function (event) {
        let foundShape = false;
        
        for (let shape of shapeList) {
            if (shape.isWithin(event.pageX, event.pageY) && !foundShape) {
                
                shape.isSelected = true
                foundShape = true;
            }
            else {
                shape.isSelected = false
            }
        }
        draw(ctx)
        
    })
    
    
    resizeCanvas(ctx)
    
    function renderLoop () {
        update(shapeList)
        draw(ctx)
        requestAnimationFrame(renderLoop)
    }

    renderLoop()

}
function addRandomShape(random) {
    let randomNum = Math.floor(Math.random() * counter);
    random = randomShapes[randomNum]
    randomShapes.splice(randomNum, 1)
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d')
    shapeList.push(random.randomRectangle(canvas.width, canvas.height, ctx))
    draw(ctx)
    counter--;

}
function deleteShape() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d')
    shapeList = shapeList.filter(f=> !f.isSelected)
    draw(ctx)

}
function rotateShape() {
   for(let shape of shapeList) {
       if (shape.isSelected) {
           shape.isRotating = true
       }
   }

}
function resizeCanvas(ctx) {
    ctx.canvas.width = window.innerWidth * .95
    ctx.canvas.height = window.innerHeight * .8
    draw(ctx)
}

function draw(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let shape of shapeList) {
        shape.draw(ctx)
    }
}

function update() {
    for (const shape of shapeList) {
        shape.update()
    }
}





