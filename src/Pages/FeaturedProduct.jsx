const FeaturedProduct = () => {
  return (
    <>
<div className='container-fluid featuredProductContainer'>
    <div className='px-5'>
         <h2 className='categoryHeading'>FEATURED PRODUCTS</h2>
         <div className="featuredGrid">
          {/* LEFT Big Card */}
          <div className="featuredCard leftCard">
            <h5>FRESH VEGETABLES</h5>
            <h2>BIG SALE</h2>
            <img src="./img/vegies.png" alt="vegetables" />
          </div>

          {/* RIGHT 2 Cards */}
          <div className="rightCards">
            <div className="featuredCard rightCard topCard">
              <div>
                <h4>FRESH FRUIT <span className='highlight'>SUPER SALE</span></h4>
                <button className='shopBtn'>SHOP NOW</button>
              </div>
              <img src="./img/fruit.png" alt="fruits" />
            </div>

            <div className="featuredCard rightCard bottomCard">
              <div>
                <p className='smallText'>UP TO</p>
                <h2>20% <span className='discountText'>DISCOUNT</span></h2>
                <p className='smallText'>ENJOY YOUR FRESH DRINK</p>
              </div>
              <img src="./img/juice.png" alt="juice" />
            </div>
          </div>
        </div>
    </div>
</div>
    </>
  )
}

export default FeaturedProduct