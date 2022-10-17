
export default function Post({post}){
    const {id, title, body} = post;
    return (
        <div className="group bg-blue-100 border-solid border-2 
                        border-blue-300 rounded-lg hover:bg-blue-900 hover:border-blue-500 m-2">
            <div className="p-2">
                <div className="flex w-full justify-end">
                    <span className="hover:border-solid hover:border-2 hover:bg-green-300 hover:rounded-lg hover:border-green-300">Post #{id}</span>
                </div>
              
                <div className="items-end w-full">
                    <h3 className="text-slate-900 text-lg font-bold group-hover:text-green-300">{title}</h3>
                    <p className="group-hover:text-white">{body}</p>
                </div>
            </div>
        </div>
    )
}