function isolateDuplicates(text) {
    let newText = []
    let count = 0
    for (let i = 0; i < text.length; i++) {
        newText.push(text[i])
        if (text[i] == text[i + 1]) {
            count++
        }
        else {
            count = 0
        }
        if (count === 2) {
            newText.push("[")
        }
    }
    return newText
}

module.exports = isolateDuplicates;
