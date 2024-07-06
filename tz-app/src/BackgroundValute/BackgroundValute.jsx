import './BackgroundValute.css';


function BackgroundValute({valuteIcon, valuteType}) {
    return (
        <img src={valuteIcon} className={`background-valute background-valute_${valuteType}`} ></img >
    )
}

export default BackgroundValute