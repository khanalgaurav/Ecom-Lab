// alert("ggs")
const input = document.querySelector('#input-box');
const search = document.querySelector('#search');
const cross = document.querySelector('#cross');
const login = document.querySelector('#login');
const signUp = document.querySelector('#signup');
const setPassword = document.querySelector('#set-password');
const confirmPassword = document.querySelector('#confirm-password');
const checkBox = document.querySelector('#checkbox');
const cartItems = document.querySelector('#cart-items')
function signupValidation(){
    if(setPassword.value != confirmPassword.value){
        alert("passwords dont match")
    }
    if(checkBox.checked == false){
        alert("please accept the terms and conditions")
    }
}

function validation(){
    signupValidation();
    validateForm();
}

function showSignup(){
    signUp.classList.remove('hidden');
    login.classList.add('hidden');
}
function loginform(){
    login.classList.remove('hidden');
    signUp.classList.add('hidden');
}
function closeLogin(){
    login.classList.add('hidden');
    signUp.classList.add('hidden');
}



//product data
const productData = [
    {
        id: 0,
        link : '/product1.html',
        name : 'Item 1',
        oldPrice : '60',
        price : '20',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zIZBCt7LYu6cyVZCGDMiIH8WHy7BZ1tuwOQUtQSIoQ&s"
    },
    {
        id: 1,
        link : '/product2.html',
        name : 'Item 2',
        oldPrice : '310',
        price : '200',
        image: "https://i.pinimg.com/736x/43/e5/22/43e5224dd7de64956a60d436cde5c33b.jpg"
    },
    {
        id: 2,
        link : '/product3.html',
        name : 'Item 3',
        oldPrice : '80',
        price : '30',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgmoF0agrcAx-rWRZDA3A45_O27lwBgqTkRgjgsH2Ng&s"
    },
    {
        id: 3,
        link : '/product4.html',
        name : 'Item 4',
        oldPrice : '810',
        price : '410',
        image: "https://ecommercephotographyindia.com/info/wp-content/uploads/2021/05/ecommerce-product-photoshoot.jpg"
    },
    {
        id: 4,
        link : '/product5.html',
        name : 'Item 5',
        price : '250',
        oldPrice : '450',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjLwHzkr5VaMJV9mjV4XTJeBIS6MLZW-u-hCblmemHQ&s"
    }
]


//    cart  
const cartNo = document.querySelector('#cart-no')
let count=0;
function add1ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[0].image}" alt="">
    </div>
    <p>${productData[0].name}</p>
</div>`
}
function add2ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[1].image}" alt="">
    </div>
    <p>${productData[1].name}</p>
</div>`
}
function add3ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[2].image}" alt="">
    </div>
    <p>${productData[2].name}</p>
</div>`
}
function add4ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[3].image}" alt="">
    </div>
    <p>${productData[3].name}</p>
</div>`
}
function add5ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[4].image}" alt="">
    </div>
    <p>${productData[4].name}</p>
</div>`
}












//search section
search.addEventListener('click', ()=>{

    // input.classList.remove('translate-x-12')
    
    input.value = ''
    input.classList.remove('w-9')
    input.classList.add('w-[300px]')
    cross.classList.remove('-translate-x-12')
    if(input.classList.contains('active')){
        // future use
    }
    else{
        //future use
    }
    input.classList.add('active')
    
})
cross.addEventListener('click', ()=>{
    input.classList.remove('active')
    input.value = ''
    input.classList.add('w-9')
    input.classList.remove('w-[300px]')
    cross.classList.add('-translate-x-12')
})
