import {XIcon, CheckIcon} from '@heroicons/react/solid'
import {useEffect, useState} from "react";

export default function RequestsList(people, buttons=true) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    function accept(questionId, index) {
        console.log('Accept question id ' + questionId)
        fetch(
            `http://${process.env.REACT_APP_BASE_URL}/questions/${questionId}/accept/`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    helper: 2,
                }),
            }
        )
        .then(
            (result) => {
                console.log(result)
                setItems(items.filter((_, i) => i !== index))
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.error(error)
            }
        )
    }

    function reject(questionId, index) {
        console.log('Reject question id ' + questionId)
        fetch(
            `http://${process.env.REACT_APP_BASE_URL}/questions/${questionId}/reject/`,
            {
                method: 'POST',
            }
        ).then(
            (result) => {
                console.log(result)
                setItems(items.filter((_, i) => i !== index))
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.error(error)
            }
        )
    }

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_BASE_URL}/questions/tutor/`)
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
        console.log(items)
        return (
            <ul className="grid grid-cols-1 gap-6 ">
                {items.map((item, index) => (
                    <li key={item.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-textdark text-sm font-medium truncate">{item.title}</h3>
                                    <span
                                        className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                        {item.level}
                                    </span>
                                    <span
                                        className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                                        {item.topic}
                                    </span>
                                </div>
                                <p className="mt-1 text-gray-500 text-sm truncate">{item.text}</p>
                            </div>
                            <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src='https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/178581459_2189625051179840_7814560823471489211_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tpnrP53DFnAAX93Ss4y&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8_z6tgZH-wGs1pZAlSrs9_fes8y3Eh6vhhtO3cmTqlow&oe=622420F1'
                                 alt=""/>
                        </div>
                        {buttons &&
                        <div>
                            <div className="flex divide-x divide-gray-200">
                                <div className="w-0 flex-1 flex">
                                    <button onClick={e => reject(item.id, index)}
                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 hover:bg-gray-50"
                                    >
                                        <XIcon className="w-5 h-5 text-redcross" aria-hidden="true"/>
                                        <span className="ml-3">Dismiss</span>
                                    </button>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <button onClick={e => accept(item.id, index)}
                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 hover:bg-gray-50"
                                    >
                                        <CheckIcon className="w-5 h-5 text-textlight" aria-hidden="true"/>
                                        <span className="ml-3">Accept</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        }
                    </li>
                ))}
            </ul>
        )
    }
}
