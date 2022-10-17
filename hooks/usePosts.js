import useSWR from 'swr';

const url = 'https://jsonplaceholder.typicode.com/posts'
const fetcher = (url) => fetch(url).then((res) => res.json())

export const usePosts = (userId) => {
    const postUrl = !!userId && userId > 0 ? url.concat("?userId="+userId) : url
    const {data, error} = useSWR(postUrl, fetcher, {revalidateOnReconnect: true})
    return {data, error}
}