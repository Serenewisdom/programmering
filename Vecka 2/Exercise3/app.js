const custom = [
    (name: "Mia", isVIP: true, buySum:1200),
    (name: "Sam", isVIP: false, buySum: 450),
    (name: "Robin", isVIP: true, buySum: 800)
];

const getVIPbonus = (custom) => {
    let newSum = buySum;
    const result = [];
    
    if (isVIP === true){
        newSum = buySum*0.9
    }
}