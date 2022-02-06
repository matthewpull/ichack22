import {XIcon, CheckIcon} from '@heroicons/react/solid'

export default function RequestsList(people, buttons=true) {
    return (
        <ul className="grid grid-cols-1 gap-6 ">
            {people.map((person) => (
                <li key={person.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-textdark text-sm font-medium truncate">{person.name}</h3>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                  {person.role}
                                </span>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                                  {person.role}
                                </span>
                            </div>
                            <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
                        </div>
                        <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt=""/>
                    </div>
                    {buttons &&
                        <div>
                            <div className="flex divide-x divide-gray-200">
                                <div className="w-0 flex-1 flex">
                                    <button
                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 hover:bg-gray-50"
                                    >
                                        <XIcon className="w-5 h-5 text-redcross" aria-hidden="true"/>
                                        <span className="ml-3">Dismiss</span>
                                    </button>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <button
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
