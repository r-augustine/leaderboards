"use client"

import { useState } from "react"


export default function SearchList({ data = [] }: { data: { name: string, points: number, gender: string, rank: number }[] }) {
    const [term, setTerm] = useState("")
    const users = data.filter(u => u.name.toLowerCase().includes(term.toLowerCase()))

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)
    }

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
                    <span className="pr-4 text-[#54575C]">#{user.rank}</span>
                    <div className="flex-1">
                        <div className="pl-4 flex justify-between">
                            <span className="font-bold">{user.name}</span>
                            <span className="font-medium gradient-text">{user.points}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
}