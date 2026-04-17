function getRootPrefix() {
    const parts = window.location.pathname.split('/');
    const index = parts.lastIndexOf('megamarket');
    if (index === -1) return './';
    const depth = parts.length - index - 2;
    return '../'.repeat(depth);
}

function createHeader() {
    const root = getRootPrefix();
    const indexLink = `${root}index.html`;
    const cartLink = `${root}pages/cart/cart.html`;
    const contactLink = `${root}pages/contact/contact.html`;
    const aboutLink = `${root}pages/about/about.html`;
    const signupLink = `${root}pages/signup/signup.html`;
    const shopLink = `${root}pages/shop/shop.html`;
    const loginLink = `${root}pages/login/login.html`;

    let user = {
        id: "",
        name: "Tural",
        surname: "Aliyev",
        username: "tural650",
        email: "weewe@gmail.com"

    }
    if (localStorage.getItem('token')) {

        const header = document.createElement('header');
        header.className = "border-bottom border-1 border-gray-200 p-4 text-2xl";
        header.innerHTML = `
        <div class="flex justify-between max-w-7xl mx-auto">
            <div>
                <ul class="flex items-center gap-4 ">
                    <li>
                        <a class="font-bold text-2xl" href="${indexLink}">E-commerce</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${indexLink}">Home</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${contactLink}">Contact</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${aboutLink}">About</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${signupLink}">Sign up</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline bg-red-500 p-2 text-white rounded" href="${shopLink}">Shop</a>
                    </li>
                </ul>
            </div>
            <div>
                <i class="carIcon bi bi-cart"></i>
                <i class="profileIcon bi bi-person"></i>
                <span class="username font-bold">${user.username}</span>
                <button class="logoutBtn text-xl hover:underline bg-red-500 p-2 text-white rounded" href="#">logout</button>
 
            </div>
        </div>
        `
        document.body.prepend(header);
        const logoutBtn = document.querySelector(".logoutBtn");
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem("token");
            window.location.href = indexLink;
        })
        return

    }

    const header = document.createElement('header');
    header.className = "border-bottom border-1 border-gray-200 p-4 text-2xl";
    header.innerHTML = `
        <div class="flex justify-between max-w-7xl mx-auto">
            <div>
                <ul class="flex items-center gap-4 ">
                    <li>
                        <a class="font-bold text-2xl" href="${indexLink}">E-commerce</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${indexLink}">Home</a>
                    </li>
                    <li>
                    <a class="text-xl hover:underline" href="${cartLink}">Cart</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${contactLink}">Contact</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${aboutLink}">About</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline" href="${signupLink}">Sign up</a>
                    </li>
                    <li>
                        <a class="text-xl hover:underline bg-red-500 p-2 text-white rounded" href="${shopLink}">Shop</a>
                    </li>
                </ul>
            </div>
            <div>
             
                <a class="loginBtn text-xl hover:underline bg-red-500 p-2 text-white rounded" href="${loginLink}">login</a>
  
            </div>
        </div>

    `
    document.body.prepend(header);
}


   

createHeader();
