//JSON - JavaScript Object Notation
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
