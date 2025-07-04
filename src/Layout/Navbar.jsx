import { FaRegBell, FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    return (
        <div className='container-fluid px-3 shadow-lg py-0 ' >
            <div className='d-flex align-items-center justify-content-between'>
                <div className='logo'>
                    <img
                        style={{ width: "170px", marginTop: "10px" }}
                        src="/img/logo.png"

                        alt="Logo"
                    />
                </div>
                <ul className='d-none ulList list-unstyled gap-5 m-0 p-0  d-md-flex '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
                <div className='d-none d-md-flex  gap-3  '>
                    <span className='rounded-circle' style={{ backgroundColor: "#679A7F54", width: "50px", height: "50px" }}><FaRegBell size={20} className='mt-3 iconItem' /></span>
                    <span className='rounded-circle ' style={{ backgroundColor: "#679A7F54", width: "50px", height: "50px" }}>
                        <FaUser size={20} className='mt-3 iconItem' />
                    </span>
                </div>
                <div className='d-block d-md-none'>
                    <RxHamburgerMenu   size={30}/>
                </div>

            </div>
        </div>
    )
}

export default Navbar