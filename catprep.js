// class Mkulima{
//     constructor()
//     this.farm
// }
class Mkulima {
    constructor (farms,vendors,products,orders)
    {
    this.farms = farms;
    this.vendors = vendors;
    this.products = products;
    this.orders = orders;
    }
    
    addFarm (farmId,name,farmer,phone,address){
    // return `${this.farms} ${this.vendors} ${this.products} ${this.orders}`;
    
    this.farms.unshift(farmId,name,farmer,phone,address)
    return this.farms
    }
    removeFarm (farmId) {
    this.farms.shift(farmId)
    return this.farms
    }
    
    updateFarm (farmId, name, farmer, phone, address) {
    //  this.farms.update(farmId,name,farmer,phone,address)
    // return `${this.farms} ${this.vendors} ${this.products} ${this.orders}`;
    var farm={
        farmId:farmId,
        name:name,
        farmer:farmer,
        phone:phone,
        address:address
    }
 return farm.updateFarm

}}
    var mkulima=new Mkulima([],[],[],[])
    console.log(mkulima.addFarm(123,"Solio","Eunice","073457829","Nairobi"))
    console.log(mkulima.removeFarm(123))
    console.log(farm.updateFarm(345,"Soilo","Nancy","077952425","Uganda"))
    
//     getFarm (farmId) {
//     var root = {
//     farmId: 309,
//     name: "Naruto",
//     farmer: "Jeruto",
//     phone: "0710987654",
//     address: "4321"
// };
// return root;
// }

// addVendor () {
// return `${this.vendors}${this.farms}${this.products}`;
// vendor.shift(vendorId,name,phone)
// }

// removeVendor () {
// return this.vendors;
// vendor.unshift(vendorId)
// }

// updateVendor (vendorId, name, phone){
// return `${this.vendors }${ this.farms}  ${this.products}`;
// }

// getVendor (vendorId) {
// var root = {
// vendorId: 254,
// storeName: "Nato",
// phone: "075432289"
// };
// return root;
// }
// addProduct(){
// return `${this.farm}${this.vendors}${this.products}`;
// product.shift(productId, name, price)
// }

