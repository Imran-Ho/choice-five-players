// common Function for all.these are all unique functions for calling 

function filterElement (uniqueId){
    const uniqueElement = document.getElementById(uniqueId);
    const uniqueElementString = uniqueElement.value;
    const uniqueElementFigure = parseInt(uniqueElementString);
    uniqueElement.value = '';
    return uniqueElementFigure;
}
function filterElementInnerText (uniqueIdText){
    const uniqueElementText = document.getElementById(uniqueIdText);
    const uniqueElementTextString = uniqueElementText.innerText;
    const uniqueElementTextFigure = parseInt(uniqueElementTextString);
    return uniqueElementTextFigure;
}