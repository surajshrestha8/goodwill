
import './header.css';

const Header = ()=>{
    return(
        <>
        <div className="headerInfo">
            <h1 className='brandName'>GOODWILL SPORTS</h1>
            <h1 className='brandDetails'>We provide solution to all your <br/> sporting needs</h1>
            <div className='brand'>
                <p>An authorized<strong> Yonex </strong> Seller</p>
            </div>
            <div className="buttonGroup">
                <button className="buttonSlanted">CALL NOW</button>
                <button className="buttonSlanted">VISIT US</button>
            </div>


        </div>
        </>
    )
}

export default Header;