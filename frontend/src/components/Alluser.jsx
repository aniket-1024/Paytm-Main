export const Alluser = ({
    userIcon,
    userName,
}) => {
    return (
        <div className="flex justify-between pt-2">
            <div className="flex">
                <div className="rounded-full text-xs p-2 bg-grey-400">{userIcon}</div>
                <div className="font-semibold text-xs p-2">{userName}</div>
            </div>
            <div className="bg-black rounded text-white text-xs p-2 pl-2 pr-2">Send Money</div>
        </div>
    )
}