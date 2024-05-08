function log(message) {
    console.log(message)
}

function appendTo(elementID, childNode) {
    document.getElementById(elementID).appendChild(childNode)
}

function toSentenceCase(item) {
    return item.substring(0, 1).toUpperCase() + item.substring(1)
}