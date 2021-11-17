function cleanUpIndex() {
    let eleList = document.querySelectorAll('.contact')
    
    for (let i = 0; i < eleList.length; i++) {
        eleList[i].remove()
    }
}

function renderIndex(contactArray) {

}