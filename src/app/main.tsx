import Forecast from "./forecast";

const Main = () =>{
    return(
        <main className="bg-sky-400 w-full h-[86%] absolute top-[10%] flex justify-center">
            <div className="w-[800px] h-full absolute">
                <Forecast></Forecast>
            </div>
        </main>
    )
}

export default Main;