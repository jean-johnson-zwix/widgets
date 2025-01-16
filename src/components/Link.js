import React from 'react'

const Link = ({className, href, children}) => {
    
    const onClick = (event) => {
        
        //CTRL + CLICK SHOULD OPEN NEW TAB
        if(event.metaKey || event.ctrlKey){
            return
        }

        event.preventDefault()

        //CHANGE URL WITHOUT REFRESH
        window.history.pushState({}, '',href)

        //CREATE NAVIGATION EVENT
        const navEvent = new PopStateEvent ('popstate')
        window.dispatchEvent(navEvent)
    }

    return <a 
        className={className} 
        href={href}
        onClick={onClick}>
            {children}
        </a>
}

export default Link