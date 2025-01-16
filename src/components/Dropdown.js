import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({label, options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(()=>{
        
        const onBodyClick = (event) => {
            //CLOSE THE DROP DOWN ONLY IF THE ELEMENT CLICKED IS OUTSIDE THE Dropdown COMPONENT
            if(ref.current && ref.current.contains(event.target)){
                return
            }
            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick, {capture: true})
        
        //TO DEACTIVATE THE LISTENER IF THE Dropdown COMPONENT IS NOT RENDERED WE CAN USE CLEAN UP METHOD
        //CLEAN UP WILL BE CALLED JUST BEFORE THE COMPONENT IS REMOVED ENTIRELY
        return () => {
            document.body.removeEventListener('click',onBodyClick)
        }
    }, [])
    const renderedOptions = options.map((option) => {
        if(option.value===selected.value){
            return null
        }
        return (
            <div 
                key={option.value} 
                className='item'
                onClick={()=>onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })
    return (
        <div ref={ref} className='ui form segment'>
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    className={`ui selection dropdown ${open?'visible active':''}`}
                    onClick={()=>setOpen(!open)}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown