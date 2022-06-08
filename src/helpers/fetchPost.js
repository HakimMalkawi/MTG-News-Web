const fetchCategory = async  (selectedCategory, lang = "en" ) => {
        
        try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/categories?lang=${lang}`)
                const categoryList = await response.json()

                for (const categoryName of categoryList) {
                        if (selectedCategory.toLowerCase() === categoryName.name.toLowerCase()) 
                        return { id: categoryName.id, count: categoryName.count } } }

        catch(error) { localStorage.clear(); console.error(error) } }



export const fetchSelectedPosts = 
        async ( handleState, 
                categoryData, 
                lang = "en", 
                setCurrentCategoryData = null, 
                content = [], 
                year = ( new Date().getFullYear() ) ) => {

                try {   const lastPostIdResponse = await fetchLastPostForReference(categoryData.id, lang)
                        const lastPostId = lastPostIdResponse[0].id
                        const response = await fetch(
                        `https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&context=view&categories=${categoryData.id}&per_page=${content.length+10}&before=${year}-12-31T00:00:00` ); if(!response.ok) throw Error(response)

                        const data = await response.json()

                        const months = lang === "en" ? 
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] : ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]

                        const result = data.map( post => {
                                const unformattedDate = post["date"].slice(0, post["date"].indexOf("T")).split("-").reverse()

                                const extractedMonthNameFromDate = 
                                        months[unformattedDate[1].at(0) === "0" ? 
                                                JSON.parse(unformattedDate[1].at(1) - 1) : 
                                                JSON.parse(unformattedDate[1] - 1)]

                                const formattedDate = `${unformattedDate[0]} ${extractedMonthNameFromDate} ${unformattedDate[2]}`

                                return { id: post["id"], 
                                         title: post["title"]["rendered"], 
                                         image: post["yoast_head_json"]["og_image"][0]["url"].replaceAll("\\", ""),
                                         date: formattedDate } }  )

                        if (setCurrentCategoryData !== null) setCurrentCategoryData( { ...categoryData, lastPostId: lastPostId } )
                        return handleState(result)   }

                catch(error) { localStorage.clear(); console.error(error) }   }



export const fetchPosts = async (handleState, selectedCategory, lang="en", setCurrentCategoryData, year) => {

        try {   fetchCategory(selectedCategory, lang)
                .then( categoryData => fetchSelectedPosts(handleState, categoryData, lang, setCurrentCategoryData, [], year) ) }
        
        catch(error) {  localStorage.clear(); console.error(error) } }



const fetchLastPostForReference = async ( currentCategoryId, lang="en" ) => {
        try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&categories=${currentCategoryId}&orderby=date&order=asc&per_page=1`); if (!response.ok) throw Error(response)
                return await response.json() }
        
        catch(error) { localStorage.clear(); console.error(error) } }



export const fetchPost = async (handleState, id) => {

        try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/posts/${id}?context=view`)
                        if(!response.ok) throw Error(response)
                const data = await response.json()
                return handleState({content: data.content.rendered, image: data["yoast_head_json"]["og_image"][0]["url"]})  }

        catch(error) {  localStorage.clear(); console.error(error) }   }