import './content.css';
import trophy from '../../images/trophy.png';
import boot from '../../images/boot.png';
import jersey from'../../images/jersey.png';

const Content = () => {
    return(
        <>
            <div className="content">
                        <h1 className='contactHeader'>What we <span className='headerName'>Offer</span> </h1>
                        <h5 className='contentDescription'>Quality product at best price guaranteed</h5>

                        <div className='imagesContainer'>
                            <div className='contentBody'>
                                <img src={jersey} className='contentImage'></img>
                                
                                <h5 className='contentItemsHeader'>Sports Clothing</h5>
                                <h6 className='contentDescription'>All kinds of sporting gears such as balls, bats and safety gears available</h6>

                            </div>
                            <div className='contentBody'>
                            <img src={boot} className='contentImage'></img>
                            <h5 className='contentItemsHeader'>Sports Gears</h5>
                            <h6 className='contentDescription'>We offer variety of sports clothes along with printing services at request.</h6>
                                </div>
                                <div className='contentBody'>
                               
                                <img src={trophy} className='contentImage'></img>
                                <h5 className='contentItemsHeader'>Trophies and Medals</h5>
                            <h6 className='contentDescription'>There are variety of trophies and medals available at our store</h6>
                                
                                </div>

                                
                         
            
                           
                            
                        </div>
                        <button className='buttonSlanted callButton'>CALL NOW</button>

            </div>

        </>
    )
}


export default Content