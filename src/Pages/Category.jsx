const Category = () => {

    const categories = [
  { name: "VEGETABLES", image: "./img/vegies.png" },
  { name: "FRUITS", image: "./img/fruit.png" },
  { name: "DRINKS", image: "./img/juice.png" },
  { name: "FRESH NUTS", image: "./img/dry.png" },
  { name: "FRESH FISH", image: "./img/fish.png" },
  { name: "MEAT", image: "./img/meat.png" }
];

  return (
    <div className='container-fluid categoryDiv'>
    <div className='px-5'>
    <h2 className='categoryHeading'>CATEGORY</h2>
    <div className='category-items-wrapper'>
        {categories.map((item, index) => (
          <div key={index} className='category-item'>
           <div className='categoryIngContainer'> <img src={item.image} alt={item.name} /></div>
            <p className={item.name === "VEGETABLES" ? 'active-category' : ''}>{item.name}</p>
          </div>
        ))}
      </div>
       <div className="dot-indicators">
        <span className='dot active-dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>
    </div>
    </div>
  )
}

export default Category