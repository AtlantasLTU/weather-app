import Forecast from "./forecast";

const Main = () =>{
    return(
        <main className="bg-sky-400 w-full h-[86%] relative flex justify-center">
            <div className="w-[70%] h-full absolute flex flex-col">
                <Forecast day="Todays"></Forecast>
                <Forecast day="Weekly"></Forecast>
            </div>
        </main>
    )
}

export default Main;