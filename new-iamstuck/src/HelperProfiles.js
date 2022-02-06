/* This example requires Tailwind CSS v2.0+ */
import {MailIcon, PhoneIcon, StarIcon} from '@heroicons/react/solid'
import {useEffect, useState} from "react";

const people = [
    {
        name: 'Rasika Navarange',
        title: 'Backend Engineer at iamstuck.com',
        role: 'Engineering',
        rating: '4.87',
        email: 'rasikanavarange@iamstuck.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/85081801_1080801252264455_2486976241240899584_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=ssdv63j6cdUAX8U6iLq&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT82Uo7IoNeOVqPtWVJcmHnyO91l8cyiKm415GlauKmHdg&oe=6224B5FE',
    },
    {
        name: 'Hao Liang',
        title: 'Software Engineer at iamstuck.com',
        role: 'Security',
        rating: '4.98',
        email: 'haoliang@iamstuck.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/49251323_2144653868934066_5123339107258335232_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=45mmd0A1ifMAX8_Tblb&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-Pq8DdGizPqwND3EPjJ1KDJJVO1zC5fmZYLXsXVGxwLg&oe=6225D0F2',
    },
    {
        name: 'Dingyu Chen',
        title: 'Maths Tutor at Imperial College',
        role: 'Tutoring',
        rating: '4.21',
        email: 'dingyuchen@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/74359699_2703723009647875_2944988023223222272_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1WChmGyLYdIAX9vjliS&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8eqMglv6XLZXKfg_epkRlIZg3YN7P4FMnmmeLQkPAzLw&oe=6223E83E'
    },

    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        rating: '3.87',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },

    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        rating: '5',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },

    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        rating: '5.0',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
]

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
