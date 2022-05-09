const fetchCategory = async (categorySelection, lang="en") => {
        try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/categories?lang=${lang}`)
                const categoryList = await response.json()
                for (const categoryName of categoryList) {
                        if (categorySelection.toLowerCase() === categoryName.name.toLowerCase()) return categoryName.id } }
        catch(error) { console.error(error) } }

export const fetchSelectedPosts = async (handleState, categoryId, lang="en", setCurrentCategoryId = false, content = []) => {
                if (setCurrentCategoryId !== false) setCurrentCategoryId(categoryId)
                try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/posts?lang=${lang}&context=view&categories=${categoryId}&per_page=${content.length+10}`)
                                if(!response.ok) throw Error(response)
                        const data = await response.json()
                        const result = []
                        for (const post of data) { result.push({ id: post["id"], 
                                                                title: post["title"]["rendered"], 
                                                                image: post["yoast_head_json"]["og_image"][0]["url"].replaceAll("\\", ""),
                                                                date: post["date"].slice(0, post["date"].indexOf("T")) } )     }
                        return handleState(result)   }
                catch(error) { console.error(error) }   }

export const fetchPosts = async (handleState, categorySelection, lang="en", setCurrentCategoryId) => {
        fetchCategory(categorySelection, lang).then(categoryId => fetchSelectedPosts(handleState, categoryId, lang, setCurrentCategoryId)) }

export const fetchPost = async (handleState, id, lang="en") => {
        try {   const response = await fetch(`https://mtargetgroup.com/wp-json/wp/v2/posts/${id}?lang=${lang}&context=view`)
                        if(!response.ok) throw Error(response)
                const data = await response.json()
                return handleState({content: data.content.rendered, image: data["yoast_head_json"]["og_image"][0]["url"]})  }
        catch(error) { console.error(error) }   }