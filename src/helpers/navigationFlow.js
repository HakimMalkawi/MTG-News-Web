export const toggleCurrentSetting = (setState, targetIndex) => {
    if (targetIndex !== false) {
    return setState(prevState => ({  ...prevState, 
                                    options: prevState.options.map( (option, index) => 
                                             index === targetIndex ? { ...option, show: !option.show } : option )  }) ) }
    setState(prevState => !prevState) }

export const toggleOnState = setState => setState( prevState => ({ ...prevState, on: !prevState.on }) )

export const toggleClass = (classNamesForToggle) => document.querySelector(`.${classNamesForToggle[0]}`).classList.toggle(classNamesForToggle[1])

export const showSelectedMenuOption = (setState, classNamesForToggle) => {
    toggleClass(classNamesForToggle)
    setTimeout( () => toggleOnState(setState), 500) }

export const hideSelectedMenuOption = (setState, classNamesForToggle, targetIndex = false) => {
        if (targetIndex !== false) toggleOnState(setState)
        toggleClass(classNamesForToggle)
        setTimeout( () => toggleCurrentSetting(setState, targetIndex) , 500 ) }