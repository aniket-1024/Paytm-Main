import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center ">
            <div className="bg-white text-center rounded-lg h-max w-80 p-8 ">

                <div>
                <h2 className="text-3xl font-bold text-center text-gray-600">Send Money</h2>
                </div>
                <div className="pt-10">
                    <div className="flex ">
                        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                        <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                        </div>
                        <div className="pt-2 pl-2">
                        <h3 className="text-2xl font-semibold text-gray-600">{name}</h3>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex justify-start pb-2 pl-1">
                        <div className="text-left text-gray-600 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                            Amount (in Rs)
                        </div>
                    </div>
                    <div className="pb-1">
                        <input
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                            type="number"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            id="amount"
                            placeholder="Enter amount"
                        />
                    </div>
                </div>
                <div className='pt-8'>
                    <button onClick={async(e) => {
                        await axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to: id,
                            amount
                        },{
                            headers: {
                                authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-emerald-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
    </div>
}