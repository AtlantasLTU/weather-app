import Forecast from "./forecast";

const Main = () =>{
    return(
        <main className="bg-sky-400 w-full h-[86%] absolute top-[10%]">
            <div className="w-[800px] h-full absolute flex flex-col">
                <Forecast></Forecast>
                <Forecast></Forecast>
            </div>
        </main>
    )
}

export default Main;