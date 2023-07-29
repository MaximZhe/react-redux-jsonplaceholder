
import { useMemo } from "react";

 const useSortPosted = (posts,sort) => {
      const sortPosts = useMemo(() => {
        if(sort === 'title'){
          return [...posts].sort((a,b) => a.title.localeCompare(b.title))
        }
        else if ( sort === 'body'){
          return [...posts].sort((a,b) => a.body.localeCompare(b.body))
        }
        else if ( sort === 'id'){
          return [...posts].sort((a,b) => b.id - a.id)
        }
        return posts
      },[posts,sort])
      
      return sortPosts;
}

export const usePosts = (posts,sort,query) => {
    const sortPosts = useSortPosted(posts,sort)
    const sortSearchPost = useMemo(() => {
        return sortPosts.filter(post => post.title.includes(query))
      }, [ query, sortPosts])

      return sortSearchPost

}