/* This example requires Tailwind CSS v2.0+ */
import {StarIcon} from '@heroicons/react/solid'
import {useEffect, useState} from "react";

export default function HelperProfiles() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://146.169.216.128:8000/helpers/")
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
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {items.map((person) => (
                    <li
                        key={person.id}
                        className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                        <div className="flex-1 flex flex-col p-8">
                            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full object-cover" src={person.image} alt=""/>
                            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-gray-500 text-sm">{person.bio}</dd>
                                <div className="mt-2 flex items-center justify-center"><span
                                    className="font-medium">{person.rating}</span>
                                    <StarIcon className="w-5 h-5 text-yellow-500" aria-hidden="true"/>
                                </div>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-2">
                                    <span
                                        className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                      {person.topic}
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}
