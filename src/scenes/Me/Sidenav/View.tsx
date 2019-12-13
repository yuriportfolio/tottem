import inboxIcon from '@iconify/icons-ic/baseline-inbox'
import profileIcon from '@iconify/icons-ic/baseline-person'
import plusIcon from '@iconify/icons-ic/baseline-plus'
import { InlineIcon } from '@iconify/react'
import archiveIcon from '@iconify/icons-ic/outline-archive'
import Link from 'next/link'
import { BulletList } from 'react-content-loader'
import SectionGroup from './SectionGroup'
import { useState } from 'react'

interface SidenavProps {
    currentHref: string
    inboxCount: number | undefined
    sections:
        | Array<{
              title: string
              id: string
              isExpanded: boolean
              collections: Array<{ title: string; id: string }>
          }>
        | undefined
}

const Sidenav: React.FC<SidenavProps> = ({
    inboxCount,
    sections,
    currentHref,
}) => {
    const bgBrand200 = `bg-brand-100`
    const [hovered, setHovered] = useState(false)

    const handleHover = (val: boolean) => {
        setHovered(val)
    }
    return (
        <nav className="leading-none font-medium w-64 p-4 bg-gray-100 text-gray-900 flex flex-col">
            <img className="h-6 self-start" src="/logo.svg" alt="Tottem logo" />
            <div className="mt-10 flex flex-col flex-1 min-h-0">
                <div className="mb-6">
                    <Link as="/" href="/">
                        <a
                            className={`block px-2 py-1 mb-1 rounded hover:${bgBrand200} cursor-pointer ${
                                currentHref === '/' ? bgBrand200 : ''
                            }`}
                        >
                            <span className="mr-1">
                                <InlineIcon
                                    className="inline"
                                    color="#BFBFBF"
                                    icon={profileIcon}
                                />
                            </span>
                            <span className="text-gray-800">Profile</span>
                        </a>
                    </Link>
                </div>
                <div className="mb-6">
                    <Link as="/me/inbox" href="/me/inbox">
                        <a
                            className={`block px-2 py-1 mb-1 rounded hover:${bgBrand200} cursor-pointer ${[
                                '/me/inbox',
                                '/me',
                            ].includes(currentHref) && bgBrand200}`}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="mr-1">
                                        <InlineIcon
                                            className="inline"
                                            color="#7DC8D4"
                                            icon={inboxIcon}
                                        />
                                    </span>
                                    <span className="text-gray-800">Inbox</span>
                                </div>
                                <div>{inboxCount}</div>
                            </div>
                        </a>
                    </Link>
                    <Link as="/me/archived" href="/me/archived">
                        <a
                            className={`block px-2 py-1 mb-1 rounded hover:${bgBrand200} cursor-pointer ${currentHref ===
                                '/me/archived' && bgBrand200}`}
                            onMouseOver={() => handleHover(true)}
                            onMouseOut={() => handleHover(false)}
                        >
                            <span className="mr-1">
                                <InlineIcon
                                    className="inline"
                                    color={hovered ? '#3F55C9' : '#A4FE4D'}
                                    icon={archiveIcon}
                                />
                            </span>
                            <span className="text-gray-800">Archived</span>
                        </a>
                    </Link>
                </div>
                <div className="text-xs text-gray-700 px-2 overflow-hidden font-semibold mb-2">
                    SPACES
                </div>
                {sections ? (
                    <div className="flex flex-col flex-1 min-h-0">
                        <div className="flex-1 overflow-y-auto">
                            {sections.map(section => {
                                return (
                                    <SectionGroup
                                        currentHref={currentHref}
                                        key={section.id}
                                        {...section}
                                        isExpanded={section.isExpanded}
                                        isActive={false}
                                    />
                                )
                            })}
                        </div>
                        <button className="w-full px-2 py-1 flex justify-center bg-white hover:bg-brand-50 text-gray-700 rounded mt-2 border border-brand-500">
                            <InlineIcon
                                className="inline mr-1"
                                icon={plusIcon}
                            />
                            New Area
                        </button>
                    </div>
                ) : (
                    <BulletList className="pl-2" />
                )}
            </div>
        </nav>
    )
}

export default Sidenav