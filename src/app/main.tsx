"use client";
import Forecast from "./forecast";

const Main = () =>{
    return(
        <main className="bg-accent w-full relative flex-col flex items-center justify-center order-[1]">
            <div className="w-[70%] h-full relative flex flex-col">
                <Forecast day="Today's"></Forecast>
                <Forecast day="Weekly"></Forecast>
            </div>
        </main>
    )
}

export default Main;