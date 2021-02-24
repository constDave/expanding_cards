const panels  = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removePanelClass()
        panel.classList.add('active')
    })
})

function removePanelClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}