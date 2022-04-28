export const toggleCurrentSetting = (setState, targetIndex) => 
setState(prevMenu => 
    ({ ...prevMenu, options: prevMenu.options.map( (option, index) => index === targetIndex ? { ...option, show: !option.show } : option )  }) )