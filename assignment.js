// // 1st problem solution start
function seerToMon(seer){
    // // we know, 40 seer=1 mon or 1 seer =0.025 mon
    var oneseer=0.025;
    // calculating seer to mon
    var converttomon = oneseer * seer;
    return converttomon;
    // error message
    if( typeof total == 'string'){
    return 'Input cannot be negative number or a string';
    }
    }
    var calculatemon=seerToMon(200);
    console.log(calculatemon);
    // // 1st problem solution end
    // 2nd problem solution start
    function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    // single product price
    var pershirtprice = 100;
    var perpantprice = 200;
    var pershoeprice = 500;
    // product price with quantity
    var shirtpricequantity= pershirtprice * shirtQuantity;
    var pantpricequantity= perpantprice * pantQuantity;
    var shoepricequantity= pershoeprice * shoeQuantity;
    // total sales of all products
    var total = shirtpricequantity + pantpricequantity + shoepricequantity;
    return total;
    // error message
    if( typeof total == 'string'){
    return 'Input cannot be negative number or a string';
    }
    }
    var totalprice=totalSales(2,2,2);
    console.log(totalprice);
    // 2nd problem solution end
    
    // 3rd problem solution start
    function deliveryCost(productquantity){
    // //needful variables
    const cost1 = 100 * 100;
    const cost2 = cost1 + (productquantity - 100) * 80;
    const cost3 = cost1 + 100 * 80 + (productquantity - 200) * 50;
    //Conditions
    if(productquantity < 0 || typeof productquantity == 'string'){
    return 'Input cannot be negative number or a string';
    }
    else if(productquantity <= 100){
    return productquantity * 100;
    }
    else if(productquantity > 100 && productquantity <= 200){
    return cost2;
    }
    else{
    return cost3;
    }
    }
    var number=deliveryCost(101);
    console.log(number);
    // 3rd problem solution end
    // 4th problem solution start
    function perfectFriend(name) {
    // error message
    if (typeof name !='object') {
    return 'Give an object';
    }
    for (let i = 0; i < name.length; i++) {
    if (name[i].length == 5) {
    return name[i];
    }
    }
    }
    const myfriendname = ['mahin', 'maruf', 'anik', 'jui', 'mahi'];
    const closefirend = perfectFriend(myfriendname);
    console.log(closefirend);
    // 4th problem solution end