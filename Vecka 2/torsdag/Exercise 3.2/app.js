const customers = [
    { name: "Mia", VIP: true, priceSum: 1200},
    { name: "Sam", VIP: false, priceSum: 450},
    { name: "Robin", VIP: true, priceSum: 800}
];

const getVIPbonus = (customerArr) => {
    const result = [];

    for (const customer of customerArr){
        if (customer.VIP === true) {
            newSum = customer.priceSum * 0.9

            const VIPcustomer = { name: customer.name, priceSum: newSum}

            result.push(VIPcustomer)
        }
    }
    return result
}

const VIPbonus = getVIPbonus(customers)

console.log("VIP-kunder:", VIPbonus)