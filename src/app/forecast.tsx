import ForecastDay from "./forecastDay";

const Forecast = (props: any) => {
    return(
        <div className="bg-white w-full h-[33%] border-solid rounded-md relative mt-[2%]"><h1 className="m-2">{props.day} forecast:</h1>
            <div className="ml-[1%] h-[75%] w-[98%] border-solid border-black border-2 overflow-y-hidden overflow-x-auto flex flex-row">
                <ForecastDay/>
                <ForecastDay/>    
                <ForecastDay/>
                <ForecastDay/>
                <ForecastDay/>
            </div> 
        </div>
    );
}

export default Forecast;