
// getting the values from the input fields

function getColorsSplit () {

    let colorsSplit = [];

    $("#inputForm input").each(function() {
        let symbols = $(this).val();
        symbols = (symbols) ? parseInt(symbols) : 0;
        colorsSplit[$(this).attr("name")] = symbols;
    })

    return colorsSplit;
};

// debugging
console.log(getColorsSplit()) 


function calculateMana() {
    
    let manaSplit = getColorsSplit();
    let totalSymbolsSum = 0;
    let result = {};
    let totalLands = manaSplit.lands;

    // getting the sum of symbols colors total
    delete manaSplit.lands;
    for (let key in manaSplit) {
        totalSymbolsSum += manaSplit[key];
    }

    for (let key in manaSplit) {
        let color = key;
        let symbolsByColor = manaSplit[key] 
        
        // debugging
        console.log(color)
        console.log(manaSplit[key])
        
        // calculation pattern:
        let manaColorResult = symbolsByColor / totalSymbolsSum * totalLands;
        result[color] = (manaColorResult > 0) ? manaColorResult.toFixed(1) : 0;
    }

    // debuging
    console.log("total lands -- " + totalLands)
    console.log(manaSplit)
    console.log("mana symbols sum -- "  + totalSymbolsSum)
    console.log(result)
    
    for (let key in result) {
        $("table").find("#result-" + key).html(result[key])
    }
}

