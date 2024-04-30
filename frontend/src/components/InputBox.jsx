export function InputBox({label, placeholder, onChange}) {
    return <div>
        <div className="text-sm font-medium text-left pt-2 pb-1">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full pl-2 pt-1 border rounded border-slate-200"/>
    </div>    
}
