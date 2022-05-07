export const toggleCurrentSetting = (setState, targetIndex) => 
    setState(prevMenu => ({ ...prevMenu, 
                            options: prevMenu.options.map( (option, index) => 
                                index === targetIndex ? 
                                    {   ...option, show: !option.show } : 
                                        option )  }) )

export const toggleMenu = setMenu => setMenu( prevMenu => ({ ...prevMenu, on: !prevMenu.on }) )

export const toggleClass = (classNames) => document.querySelector(`.${classNames[0]}`).classList.toggle(classNames[1])

export const showSelectedMenuOption = (setMenu, classNames) => {
    toggleClass(classNames)
    setTimeout( () => toggleMenu(setMenu), 500) }

export const hideSelectedMenuOption = (setMenu, targetIndex, classNames) => {
        toggleMenu(setMenu)
        toggleClass(classNames)
        setTimeout( () => toggleCurrentSetting(setMenu, targetIndex) , 500 ) }