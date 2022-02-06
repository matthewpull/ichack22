import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { PaperClipIcon, AcademicCapIcon, HashtagIcon} from '@heroicons/react/solid'

const labels = ['GCSE', 'AS Level', 'A Level']
const subjects = ['Maths', 'English', 'History', 'Chemistry', 'Engineering']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UserQuestionPost() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [assigned, setAssigned] = useState(subjects[0])
    const [labelled, setLabelled] = useState(labels[0])

    function submit(event) {
        event.preventDefault();
        console.log({
                    title: title,
                    text: text,
                    level: assigned,
                    topic: labelled,
                })
        fetch(
            `http://${process.env.REACT_APP_BASE_URL}/questions/`,
            {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    text: text,
                    level: assigned,
                    topic: labelled,
                }),
            }
        )
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.error(error)
            }
        )
    }

    return (
        <form action="#" className="relative" onSubmit={submit}>
            <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
                <label htmlFor="title" className="sr-only">
                    Title
                </label>
                <input
                    value={title.value}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                    placeholder="Question Title"
                />
                <label htmlFor="description" className="sr-only">
                    Description
                </label>
                <textarea
                    value={text.value}
                    onChange={e => setText(e.target.value)}
                    rows={5}
                    name="description"
                    id="description"
                    className="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Explain the issue you're facing ..."
                    defaultValue={''}
                />

                {/* Spacer element to match the height of the toolbar */}
                <div aria-hidden="true">
                    <div className="py-2">
                        <div className="h-9" />
                    </div>
                    <div className="h-px" />
                    <div className="py-2">
                        <div className="py-px">
                            <div className="h-9" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 inset-x-px">
                <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
                    <div className="flex">
                        <button
                            type="button"
                            className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
                        >
                            <PaperClipIcon className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" aria-hidden="true" />
                            <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">Attach a file</span>
                        </button>
                    </div>
                    <div className="flex-shrink-0 flex">
                        <div className="flex flex-nowrap justify-end px-2 space-x-2 sm:px-3">
                            <Listbox as="div" value={labelled} onChange={setLabelled} className="flex-shrink-0">
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="sr-only">Add a label</Listbox.Label>
                                        <div className="relative">
                                            <Listbox.Button className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-100 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-200 sm:px-3">
                                                <AcademicCapIcon
                                                    className={classNames(
                                                        labelled === null ? 'bg-textlight' : 'text-gray-500',
                                                        'flex-shrink-0 h-5 w-5 sm:-ml-1'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                <span
                                                    className={classNames(
                                                        labelled === null ? '' : 'text-textdark',
                                                        'hidden truncate sm:ml-2 sm:block'
                                                    )}
                                                >
                                                  {labelled === null ? 'Label' : labelled}
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {labels.map((label) => (
                                                        <Listbox.Option
                                                            key={label}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'bg-gray-100' : 'bg-white',
                                                                    'cursor-default select-none relative py-2 px-3'
                                                                )
                                                            }
                                                            value={label}
                                                        >
                                                            <div className="flex items-center">
                                                                <span className="block font-medium truncate">{label}</span>
                                                            </div>
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>

                            <Listbox as="div" value={assigned} onChange={setAssigned} className="flex-shrink-0">
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="sr-only">Add a subject</Listbox.Label>
                                        <div className="relative">
                                            <Listbox.Button className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-100 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-200 sm:px-3">
                                                <HashtagIcon
                                                    className={classNames(
                                                        assigned === null ? 'bg-textlight' : 'text-gray-500',
                                                        'flex-shrink-0 h-5 w-5 sm:-ml-1'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                <span
                                                    className={classNames(
                                                        assigned === null ? '' : 'text-textdark',
                                                        'hidden truncate sm:ml-2 sm:block'
                                                    )}
                                                >
                                                  {assigned === null ? 'Subject' : assigned}
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {subjects.map((subject) => (
                                                        <Listbox.Option
                                                            key={subject}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'bg-gray-100' : 'bg-white',
                                                                    'cursor-default select-none relative py-2 px-3'
                                                                )
                                                            }
                                                            value={subject}
                                                        >
                                                            <div className="flex items-center">
                                                                <span className="block font-medium truncate">{subject}</span>
                                                            </div>
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}