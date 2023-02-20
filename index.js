

function getElementValue(id) {

    const element = document.getElementById(id);
    const elementValue = element.innerText
    return elementValue;
}

function getInputValue(id) {

    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

function displayResult(serialNo, productName, productPrice, productQuantity, priceTotal) {

    // show
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
        <td>${serialNo}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
    
    `
    container.appendChild(tr);

}

let serialNo = 0;

// first card
document.getElementById("first-card").addEventListener('click', function () {

    const productName = getElementValue('first-name');
    const productPrice = getElementValue('first-price');
    const productQuantity = getElementValue('first-quantity');

    // calculate total
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    serialNo++;
    displayResult(serialNo, productName, productPrice, productQuantity, priceTotal)

})
// second card
document.getElementById("second-card").addEventListener('click', function () {

    const productName = getElementValue('second-name');
    const productPrice = getElementValue('second-price');
    const productQuantity = getElementValue('second-quantity');

    // calculate total
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    serialNo++;
    displayResult(serialNo, productName, productPrice, productQuantity, priceTotal)

})

// using event object from browser
// third-card
document.getElementById("third-card").addEventListener('click', function (e) {

    console.log(e.target.parentNode.parentNode.children[3].children[0].innerText)
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    // // calculate total
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    serialNo++;
    displayResult(serialNo, productName, productPrice, productQuantity, priceTotal)

})

// fourth card
document.getElementById("fourth-card").addEventListener('click', function () {

    const productName = getElementValue('fourth-name');
    const productPrice = getElementValue('fourth-price');
    const productQuantity = getElementValue('fourth-quantity');

    // calculate total
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    serialNo++;
    displayResult(serialNo, productName, productPrice, productQuantity, priceTotal)

})

// last card
document.getElementById("last-card").addEventListener('click', function () {

    const productName = document.getElementById('last-name').innerText;
    const productPrice = document.getElementById('last-price').value;
    const productQuantity = document.getElementById('last-quantity').value;

    if (productPrice === '' || productQuantity === '' || (productPrice === '' && productQuantity === '')) {
        alert("please enter a value")
    }
    else if ((productPrice >= 'a' && productPrice <= 'z') || (productPrice >= 'A' && productPrice <= 'Z') || (productQuantity >= 'a' && productQuantity <= 'z') || (productQuantity >= "A" && productQuantity <= "Z")) {
        alert("Please enter a number values")
    }
    else if( productPrice <= 0 || productQuantity <= 0 || ( productPrice <= 0 && productQuantity <= 0)){
        alert("Please enter a positive number")
    }
    else {

        // calculate total
        const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

        serialNo++;
        displayResult(serialNo, productName, productPrice, productQuantity, priceTotal);

        document.getElementById('last-price').value = '';
        document.getElementById('last-quantity').value = '';
    }



})