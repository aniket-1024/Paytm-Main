import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1//user/bulk?filter=${filter}`)
        .then(response => {
            setUsers(response.data.user)
        })
    }, [filter])

    return (<>
            <div className="font-semibold mt-6 text-lg">
                Users
            </div>
            <div className="mt-2">
                <input onChange={e => {
                    setFilter(e.target.value);
                }} type="text" placeholder="Search users...." className="w-full pl-2 pt-1 rounded border-slate-200 border"/>
            </div>
            <div>
                {users.map(user => <User user={user}/>)}
            </div>
            
        </>
    )
}

function User({user}) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between mt-3"> 
            <div className="flex">
                <div className="rounded-full w-10 h-10 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full ">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center h-full">
                <Button label={"Send Money"} onClick={(e)=> {
                    navigate("/send?id=" + user._id + "&name=" +user.firstName);
                }}/>
            </div>
        </div>
    )
} 