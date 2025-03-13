import React, {useId} from 'react'

const Input = React.forwardRef(function input({
    label, 
    type="text",
    classname= "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>{label&&<label className='inline-block pl-1 mb-1' htmlFor={id}>{label}</label>}<input type={type} className={`${classname}` } ref={ref} {...props} id={id}/></div>
    )
})

export default Input
