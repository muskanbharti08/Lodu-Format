import React, { useState } from 'react'
import CasinoIcon from '@mui/icons-material/Casino';

export default function Ludo() {
let [num,setNum]  = useState(0);

let clkRed = () =>{
        setNum(++num);
}
let clkGrn = () =>{
        setNum(++num);
}

let clkYel = () =>{
        setNum(++num);
}
let clkYble = () =>{
        setNum(++num);
}
        return (
                <>
                        <div className="border border-black w-fit p-9 rounded-xl mt-32 space-y-4 items-center mx-auto bg-gray-100 hover:bg-gray-200">
                                <p className="font-bold text-xl">LUDO <CasinoIcon /></p>
                                <div className="">
                                        <p className="text-red-600 font-semibold">Red Moves: {num}</p>
                                        <button onClick={clkRed} className="bg-red-600  px-2 py-0.5 rounded-sm font-bold">+1</button>
                                </div>
                                <div className="">
                                        <p className="text-green-600 font-semibold">Green Moves: {num}</p>
                                        <button onClick={clkGrn} className="bg-green-600 px-2 py-0.5 rounded-sm font-bold">+1</button>
 
                                </div>
                                <div className="">
                                        <p className="text-blue-600 font-semibold" font-semibold>Blue Moves: {num}</p>
                                        <button onClick={clkYble} className="bg-blue-600 px-2 py-0.5 rounded-sm font-bold">+1</button>
                                </div>
                                <div className="">
                                        <p className="text-yellow-500 font-semibold">Yellow Moves: {num}</p>
                                        <button onClick={clkYel} className="bg-yellow-500 px-2 py-0.5 rounded-sm font-bold">+1</button>

                                </div>
                        </div>
                </>
        )
}
