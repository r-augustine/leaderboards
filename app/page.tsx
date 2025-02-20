// import Image from "next/image";
import { boards } from "@/data/board";
import SearchList from "@/components/SearchList";

// interface User {
//   name: string,
//   points: number
// }

export const revalidate = 60

const getBoard = async () => {
  const board = boards.at(-1) ?? []
  return board.sort((a, b) => b.points - a.points)
}

export default async function Home() {
  const board = await getBoard()
  const take = (board.length) <= 2 ? 1 : 3
  const top = board.slice(0, take)
  const bottom = board.slice(take)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">

        <div className="flex items-end justify-center space-x-8 w-full mb-20">
          <div className="bg-gradient-to-b from-[#1f7159] to-[#144d3d] shadow-[0_10px_30px_rgba(255,236,188,0.5)] 
              rounded-xl p-6 text-center text-white w-40 min-h-[220px] grid grid-cols-1 items-center">
            <div>
              {/* <img src="avatar2.png" alt="Second Place" className="w-16 h-16 mx-auto rounded-full border-4 border-[#ffecbc]" /> */}
              <h3 className="mt-3 text-lg font-bold">{top[1].name}</h3>
              <p className="text-[#ffecbc] font-semibold">{top[1].points}</p>
            </div>
          </div>


          <div className="bg-gradient-to-b from-[#1f7159] to-[#0e3a2d] shadow-[0_20px_40px_rgba(255,236,188,0.8)] 
              rounded-xl p-8 text-center text-white w-40 scale-[1.25] min-h-[220px] grid grid-cols-1 items-center">
            {/* <img src="avatar1.png" alt="First Place" className="w-20 h-20 mx-auto rounded-full border-4 border-[#ffecbc]" /> */}
            <div>
              <h3 className="mt-3 text-lg font-bold">{top[0].name}</h3>
              <p className="text-[#ffecbc] font-semibold">{top[0].points}</p>
            </div>
          </div>


          <div className="bg-gradient-to-b from-[#1f7159] to-[#144d3d] shadow-[0_10px_30px_rgba(255,236,188,0.5)] 
              rounded-xl p-6 text-center text-white w-40 min-h-[220px] grid grid-cols-1 items-center">
            <div>
              {/* <img src="avatar3.png" alt="Third Place" className="w-16 h-16 mx-auto rounded-full border-4 border-[#ffecbc]" /> */}
              <h3 className="mt-3 text-lg font-bold">{top[2].name}</h3>
              <p className="text-[#ffecbc] font-semibold">{top[2].points}</p>
            </div>
          </div>

        </div>

        <SearchList data={bottom} offset={top.length} />

      </main>
    </div>
  );
}
