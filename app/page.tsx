import { boards } from "@/data/board";
import SearchList from "@/components/SearchList";

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
    <div className="grid grid-rows-[40px_1fr_40px] items-start justify-items-center min-h-screen p-16 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 row-start-2 w-full max-w-12xl">

        <div className="flex items-center justify-around w-[25%] mx-auto">
          <div className="flex flex-col gap-8 items-center">
            <svg width="70" height="81" viewBox="0 0 70 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.3]">
              <path d="M0.757744 59.7898V20.048L35 0.575193L69.2423 20.048V59.7898L35 79.66L0.757744 59.7898Z" stroke="#9B9D9A" />
              <path d="M6.87532 23.1158L35 6.61758L63.1247 23.1158V56.7856L35 73.6205L6.87532 56.7856V23.1158Z" fill="#BC4A1B" />
            </svg>
            <div className="flex flex-col gap-1 items-center">
              <div className="text-lg">{top[1].name}</div>
              <div className="text-2xl tracking-wide font-bold bg-gradient-to-b from-[#CD7D2E] to-[#BC4A1B] bg-clip-text text-transparent">{top[1].points}</div>
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center">
            <svg width="84" height="97" viewBox="0 0 84 97" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.75]">
              <path d="M0.5 72.3402V24.1753L42 0.575193L83.5 24.1753V72.3402L42 96.4219L0.5 72.3402Z" stroke="#F8B559" />
              <path d="M8 27.9447L42 8L76 27.9447V68.6482L42 89L8 68.6482V27.9447Z" fill="#BC4A1B" />
            </svg>
            <div className="flex flex-col gap-1 items-center">
              <div className="text-lg">{top[0].name}</div>
              <div className="text-2xl tracking-wide font-bold bg-gradient-to-b from-[#CD7D2E] to-[#BC4A1B] bg-clip-text text-transparent">{top[0].points}</div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <svg width="70" height="81" viewBox="0 0 70 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.3]">
              <path d="M0.757744 59.7898V20.048L35 0.575194L69.2423 20.048V59.7898L35 79.66L0.757744 59.7898Z" stroke="#DE640C" />
              <path d="M6.87532 23.1158L35 6.61758L63.1247 23.1158V56.7856L35 73.6205L6.87532 56.7856V23.1158Z" fill="#BC4A1B" />
            </svg>
            <div className="flex flex-col gap-1 items-center">
              <div className="text-lg">{top[2].name}</div>
              <div className="text-2xl tracking-wide font-bold bg-gradient-to-b from-[#CD7D2E] to-[#BC4A1B] bg-clip-text text-transparent">{top[2].points}</div>
            </div>
          </div>
        </div>

        <SearchList data={bottom} offset={top.length} />

      </main>
    </div>
  );
}
