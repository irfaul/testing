function cariData(arrData, kataKunciPencarian) {
    return arrData.filter(function(arrayElement){
        return arrayElement.url.match(kataKunciPencarian)
    })
}

module.exports = cariData