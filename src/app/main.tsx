import Forecast from "./forecast";

const Main = () =>{
    return(
        <main className="bg-accent w-full h-[86%] relative flex justify-center">
            <div className="w-[70%] h-full absolute flex flex-col">
                <Forecast day="Today's"></Forecast>
                <Forecast day="Weekly"></Forecast>
            </div>
        </main>
    )
}

export default Main;