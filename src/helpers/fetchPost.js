const fetchCategory = async ( selectedCategory, lang = "en" ) => {
        try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/categories?lang=${lang}`)
                const categoryList = await response.json()

                for (const categoryName of categoryList) {
                        if ( selectedCategory.toLowerCase() === categoryName.name.toLowerCase() ) 
                        return { id: categoryName.id, count: categoryName.count } } }

        catch(error) { localStorage.clear(); console.error(error) } }




const fetchLastPostForReference = async ( currentCategoryData, lang="en" ) => {
        try {   const response = currentCategoryData.search ?
                        await fetch(`https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&search=${currentCategoryData.search}&orderby=date&order=asc&per_page=1`) :
                        await fetch(`https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&categories=${currentCategoryData.id}&orderby=date&order=asc&per_page=1`)
                if (!response.ok) throw Error(response)
                const data = await response.json()
                return data[0] ? data[0].id : null }
        
        catch(error) { localStorage.clear(); console.error(error) } }

        
export const fetchSelectedPosts = 
        async ( handleState, 
                categoryData, 
                lang = "en", 
                setCurrentCategoryData = null, 
                content = [], 
                year = ( new Date().getFullYear() ), 
                handleError = () => {} ) => {
                        
                try {   const lastPostIdResponse = categoryData.lastPostId ? 
                                categoryData.lastPostId : 
                                await fetchLastPostForReference( categoryData, lang )

                        
                        const lastPostId = lastPostIdResponse ? 
                                lastPostIdResponse : 
                                ( () => { 
                                        alert("Sorry, this search query has not produced any results.\n\nPerhaps trying another topic might help.") 
                                        throw new Error("Search query not resolved") } ) ()


                        const response = categoryData.search ? 
                                await fetch( `https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&search="${categoryData.search}"&context=view&per_page=${content.length+10}&before=${year}-12-31T00:00:00` ) :
                                await fetch( `https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&context=view&categories=${categoryData.id}&per_page=${content.length+10}&before=${year}-12-31T00:00:00` )
                        if(!response.ok) throw Error(response)

                        let data = await response.json()
                        if ( data.length === 0 ) {
                                alert("Sorry, the selected year does not contain any search results.\n\nPlease try selecting a different year.")
                                handleError()
                                const response = await fetch( `https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&search="${categoryData.search}"&context=view&per_page=${content.length+10}&before=${( new Date().getFullYear() )}-12-31T00:00:00` )
                                data = await response.json() }

                        const months = lang === "en" ? 
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] : ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]

                        const result = data.map( post => {
                                const unformattedDate = post["date"].slice(0, post["date"].indexOf("T")).split("-").reverse()
                                const extractedMonthNameFromDate = 
                                        months[unformattedDate[1][0] === "0" ? 
                                                JSON.parse(unformattedDate[1][1] - 1) : 
                                                JSON.parse(unformattedDate[1] - 1)]

                                const formattedDate = `${unformattedDate[0]} ${extractedMonthNameFromDate} ${unformattedDate[2]}`

                                return { id: post["id"], 
                                         title: post["title"]["rendered"], 
                                         image: post["yoast_head_json"]["og_image"][0]["url"],
                                         date: formattedDate } }  )
                                         
                        if (setCurrentCategoryData) setCurrentCategoryData( { ...categoryData, lastPostId: lastPostId } )
                        return handleState(result) }

                catch(error) { localStorage.clear(); console.error(error); handleError() }   }




export const fetchCategoryAndItsPosts = async ( handleState, selectedCategory, lang="en", setCurrentCategoryData, year ) => {
        try {   fetchCategory(selectedCategory, lang)
                .then( categoryData => fetchSelectedPosts(handleState, categoryData, lang, setCurrentCategoryData, [], year) ) }

        catch(error) {  localStorage.clear(); console.error(error) } }




export const fetchSinglePost = async ( handleState, postId, theme ) => {
        try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/posts/${postId}?context=view`)
                        if(!response.ok) throw Error(response)
                const data = await response.json()
                return handleState( { content: data.content.rendered, image: data["yoast_head_json"]["og_image"][0]["url"], theme: theme } )  }

        catch(error) { localStorage.clear(); console.error(error) }   }