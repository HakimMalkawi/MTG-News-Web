export const saveScrollPosition = handleState => handleState(window.scrollY)
export const restoreScrollPosition = state => window.scrollTo(0, state)