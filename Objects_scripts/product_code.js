'use script';


// productcode.js

function parsepartcode(code) {
    let parts = code.split(':');
    
    // Extracting supplier code, product number, and size
    let supplierCode = parts[0];
    
    // Splitting the second part (productNumber-size) based on the delimiter "-"
    let productNumberSize = parts[1].split('-');
    
    let productNumber = productNumberSize[0];
    let size = productNumberSize[1];
    
    // Creating and returning the JavaScript object
    return {
        "supplier code": supplierCode,
        "productNumber": productNumber,
        "size": size
    };
}

// Example usage:
// const partCode = "ABCD:12345-10";
// const parsedObject = parsepartcode(partCode);
// console.log(parsedObject);

// Exporting the function for use in other modules if needed
module.exports = parsepartcode;

let exampleString = "XYZ:1234-L";
let parts = exampleString.split(":");
let partCode1 = parts[0];
let partCode2 = parts[1].split("-")[0];
let partCode3 = parts[1].split("-")[1];

const product = {
    supplierCode: partCode1, // Extracted "XYZ"
    productNumber: partCode2, // Extracted "1234"
    size: partCode3 // Extracted "L"
};

console.log(product);