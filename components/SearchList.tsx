"use client"

import { useState } from "react"


export default function SearchList({ data = [], offset = 0 }: { offset: number, data: { name: string, points: number, gender: string }[] }) {
    const [term, setTerm] = useState("")
    const users = data.filter(u => u.name.toLowerCase().includes(term.toLowerCase()))

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)
    }

    return <>
        <div className="grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-[0.1fr_1fr_0.1fr] w-full my-8">
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
                    <span className="pr-4 text-[#54575C]">#{index + 1 + offset}</span>
                    <div className="flex-1">
                        <div className="pl-4 flex justify-between">
                            <span className="font-bold">{user.name}</span>
                            <span className="font-medium bg-gradient-to-b from-[#CD7D2E] to-[#BC4A1B] bg-clip-text text-transparent">{user.points}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
}