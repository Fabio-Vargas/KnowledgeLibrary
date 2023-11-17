//JSON - JavaScript Object Notation

// Single Object
let objectSingle = {
	name: "Fulano", 
	age: 20, 
	products: {
		0: ["Item1", 10.90],
		1: ["Item2", 100.90],
		2: ["Item3", 1000.90],
		3: ["Item4", 10000.90]
	},
	taxes: 100
}

// Multiple Objects
let objectMultiple = [
	{ "name": "Item1", "color": "Cor1", "type": "Tipo1" },
	{ "name": "Item2", "color": "Cor2", "type": "Tipo2" }
]

let objectChosen = objectMultiple[0]
console.log("O " + objectChosen.name + " é " + objectChosen.color + "!")

let JSON_fileSharing = JSON.stringify(object)
console.log(JSON_fileSharing)


// EXAMPLE
let invoice = {
	name: "Fulano",
    age: 20,
    products: {
    	0: ["Item1", 10.90],
		1: ["Item2", 100.90],
		2: ["Item3", "1000.90"],
		3: ["Item4", "10000.90"]
    },
    taxes: "98.90"
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log("O comprador é ${invoice.name}")
    console.log("A idade é ${invoice.age}")
    console.log("------------")
    
    for(let index in invoice.products){
    	let [productName, productPrice] = invoice.products[index]
        console.log("- ${productName}: R$ ${productPrice}")
    }
}
