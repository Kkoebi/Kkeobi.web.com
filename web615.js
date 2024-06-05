document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', function() {
      this.classList.add('active');
  });
  dropdown.addEventListener('mouseleave', function() {
      this.classList.remove('active');
  });
});

ScrollReveal({
  reset: true, // 正確的屬性是 reset
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .home1-content, .home2-content, .home23-content, .watch-container, .heading', { origin: 'top' });
ScrollReveal().reveal('.home1-img, .home2-img, .home23-img, .d-content, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box, .contact form', { origin: 'left' }); // 修正 .contact fron 為 .contact form
ScrollReveal().reveal('.sliding-menu, .contact form', { origin: 'right' }); // 修正 .contact fron 為 .contact form
ScrollReveal().reveal('.services-container, .contact form', { origin: 'bottom' });

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.s-item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.s-item')
  document.querySelector('.slide').prepend(items[items.length - 1])
})

document.addEventListener("DOMContentLoaded", function() {
  updateTotal();

  // 監聽每個產品數量輸入框的變化
  const quantityInputs = document.querySelectorAll(".product-quantity input");
  quantityInputs.forEach(input => {
      input.addEventListener("change", updateTotal);
  });
});

function updateTotal() {
  let total = 0;

  // 遍歷每個產品，並計算總價格
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
      const priceElement = product.querySelector(".product-details p"); // 更改為正確的選取價格元素
      const priceText = priceElement.textContent;
      const price = parseFloat(priceText.substring(priceText.indexOf("：") + 1)); // 提取價格值

      const quantityInput = product.querySelector(".product-quantity input");
      const quantity = parseInt(quantityInput.value);

      const subtotal = price * quantity;
      const subtotalElement = product.querySelector(".product-subtotal");
      subtotalElement.textContent = "$" + subtotal.toLocaleString();

      total += subtotal;
  });

  // 更新總價格
  const totalElement = document.querySelector(".total h3");
  totalElement.textContent = "$" + total.toLocaleString();
}
