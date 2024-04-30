export function Balance({value}){
    return (
        <div className="flex mt-6">
            <div className="font-semibold text-lg mr-2">Your Balance</div>
            <div className="font-medium text-lg">${value}</div>
        </div>
    )
}