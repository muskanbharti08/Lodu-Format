import React, { useState } from 'react'
import CasinoIcon from '@mui/icons-material/Casino';

export default function Ludo() {
let [num1,setNum1]  = useState(0);

let clkRed = () =>{
        setNum1(++num1);
}
let [num2,setNum2]  = useState(0);
let clkGrn = () =>{
        setNum2(++num2);
}

let [num3,setNum3]  = useState(0);
let clkBle = () =>{
        setNum3(++num3);
}
let [num4,setNum4]  = useState(0);
let clkYel = () =>{
        setNum4(++num4);
}
        return (
                <>
                        <div className="border border-black w-fit p-9 rounded-xl mt-32 sm:mt-24 space-y-4 items-center mx-auto bg-gray-100 hover:bg-gray-200">
                                <p className="font-bold text-xl">LUDO <CasinoIcon /></p>
                                <div className="">
                                        <p className="text-red-600 font-semibold">Red Moves: {num1}</p>
                                        <button onClick={clkRed} className="bg-red-600  px-2 py-0.5 rounded-sm font-bold">+1</button>
                                </div>
                                <div className="">
                                        <p className="text-green-600 font-semibold">Green Moves: {num2}</p>
                                        <button onClick={clkGrn} className="bg-green-600 px-2 py-0.5 rounded-sm font-bold">+1</button>
 
                                </div>
                                <div className="">
                                        <p className="text-blue-600 font-semibold" font-semibold>Blue Moves: {num3}</p>
                                        <button onClick={clkBle} className="bg-blue-600 px-2 py-0.5 rounded-sm font-bold">+1</button>
                                </div>
                                <div className="">
                                        <p className="text-yellow-500 font-semibold">Yellow Moves: {num4}</p>
                                        <button onClick={clkYel} className="bg-yellow-500 px-2 py-0.5 rounded-sm font-bold">+1</button>

                                </div>
                        </div>
                </>
        )
}
