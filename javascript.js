// javascript.js

const container = document.getElementById("container")
const resetButton = document.getElementById("resetButton")
let gridSize = 16

function createGrid(size) {
    container.innerHTML = ''


    const itemSize = 960 / size

    for(let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.className = 'grid-item'
        div.style.width = `${itemSize}px`
        div.style.height = `${itemSize}px`

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red'; // Change to your desired hover color
        });

        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = 'blue'; // Reset to the original color
        });

        container.appendChild(div)
    }
}

createGrid(gridSize)


resetButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter the number of squares per side (max 100): '), 10)

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100')
        return
    }

    gridSize = newSize
    createGrid(gridSize)
})