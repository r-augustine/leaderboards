"use client"

import { useState } from "react"
import Boy from "./Boy"
import Girl from "./Girl"


export default function SearchList({ data = [] }: { data: { name: string, points: number, gender: string, rank: number }[] }) {
    const [term, setTerm] = useState("")
    const users = data.filter(u => u.name.toLowerCase().includes(term.toLowerCase()))

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)
    }

    const smallAvatar = "scale-[0.6]"

    return <>
        <div className="grid grid-cols-[0.1fr_1fr_0.1fr] sm:grid-cols-[0.3fr_2fr_0.3fr] md:grid-cols-[1fr_2fr_1fr] w-full my-8">
            <div className="col-start-2">
                <input placeholder="Search..." value={term} className="search w-full px-4 py-3 rounded-md bg-[#17181F] placeholder-[#54575C]" onInput={onInput} />
            </div>
        </div>
        <div className="w-full grid grid-cols-1">
            {users.length == 0 && <div className="grid grid-cols-1  bg-[#17181F] px-5 py-5 items-center rounded-md">
                <div>User not found.</div>
            </div>}
            {users?.map((user, index) => (
                <div key={index} className="grid grid-cols-[0.08fr_2fr] odd:bg-[#17181F] px-5 py-5 items-center rounded-md">
                    <span className="pr-4 text-[#54575C] border-r border-r-[#54575C]">#{user.rank}</span>
                    <div className="flex-1">
                        <div className="pl-4 flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <div className="relative">
                                    <svg className="absolute scale-[0.62] -top-[8px] -left-[8px]" width="84" height="97" viewBox="0 0 84 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 72.3402V24.1753L42 0.575193L83.5 24.1753V72.3402L42 96.4219L0.5 72.3402Z" stroke="#54575C" />
                                    </svg>
                                    {user.gender == "M" ? <Boy className={smallAvatar} /> : <Girl className={smallAvatar} />}
                                </div>
                                <span className="font-bold">{user.name}</span>
                            </div>
                            <span className="font-medium gradient-text">{user.points}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
}