"use client";
import { AiOutlineSetting, AiOutlinePlusCircle } from 'react-icons/ai';

const Header = () => {
    return(
        <header className="w-full h-[10%] bg-primary relative flex-col flex items-center text-center">
            <div className="w-[3.25rem] h-[3.25rem] absolute left-[1rem] flex-row">
                <AiOutlinePlusCircle style={{color: "#e0e1ddff"}} size={50}/>
            </div>
                        
            <div className="w-[3.25rem] h-[3.25rem] relative m-auto flex-row">
                <h1 className='text-accent'>locationName</h1>
            </div>
            <div className="w-[3.25rem] h-[3.25rem] absolute right-[1rem] flex-row">
                <AiOutlineSetting style={{color: "#e0e1ddff"}} size={50}/>
            </div>
        </header>
    );
}
export default Header;
