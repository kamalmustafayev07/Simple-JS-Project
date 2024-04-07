let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
];
class Account {
    constructor(login) {
        this.login = login;
    }
    displayProduct(product, storeName) {
        console.log(`name: ${product['product_name']}, description: ${product['product_description']}, price: ${product['product_price']}, store: ${storeName}`);
    }
    showAllGoods() {
        shopGoods.forEach(store => store['products'].forEach(product => this.displayProduct(product, store.store_name)));
    }
    searchGood(name){
        let notFound=true;
        shopGoods.forEach((item)=>{
            let findedProduct=item['products'].find((item)=>item['product_name']===name);
            if(typeof findedProduct!=='undefined'){
                this.displayProduct(findedProduct,item['store_name']);
                notFound=false;
            }
        });
        if(notFound) console.log('There is no such a product');
    }
    sortBy(toolToSort, direction) {
        let allGoods = [];
        shopGoods.forEach((item) => {
            let shopName=item.store_name;
            item.products.forEach((item) => {
                allGoods.push({...item,'store_name': shopName});
            })
        });
        if (toolToSort === 'price' || toolToSort === 'name') {
            switch (direction) {
                case 'increase':
                    toolToSort === 'price' ? allGoods.sort((a, b) => a[`product_${toolToSort}`] - b[`product_${toolToSort}`]) : allGoods.sort((a, b) => a[`product_${toolToSort}`].localeCompare(b[`product_${toolToSort}`]));
                    allGoods.forEach((item) => { console.log(`name: ${item['product_name']}, description: ${item['product_description']}, price: ${item['product_price']}, shop: ${item['store_name']}`)});
                    break;
                case 'decrease':
                    toolToSort === 'price' ? allGoods.sort((a, b) => b[`product_${toolToSort}`] - a[`product_${toolToSort}`]) : allGoods.sort((a, b) => b[`product_${toolToSort}`].localeCompare(a[`product_${toolToSort}`]));
                    allGoods.forEach((item) => { console.log(`name: ${item['product_name']}, description: ${item['product_description']}, price: ${item['product_price']}, shop: ${item['store_name']}`)});
                    break;
                default:
                    alert('You wrote wrong direction');
            }
        } else {
            alert('You wrote wrong property')
        }
    }
}
class User extends Account {
    constructor(login) {
        super(login);
        this.cart = [];
    }
    addToCart(productName) {
        shopGoods.forEach((item) => {
            let findedProduct = item.products.find((item) => item.product_name === productName);
            if (typeof findedProduct !== 'undefined') {
                this.cart.push({...findedProduct,'shopName': item.store_name});
            }
        });
    }
    showCart() {
        if (this.cart.length != 0) {
            let cardPrice = 0;
            this.cart.forEach((item) => {
                console.log(`name: ${item['product_name']},description: ${item['product_description']},price: ${item['product_price']},store: ${item['shopName']}`);
                cardPrice += item.product_price;
            });
            console.log(`The cost of your products: ${cardPrice}`);
        }
        else console.log('Your cart is empty')
    }

}
class Admin extends Account {
    removeGood(productName) {
        shopGoods.forEach(store => store.products = store.products.filter(product => product.product_name !== productName));
    }
    redactPrice(productName, newPrice) {
        shopGoods.forEach((item) => {
            item.products.forEach((item) => {
                if (item.product_name === productName)
                    item.product_price = newPrice;
            })
        });
    }
    addGood(store, productInfo) {
        const [name, description, price] = productInfo.split('/');
        const foundStore = shopGoods.findIndex(s => s.store_name === store);
        foundStore ?  shopGoods[foundStore].products.push({ 'product_name': name, 'product_description': description, 'product_price': +price }) : console.log('You wrote wrong store name');
    }
}
class AccountList {
    constructor() {
        this.admin = new Admin('admin');
        this.user = new User('user');
        this.logined;
    }
    loginAccount(login) {
        if (this.admin.login === login) {
            this.logined = this.admin;
        }
        else if (this.user.login === login) {
            this.logined = this.user;
        }
        else {
            return true;
        }
    }
}
class Application {
    constructor() {
        this.accountList = new AccountList();
    }
    init() {
        let notLogIn = true;
        while (notLogIn) {
            let log = prompt('Please,write your login.If you want to login as user write "user".If you want to login as admin write "admin"');
            if(log===null) return;
            if (this.accountList.loginAccount(log)) {
                alert('Wrong Login');
            }else notLogIn = false;   
        }
        while (true) {
            let operation;
            if (this.accountList.logined instanceof Admin) {
                operation = prompt(`Welcome to our Shop! Please write as an Admin an opeation that you want :
                SHOW PRODUCTS
                SEARCH PRODUCT
                SORT PRODUCTS
                REDACT PRICE
                ADD PRODUCT
                REMOVE PRODUCT
                `);
            }
            else {
                operation = prompt(`Welcome to our Shop! Please write an opeation that you want :
                SHOW PRODUCTS
                SEARCH PRODUCT
                SORT PRODUCTS
                ADD TO CART
                SHOW CART
                `);
            }
            if (operation === null) {
                return;
            }
            switch (operation) {
                case 'SHOW PRODUCTS':
                    this.accountList.logined.showAllGoods();
                    break;
                case 'SEARCH PRODUCT':
                    let searchedProduct = prompt('Write down the name of product that you want to find : ');
                    this.accountList.logined.searchGood(searchedProduct);
                    break;
                case 'SORT PRODUCTS':
                    let sort = prompt(`Write the property and direction seperated by space that you want products to be sorted :
                
                properties: NAME or PRICE 
                direction: INCREASE or DECREASE
                
                For example (NAME INCREASE)`).split(' ');
                    this.accountList.logined.sortBy(sort[0].toLowerCase(), sort[1].toLowerCase());
                    break;
                case 'REDACT PRICE':
                    let price = prompt(`Write the product name and new price of product seperated by comma that you want:
                
                For example (Kişi palto,300)`).split(',');
                    this.accountList.logined.redactPrice(price[0], +price[1]);
                    break;
                case 'ADD PRODUCT':
                    let shop = prompt(`Write the shop name that you want product to be added at:`);
                    let product = prompt(`Write the product info (name,description,price) seperated by '/' : 
                
                For example (Kişi palto/Süət dəri, qara rəngdə/300)`)
                    this.accountList.logined.addGood(shop, product);
                    break;
                case 'REMOVE PRODUCT':
                    let removedProduct = prompt('Write the name of product that you want to be deleted ');
                    this.accountList.logined.removeGood(removedProduct);
                    break;
                case 'ADD TO CART':
                    let productCart = prompt('Write the name of product that you want to add to cart ');
                    this.accountList.logined.addToCart(productCart);
                    break;
                case 'SHOW CART':
                    this.accountList.logined.showCart();
                    break;
                default:
                    alert('You wrote wrong operation.Please try again!');
            }
        }
    }
}
const app = new Application();
app.init();