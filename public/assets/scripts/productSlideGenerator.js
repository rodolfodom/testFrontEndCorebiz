import getProducts from "./getProducts.js";

const d = document;

export default async function geberateSlide() {
    const template = d.getElementById("product-card").content,
    wrapper = d.querySelector("#products-container .swiper-wrapper"),
    fragment = d.createDocumentFragment(),
    products = await getProducts();
    products.forEach(product => {
        const formatedPrice = product.price.toString().slice(0, -2) + "." + product.price.toString().slice(-2);
        template.querySelector(".product-img img").src = product.imageUrl;
        template.querySelector(".product-img img").alt = product.productName;
        template.getElementById("productName").textContent = product.productName;
        template.querySelector(".score").innerHTML = '<i class="fas fa-star"></i>'.repeat(product.stars) + '<i class="far fa-star"></i>'.repeat(5 - product.stars);
        if(product.listPrice) template.querySelector(".last-price").textContent = `de $${product.listPrice.toString().slice(0, -2) + "." + product.listPrice.toString().slice(-2)}`;
        template.querySelector(".actual-price").textContent = `por $${formatedPrice}`;
        template.querySelector(".installments").textContent = (product.installments.length > 0)?`ou em ${product.installments[0].quantity}x de R$ ${product.installments[0].value}` : "";
        template.querySelector("button").dataset.productId = product.productId;
        const clone = d.importNode(template, true);
        fragment.appendChild(clone);
    });

    wrapper.appendChild(fragment);
    
}