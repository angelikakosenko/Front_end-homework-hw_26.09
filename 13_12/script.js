const addForm = document.querySelector('.add-form')
const productName = document.querySelector('.add-name')
const productsWrapper = document.querySelector(".products-wrapper")

const addProduct = (e) => {
    e.preventDefault()
    const currProduct = productName.value
    const id = new Date().getTime().toString()
    console.log(id)


    if (currProduct) {
        const element = document.createElement("div")
        element.setAttribute("id", id)
        element.classList.add("product")
        element.innerHTML = `
            <h5 class="product-name">${currProduct}</h5>
            <div class="product-actions">
                <button class="delete-btn">Удалить</button>
                <button class="edit-btn">Редактировать</button>
            </div>
        `

        const deleteBtn = element.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", deleteProduct)

        productsWrapper.appendChild(element)


    }
}
const deleteProduct = () => {}



addForm.addEventListener("submit", addProduct)



{/* <div class="product">
<h5 class="product-name">Название продукта</h5>
<div class="product-actions">
    <button class="delete-btn">Удалить</button>
    <button class="edit-btn">Редактировать</button>
</div>
</div>
<div class="product">
<h5 class="product-name">Название продукта</h5>
<div class="product-actions">
    <button class="delete-btn">Удалить</button>
    <button class="edit-btn">Редактировать</button>
</div>
</div> */}
