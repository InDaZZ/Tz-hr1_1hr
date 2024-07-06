import './Main.css';
import Subscribe from '../Subscribe/Subscribe';
import BackgroundValute from '../BackgroundValute/BackgroundValute';
import Bitcoin from '../images/Bitcoin.svg';
import Leticoin from '../images/Litecoin.svg';
import Ethereum from '../images/Ethereum.svg';
import Comment from '../App/Comment/Comment';
import LorenzoImg from '../images/LORENZO.png';
import ADALINAImg from '../images/ALDALINA.png';
import ALEXANDERImg from '../images/ALEXANDER.png';
import RUSHANAImg from '../images/RUSHANA.png';
import { useEffect, useState } from 'react';

function Main() {
    console.log(window.innerWidth)
    const [mobileVer, setMobileVer] = useState(false);
    const resizeHandler = () => {
        if (window.innerWidth > 420) {
            setMobileVer(false)
            return
        }
        else {
            setMobileVer(true)
        }
    };

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [])

    return (
        <main className='main'>
            <h1 className='main__title'>DO YOU WANT TO LEARN MORE ABOUT CRYPTOCURRENC{mobileVer && <br></br>}IES <span className='main__title-gradient'>QUICKLY AND EASILY ?</span></h1>
            <BackgroundValute valuteIcon={Bitcoin} valuteType={'bitcoin'}></BackgroundValute>
            <BackgroundValute valuteIcon={Leticoin} valuteType={'litecoin'}></BackgroundValute>
            <BackgroundValute valuteIcon={Ethereum} valuteType={'ethereum'}></BackgroundValute>
            {(window.innerWidth > 420) && <Comment userImage={LorenzoImg} userMail={'@lorenzoo'} userName={'LORENZO'} massage={'Amazing Telegram bot! Provides real-time crypto prices and news'} hidenComment={mobileVer}></Comment>}

            {(window.innerWidth > 420) && <Comment userImage={ADALINAImg} userMail={'@ada'} userName={'ADALINA'} massage={'Must-have bot for crypto traders. Accurate signals and analysis'} hidenComment={mobileVer}></Comment>}

            {(window.innerWidth > 420) && <Comment userImage={ALEXANDERImg} userMail={'@alex_x'} userName={'ALEXANDER'} massage={'Superb cryptocurrency bot! Quick updates and reliable data'} hidenComment={mobileVer}></Comment>}

            {(window.innerWidth > 420) && <Comment userImage={RUSHANAImg} userMail={'@Hana'} userName={'RUSHANA'} massage={'Efficient and user-friendly bot. Simplifies crypto trading tasks'} hidenComment={mobileVer}></Comment>}
            <Subscribe></Subscribe>
        </main>
    )
}

export default Main;