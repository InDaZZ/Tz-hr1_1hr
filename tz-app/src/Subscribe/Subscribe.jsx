import './Subscribe.css';
import gplay from '../images/google.svg';
import appstore from '../images/app-store.svg';


function Subscribe() {
    return (
        <section className='subscribe'>
            <h2 className='subscribe__title'>Subscribe to our channel to learn more</h2>
            <div className='subscribe__statistician-container'>
                <div className='subscribe__statistic'><span className='subscribe__statistic-info'>20K+</span><span className='subscribe__statistic-name'>subscribers</span></div>
                <div className='subscribe__statistic'><span className='subscribe__statistic-info'>19,5K</span><span className='subscribe__statistic-name'>successful cases</span></div>
                <div className='subscribe__statistic'><span className='subscribe__statistic-info'>4.8/5</span><span className='subscribe__statistic-name'>rating</span></div>
            </div>
            <button className='subscribe__button' type='button'>JOIN WHATSAPP</button>
            <div className='subscribe__sources'>
                <div className='subscribe__download'>
                    <img className='subscribe__download-image' src={gplay}></img>
                    <div className='subscribe__download-container'>
                        <span className='subscribe__download-title'>get it on</span>
                        <span className='subscribe__download-store'>Google play</span>
                    </div>
                </div>
                <div className='subscribe__download'>
                    <img className='subscribe__download-image' src={appstore}></img>
                    <div className='subscribe__download-container'>
                        <span className='subscribe__download-title'>get it on</span>
                        <span className='subscribe__download-store'>App Store</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribe;