"use client"

import { useState } from "react"


export default function SearchList({ data = [], offset = 0 }: { offset: number, data: { name: string, points: number, gender: string }[] }) {
    const [term, setTerm] = useState("")
    const users = data.filter(u => u.name.toLowerCase().includes(term.toLowerCase()))

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)
    }

    return <>
        <div className="grid grid-cols-[1fr_2fr_1fr] w-full my-8">
            <div className="col-start-2">
                <input placeholder="Search..." value={term} className="w-full px-3 py-2 rounded-md" onInput={onInput} />
            </div>
        </div>
        <div className="w-full grid grid-cols-1">
            {users.length == 0 && <div className="grid grid-cols-1  odd:bg-[#fdf5e6] text-[#3c3c3c] px-5 py-5 items-center rounded-md">
                <div>User not found.</div>
            </div>}
            {users?.map((user, index) => (
                <div key={index} className="grid grid-cols-[0.08fr_2fr] divide-x divide-[#1f7159] odd:bg-[#fdf5e6] text-[#3c3c3c] px-5 py-5 items-center rounded-md">
                    <span className="pr-4">#{index + 1 + offset}</span>
                    <div className="flex-1">
                        <div className="pl-4 flex justify-between">
                            <span className="font-bold">{user.name}</span>
                            <span className="font-medium">{user.points}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
}