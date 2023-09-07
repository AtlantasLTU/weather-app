import ForecastDay from "./forecastDay";

const Forecast = (props: any) => {
    return(
        <div className="bg-secondary w-full h-[33%] rounded-md relative mt-[2%]">
            <header className="m-2 text-text h-[10%]">{props.day} forecast:</header>
            <main className="ml-[1%] h-[70%] w-[98%] bg-primary overflow-y-hidden rounded-lg overflow-x-auto flex flex-row">
                <ForecastDay hour="1:00 PM" humidity="69" temperature="10"/>
                <ForecastDay/>    
                <ForecastDay/>
                <ForecastDay/>
                <ForecastDay/>
            </main>
            <footer className="h-[20%] w-full">
                <button className="ml-[1%] mt-[0.5%] w-[10%] h[98%] justify-center box-border border-solid border-2 border-primary bg-accent rounded-md text-text">Next</button>    
            </footer> 
        </div>
    );
}

export default Forecast;