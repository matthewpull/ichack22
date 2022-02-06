import {PhoneIcon} from "@heroicons/react/outline";
import {useEffect, useState} from "react";

export default function UserRequestsList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_BASE_URL}/questions/me/`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul className="grid grid-cols-1 gap-6 ">
                {items.map((request) => (
                    <li key={request.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-textdark text-sm font-medium truncate">{request.title}</h3>
                                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                      {request.topic}
                                    </span>
                                    <span
                                        className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                                        {request.level}
                                    </span>
                                </div>
                                <p className="mt-1 text-gray-500 text-sm truncate">{request.text}</p>
                            </div>
                        </div>
                        {request.replies.map(reply => (
                            <div key={reply.id}>
                                <div className="-mt-px flex divide-x divide-gray-200">
                                    {/* Response */}
                                    <div className="flex items-center justify-between p-6 space-x-6">
                                        <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="text-gray-900 text-sm font-medium truncate">{reply.helper.name}</h3>
                                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                                  {reply.helper.topic}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-gray-500 text-sm truncate">{reply.helper.bio}</p>
                                        </div>
                                        <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={reply.helper.image} alt=""/>
                                    </div>
                                    {/* Call button */}
                                        <div className="-ml-px w-10 flex-1 flex">
                                        <a
                                            href="/call"
                                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                        >
                                            <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                                            <span className="ml-3">Call</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </li>
                ))}
            </ul>
        )
    }
}
