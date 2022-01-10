import './footer.css';
import {Facebook, Heart, Instagram, Whatsapp} from 'react-bootstrap-icons';
import logo from '../../images/logo.png'

const Footer = ()=>{
    return(
        <>
            <div className='footerContainer'>
                    <h1 className='contactHeader'><span className='headerName'>Contact</span> Us</h1>
                    <h5 className='contentDescription'>We are always eager to hear from you.</h5>
                    <div className='footerContent1'>
                        <div>
                                <h3>We are on</h3>
                                <Facebook className='icons'></Facebook>
                                <Whatsapp className='icons'></Whatsapp>
                                <Instagram className='icons'></Instagram>
                        </div>
                        <div>
                                    <h3>Contact</h3>
                                    <h5>+977- 9823872756 <br/> goodwillsportsnepal@gmail.com </h5>
                            
                        </div>
                        <div>
                                        <h3>Location</h3>
                                        <h5>Pokhara-9,Newroad <br/>
                                        Opposite to Padma nursing home</h5>
                        </div>

                    </div>
                    <div className='footerContent2'>
                        <div className='logoContainer'>
                                <img src={logo} className='logo'></img>
                        </div>
                        <div className='footerQuote'>
                            <h3>“ Obstacles don’t have to stop you. If you run into a wall, don’t turn around and <br/>
give up. Figure out how to climb it, go through it, or work around it.” - <span className='golden'>Michael Jordan</span> </h3>
                        </div>
                    

                    </div>
                    <div className='designerFooter'>
                        <h3 className='contentDescription'>Designed     with  <span className='footerLogoColor'><Heart></Heart></span>   by Aankhijhyal</h3>
                    </div>
            </div>
        
        </>
    )
}


export default Footer;
