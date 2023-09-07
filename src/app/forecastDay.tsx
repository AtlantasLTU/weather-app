import {TiWeatherCloudy} from 'react-icons/ti';

const ForecastDay = (props: any) => {
    return(
        <div className="bg-accent relative w-[20%] m-[0.5%] rounded-md flex flex-col text-center items-center">
            <header className='text-text relative w-full h-[20%]'>{props.hour}:</header>
            <main className='relative m-auto box-border h-[60%]'>
                <TiWeatherCloudy size={70}/>
                <h1>{props.temperature}°c</h1>
            </main>
            <footer className='relative h-[20%]'>{props.humidity}%</footer>
        </div>
    )
}

export default ForecastDay;