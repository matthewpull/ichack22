/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import UserQuestionPost from "./UserQuestionPost";
import UserRequestsList from "./userRequestsList";

const user = {
    name: 'Sam Trew',
    email: 'sam@example.com',
    imageUrl:
        'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/178581459_2189625051179840_7814560823471489211_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tpnrP53DFnAAX93Ss4y&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8_z6tgZH-wGs1pZAlSrs9_fes8y3Eh6vhhtO3cmTqlow&oe=622420F1'
}
const navigation = [
    { name: 'User', href: '/user', current: true },
    { name: 'Helper', href: '/helper', current: false },
    { name: 'Profiles', href: '/profiles', current: false},
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const requests = [
    {
        name: 'How to solve 3x+4=2?',
        title: 'Sam Trew',
        role: 'Maths',
        email: 'tomnook@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/178581459_2189625051179840_7814560823471489211_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tpnrP53DFnAAX93Ss4y&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8_z6tgZH-wGs1pZAlSrs9_fes8y3Eh6vhhtO3cmTqlow&oe=622420F1',
        response: {
            name: 'Tony Field',
            title: 'Reader in Performance Engineering',
            tag: 'DoC',
            imageUrl: 'http://wp.doc.ic.ac.uk/ajf/wp-content/uploads/sites/49/2014/01/meBigHoleAdjusted.jpg'
        }
    },
    {
        name: 'How long is a piece of string?',
        title: 'Sam Trew',
        role: 'Physics',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/178581459_2189625051179840_7814560823471489211_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tpnrP53DFnAAX93Ss4y&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8_z6tgZH-wGs1pZAlSrs9_fes8y3Eh6vhhtO3cmTqlow&oe=622420F1'
    },
    {
        name: 'How do I integrate 4x cos(2−3x)d by parts?',
        title: 'Sam Trew',
        role: 'Maths',
        email: 'mattsmith@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/178581459_2189625051179840_7814560823471489211_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tpnrP53DFnAAX93Ss4y&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8_z6tgZH-wGs1pZAlSrs9_fes8y3Eh6vhhtO3cmTqlow&oe=622420F1'
    },
    {
        name: 'Why can I never catch the tennis ball?',
        title: 'Sam Trew',
        role: 'Physics',
        email: 'pug@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/178581459_2189625051179840_7814560823471489211_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tpnrP53DFnAAX93Ss4y&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8_z6tgZH-wGs1pZAlSrs9_fes8y3Eh6vhhtO3cmTqlow&oe=622420F1'
    },
    // More requests...
]

export default function UserDashboard() {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-primary">
                    {({open}) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-auto"
                                                src="/iamstuck_logo_white.png"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-primary text-background'
                                                                : 'bg-textlight text-background hover:bg-buttonpress hover:text-background',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button
                                                        className="max-w-xs bg-background rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl}
                                                             alt=""/>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({active}) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button
                                            className="bg-background inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-background text-white' : 'bg-textlight hover:bg-background hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt=""/>
                                        </div>
                                        <div className="ml-3">
                                            <div
                                                className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div
                                                className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto bg-background flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                    <div className="mt-3 px-2 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-background"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-textdark">Sam's Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-3xl mx-auto py-6 px-20 sm:px-20 lg:px-8">
                        {/* Replace with your content */}
                        {UserQuestionPost()}
                        {/* /End replace */}
                    </div>

                    <div className="max-w-3xl mx-auto py-6 px-20 sm:px-20 lg:px-8">
                        {/* Replace with your content */}
                        {UserRequestsList()}
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    )
}
