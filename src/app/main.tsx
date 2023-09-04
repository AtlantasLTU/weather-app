import Forecast from "./forecast";

const Main = () =>{
    return(
        <main className="bg-sky-400 w-full h-[86%] absolute top-[10%] flex justify-center">
            <div className="w-[70%] h-full absolute flex flex-col">
                <Forecast></Forecast>
                <Forecast></Forecast>
            </div>
        </main>
    )
}

export default Main;