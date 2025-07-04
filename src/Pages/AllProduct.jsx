const AllProduct = () => {

  const products = [
    { id: 1, name: "Cabbage", weight: "1kg", price: 70, image: "/img/cabbage.png", category: "Vegetables" },
    { id: 2, name: "Cauliflower", weight: "1kg", price: 70, image: "/img/cauliflower.png", category: "Vegetables" },
    { id: 3, name: "Red Cabbage", weight: "1kg", price: 70, image: "/img/red-cabbage.png", category: "Vegetables" },
    { id: 4, name: "Green Papaya", weight: "1kg", price: 70, image: "/img/green-papaya.png", category: "Vegetables" },
    { id: 5, name: "Red Tomato", weight: "1kg", price: 70, image: "/img/red-tomato.png", category: "Vegetables" },
    { id: 6, name: "Green Tomato", weight: "1kg", price: 70, image: "/img/green-tomato.png", category: "Vegetables" },
    { id: 7, name: "Bean", weight: "1kg", price: 70, image: "/img/bean.png", category: "Vegetables" },
    { id: 8, name: "Radish", weight: "1kg", price: 70, image: "/img/radish.png", category: "Vegetables" },
    { id: 9, name: "Wal Nut", weight: "1kg", price: 70, image: "/img/walnut.png", category: "Fresh Nuts" },
    { id: 10, name: "Cashew Nut", weight: "1kg", price: 70, image: "/img/cashew.png", category: "Fresh Nuts" },
    { id: 11, name: "Almond", weight: "1kg", price: 70, image: "/img/almond.png", category: "Fresh Nuts" },
    { id: 12, name: "China Peanuts", weight: "1kg", price: 70, image: "/img/peanut.png", category: "Fresh Nuts" },
    { id: 13, name: "Stew Beef Meat", weight: "1kg", price: 70, image: "/img/stew-beef.png", category: "Meat" },
    { id: 14, name: "Chicken Meat", weight: "1kg", price: 70, image: "/img/chicken-meat.png", category: "Meat" },
    { id: 15, name: "Fresh Fish", weight: "1kg", price: 70, image: "/img/fresh-fish.png", category: "Fresh Fish" },
    { id: 16, name: "Mix Fish", weight: "1kg", price: 70, image: "/img/mix-fish.png", category: "Fresh Fish" }
  ];

  return (
    <div className='container-fluid allProductSec'>
      <div className='px-5'>
        <h2 className='categoryHeading mb-4'>ALL PRODUCTS</h2>
        <div className='row'>
          {products.map((product) => (
            <div className='col-6 col-md-4 col-lg-3 mb-4' key={product.id}>
              <div className='product-card'>
                <img src={product.image} alt={product.name} className='product-img' />
                <h5 className='product-name'>{product.name}</h5>
                <p className='product-weight'>{product.weight}</p>
                <p className='product-price'>₹{product.price.toFixed(2)}</p>
                <button className='add-to-cart'>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProduct
