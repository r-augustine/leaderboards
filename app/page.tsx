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
    <div className="grid grid-rows-[40px_1fr_40px] items-start justify-items-center min-h-screen pb-20 gap-4 p-4 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 lg:gap-20 row-start-2 w-full max-w-12xl">

        <div className="flex items-center justify-around w-[100%] md:w-[80%] lg:w-[70%] 2xl:w-[40%] mx-auto">
          <svg width="100" height="205" viewBox="0 0 100 205" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.2] md:scale-[1.5] lg:scale-[1.6]">
            <path fillRule="evenodd" clipRule="evenodd" d="M73.8719 3.75467C71.7059 6.32815 70.7125 8.94313 70.7125 12.0706C70.7125 16.0718 70.1939 16.8783 66.4878 18.6465L62.2619 20.6611L63.4065 17.652C64.5683 14.5953 63.8031 7.72045 62.1899 6.72351C61.703 6.42211 60.0214 7.54229 58.4521 9.2128C56.2128 11.5959 55.599 13.6215 55.599 18.6269C55.599 23.5689 55.0352 25.4761 53.0888 27.1039C49.8244 29.8336 48.8372 29.8129 49.5657 27.0307C49.8891 25.7897 49.2521 22.633 48.1477 20.0143L46.1403 15.253L43.7827 18.134C41.2359 21.2456 40.5989 29.1222 42.5929 32.8488C43.5044 34.551 42.9834 35.7762 40.2255 38.418C37.4029 41.1208 36.8062 41.3417 37.265 39.5113C37.9899 36.6254 33.7737 28.6756 31.5173 28.6756C30.5911 28.6756 29.3366 30.6817 28.7301 33.1331C27.8515 36.6889 28.1212 38.5852 30.0639 42.5107L32.4985 47.4307L29.9443 51.4757L27.3914 55.5208L27.0217 52.3311C26.6532 49.1561 20.0952 41.665 18.8102 42.9512C18.438 43.3221 17.8376 45.4783 17.474 47.743C16.9663 50.912 17.5679 52.9681 20.0903 56.6715C23.1777 61.2059 23.2741 61.7672 21.7817 66.4334C20.5248 70.3589 20.105 70.8275 19.7511 68.697C19.5058 67.2193 17.319 64.2663 14.8906 62.1345L10.4767 58.259L9.44554 61.0473C8.02022 64.8984 10.3498 71.2997 14.4244 74.7286C17.341 77.1813 17.6387 78.0452 16.7528 81.4643L15.7362 85.3862L12.4121 81.8365C10.5829 79.8841 7.85181 77.9317 6.34107 77.4985C3.88458 76.7932 3.59781 77.1361 3.62221 80.759C3.65272 85.219 6.09823 88.8736 11.2223 92.1158C13.857 93.7826 14.5782 95.1725 14.5782 98.5818V102.926L11.8325 100.354C9.22589 97.9119 3.54411 95.1786 1.07542 95.1786C-0.57444 95.1786 -0.331598 97.2993 1.843 101.883C3.0328 104.39 5.78949 106.986 9.16487 108.776C12.1424 110.356 14.5782 112.29 14.5782 113.075C14.5782 113.86 14.9382 115.439 15.3775 116.585C16.1109 118.497 15.9376 118.516 13.2419 116.805C9.6896 114.55 2.90345 113.011 1.18891 114.072C-0.798977 115.299 3.22683 121.835 7.62117 124.513C9.76892 125.824 12.777 126.897 14.3036 126.9C16.1573 126.904 17.474 127.943 18.2696 130.035C19.889 134.295 19.8096 134.5 17.0993 133.049C14.0961 131.442 3.59537 131.394 3.59537 132.986C3.59537 133.648 5.13784 135.914 7.02322 138.025C9.81896 141.152 11.813 142.268 17.0188 142.768C22.4626 143.29 21.9001 141.548 24.9728 146.471L26.7227 149.855L23.2009 148.526C20.5931 147.541 18.3807 147.585 14.6734 148.696C10.3718 149.984 9.83604 150.509 10.8611 152.424C12.777 156.005 20.1782 158.864 26.381 158.419C30.9767 158.089 32.2373 158.477 33.7151 160.675C35.3796 163.151 35.3271 163.285 32.9341 162.659C29.7393 161.823 19.18 165.725 19.7791 167.52C20.0208 168.248 22.2893 169.916 24.8215 171.229C28.9742 173.385 30.0822 173.47 36.1838 172.104C42.3244 170.73 43.153 170.798 45.197 172.848C47.385 175.042 47.3509 175.108 43.9596 175.227C40.4537 175.351 31.6625 179.992 31.6625 181.719C31.6625 183.301 37.6775 185.476 42.0511 185.476C44.3465 185.476 48.1551 184.555 50.5164 183.429C54.3018 181.624 55.1975 181.589 58.0945 183.124L61.3808 184.866L58.2373 185.241C54.7081 185.66 45.2263 193.294 46.5516 194.649C47.0214 195.131 49.8135 195.796 52.7556 196.128C58.0286 196.722 63.8275 194.773 68.2719 190.914C69.779 189.605 70.6417 189.624 73.1531 191.019C75.6829 192.422 75.8122 192.718 73.9073 192.755C71.2604 192.804 63.3907 200.663 63.3907 203.256C63.3907 204.481 64.8648 205 68.3524 205C74.1306 205 77.2131 203.62 82.4153 198.702C85.9676 195.344 86.4972 195.21 91.5676 196.379C99.1202 198.119 100 198.001 100 195.238C100 193.526 99.1812 192.793 97.2543 192.781C91.6006 192.746 89.0172 191.376 89.0172 188.41C89.0172 183.081 85.233 175.838 81.123 173.297C78.9301 171.943 76.7897 170.833 76.365 170.833C74.8738 170.833 75.6279 181.243 77.3596 184.561C79.09 187.878 78.6043 188.527 75.3326 187.271C74.2148 186.843 73.8133 185.235 74.1355 182.478C74.4027 180.196 74 176.449 73.241 174.15C71.7083 169.508 66.644 164.085 64.866 165.185C62.7414 166.498 62.2143 174.678 63.9825 178.908L65.6922 183L62.8317 181.127C60.2252 179.419 60.0299 178.621 60.6218 172.091C61.1636 166.11 60.8256 164.209 58.5704 160.56C57.0853 158.156 55.4537 156.19 54.9449 156.19C53.173 156.19 51.1875 162.445 51.1875 168.029C51.1875 173.54 51.1399 173.608 48.7921 171.485C46.5979 169.5 46.5467 169.026 48.1819 165.865C50.7348 160.927 50.4737 152.205 47.6682 148.741L45.3703 145.903L42.7918 150.132C41.3738 152.458 40.212 156.267 40.2096 158.598L40.2047 162.835L38.2193 160C36.3583 157.345 36.3974 156.871 38.8294 152.546C42.865 145.365 41.9241 134.058 37.4334 135.781C36.4449 136.16 34.418 138.986 32.9292 142.063C31.4392 145.139 29.721 147.347 29.1109 146.97C27.295 145.848 27.8051 144.238 31.6625 138.913C34.3948 135.143 35.3235 132.513 35.3235 128.552C35.3235 125.105 34.789 123.254 33.7981 123.271C31.1293 123.318 26.9399 127.377 25.1717 131.63L23.4596 135.744L22.6518 132.523C21.9757 129.832 22.6518 128.533 26.7532 124.631C30.9487 120.64 31.6625 119.223 31.6625 114.892C31.6625 112.103 31.2513 109.824 30.7473 109.826C28.8827 109.835 21.7951 114.778 21.1178 116.54C20.0562 119.308 18.2354 118.718 18.266 115.618C18.2843 113.731 19.5217 112.299 22.2198 111.042C29.0401 107.864 34.7658 96.3927 29.527 96.4037C26.2383 96.4098 19.5034 100.977 18.2745 104.033C17.3556 106.319 17.1604 105.915 17.0957 101.585C17.0383 97.6959 17.4886 96.3988 18.8981 96.3988C22.4992 96.3988 29.9712 91.6911 31.4221 88.5075C32.2251 86.7443 32.8829 84.7785 32.8829 84.1391C32.8829 82.3478 27.0754 82.7614 23.0593 84.8383C21.08 85.8621 19.4594 87.3263 19.4594 88.0914C19.4594 88.8577 19.1812 89.2055 18.8407 88.8651C18.5003 88.5258 18.5588 86.5661 18.9701 84.51C19.6229 81.2435 20.3515 80.676 24.7739 79.9878C30.491 79.0995 32.7645 77.6669 35.7603 73.0618C37.769 69.9758 37.7519 69.8354 35.3113 69.1973C32.3691 68.4273 26.1321 70.0014 23.5145 72.1734C21.922 73.4949 21.9061 73.1826 23.3803 69.5707C24.9069 65.8282 25.5402 65.4462 30.5716 65.2339C36.9343 64.9667 40.8185 63.2035 42.6698 59.7453C43.6948 57.832 43.5581 57.1572 42.0315 56.5702C40.9638 56.1615 37.6555 56.1004 34.6779 56.436L29.2634 57.0461L31.2598 53.6673C33.0513 50.635 33.6175 50.4129 36.761 51.5087C41.3445 53.106 47.85 51.8235 50.6054 48.7778C51.8123 47.4453 52.5738 46.164 52.2992 45.9322C52.0234 45.7004 49.9928 44.9023 47.7865 44.1568C45.1409 43.2648 42.7393 43.1977 40.7356 43.9591C38.0252 44.989 37.8251 44.8743 38.8843 42.895C41.336 38.3155 43.2128 37.6785 48.1648 39.748C53.2816 41.8859 59.7993 41.2953 62.1337 38.4814C63.2857 37.094 62.8464 36.3887 59.8762 34.8524C57.8492 33.8043 54.6679 32.9464 52.8069 32.9464H49.4254L52.1003 30.2717L54.7752 27.5969L60.3765 30.3937C64.5133 32.4596 67.0748 32.9843 70.1756 32.4034C72.4844 31.9702 74.3735 31.1771 74.3735 30.6402C74.3735 29.1551 69.6533 25.2028 66.19 23.7873L63.1088 22.528L66.3145 20.8112C69.2835 19.2224 69.7729 19.3359 72.9066 22.3389C76.7104 25.9825 82.8534 27.6848 85.9493 25.952C87.77 24.9331 87.5638 24.3584 84.1469 20.9417C82.0236 18.8197 79.14 17.0833 77.7366 17.0833C76.3345 17.0833 75.5486 16.7221 75.9916 16.2792C76.4333 15.8375 79.4072 15.5532 82.6008 15.6496C86.6559 15.7704 89.3223 15.1175 91.4395 13.4861C93.1077 12.2012 94.1657 10.843 93.7911 10.4684C93.4164 10.0938 91.503 9.46539 89.5383 9.07247C86.9158 8.54899 84.7656 9.17375 81.4452 11.4263L76.9239 14.494L78.8642 10.4269C80.7972 6.37452 80.342 0 78.1198 0C77.5206 0 75.6096 1.69003 73.8719 3.75467Z" fill="url(#paint0_linear_116_76)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M73.8719 3.75467C71.7059 6.32815 70.7125 8.94313 70.7125 12.0706C70.7125 16.0718 70.1939 16.8783 66.4878 18.6465L62.2619 20.6611L63.4065 17.652C64.5683 14.5953 63.8031 7.72045 62.1899 6.72351C61.703 6.42211 60.0214 7.54229 58.4521 9.2128C56.2128 11.5959 55.599 13.6215 55.599 18.6269C55.599 23.5689 55.0352 25.4761 53.0888 27.1039C49.8244 29.8336 48.8372 29.8129 49.5657 27.0307C49.8891 25.7897 49.2521 22.633 48.1477 20.0143L46.1403 15.253L43.7827 18.134C41.2359 21.2456 40.5989 29.1222 42.5929 32.8488C43.5044 34.551 42.9834 35.7762 40.2255 38.418C37.4029 41.1208 36.8062 41.3417 37.265 39.5113C37.9899 36.6254 33.7737 28.6756 31.5173 28.6756C30.5911 28.6756 29.3366 30.6817 28.7301 33.1331C27.8515 36.6889 28.1212 38.5852 30.0639 42.5107L32.4985 47.4307L29.9443 51.4757L27.3914 55.5208L27.0217 52.3311C26.6532 49.1561 20.0952 41.665 18.8102 42.9512C18.438 43.3221 17.8376 45.4783 17.474 47.743C16.9663 50.912 17.5679 52.9681 20.0903 56.6715C23.1777 61.2059 23.2741 61.7672 21.7817 66.4334C20.5248 70.3589 20.105 70.8275 19.7511 68.697C19.5058 67.2193 17.319 64.2663 14.8906 62.1345L10.4767 58.259L9.44554 61.0473C8.02022 64.8984 10.3498 71.2997 14.4244 74.7286C17.341 77.1813 17.6387 78.0452 16.7528 81.4643L15.7362 85.3862L12.4121 81.8365C10.5829 79.8841 7.85181 77.9317 6.34107 77.4985C3.88458 76.7932 3.59781 77.1361 3.62221 80.759C3.65272 85.219 6.09823 88.8736 11.2223 92.1158C13.857 93.7826 14.5782 95.1725 14.5782 98.5818V102.926L11.8325 100.354C9.22589 97.9119 3.54411 95.1786 1.07542 95.1786C-0.57444 95.1786 -0.331598 97.2993 1.843 101.883C3.0328 104.39 5.78949 106.986 9.16487 108.776C12.1424 110.356 14.5782 112.29 14.5782 113.075C14.5782 113.86 14.9382 115.439 15.3775 116.585C16.1109 118.497 15.9376 118.516 13.2419 116.805C9.6896 114.55 2.90345 113.011 1.18891 114.072C-0.798977 115.299 3.22683 121.835 7.62117 124.513C9.76892 125.824 12.777 126.897 14.3036 126.9C16.1573 126.904 17.474 127.943 18.2696 130.035C19.889 134.295 19.8096 134.5 17.0993 133.049C14.0961 131.442 3.59537 131.394 3.59537 132.986C3.59537 133.648 5.13784 135.914 7.02322 138.025C9.81896 141.152 11.813 142.268 17.0188 142.768C22.4626 143.29 21.9001 141.548 24.9728 146.471L26.7227 149.855L23.2009 148.526C20.5931 147.541 18.3807 147.585 14.6734 148.696C10.3718 149.984 9.83604 150.509 10.8611 152.424C12.777 156.005 20.1782 158.864 26.381 158.419C30.9767 158.089 32.2373 158.477 33.7151 160.675C35.3796 163.151 35.3271 163.285 32.9341 162.659C29.7393 161.823 19.18 165.725 19.7791 167.52C20.0208 168.248 22.2893 169.916 24.8215 171.229C28.9742 173.385 30.0822 173.47 36.1838 172.104C42.3244 170.73 43.153 170.798 45.197 172.848C47.385 175.042 47.3509 175.108 43.9596 175.227C40.4537 175.351 31.6625 179.992 31.6625 181.719C31.6625 183.301 37.6775 185.476 42.0511 185.476C44.3465 185.476 48.1551 184.555 50.5164 183.429C54.3018 181.624 55.1975 181.589 58.0945 183.124L61.3808 184.866L58.2373 185.241C54.7081 185.66 45.2263 193.294 46.5516 194.649C47.0214 195.131 49.8135 195.796 52.7556 196.128C58.0286 196.722 63.8275 194.773 68.2719 190.914C69.779 189.605 70.6417 189.624 73.1531 191.019C75.6829 192.422 75.8122 192.718 73.9073 192.755C71.2604 192.804 63.3907 200.663 63.3907 203.256C63.3907 204.481 64.8648 205 68.3524 205C74.1306 205 77.2131 203.62 82.4153 198.702C85.9676 195.344 86.4972 195.21 91.5676 196.379C99.1202 198.119 100 198.001 100 195.238C100 193.526 99.1812 192.793 97.2543 192.781C91.6006 192.746 89.0172 191.376 89.0172 188.41C89.0172 183.081 85.233 175.838 81.123 173.297C78.9301 171.943 76.7897 170.833 76.365 170.833C74.8738 170.833 75.6279 181.243 77.3596 184.561C79.09 187.878 78.6043 188.527 75.3326 187.271C74.2148 186.843 73.8133 185.235 74.1355 182.478C74.4027 180.196 74 176.449 73.241 174.15C71.7083 169.508 66.644 164.085 64.866 165.185C62.7414 166.498 62.2143 174.678 63.9825 178.908L65.6922 183L62.8317 181.127C60.2252 179.419 60.0299 178.621 60.6218 172.091C61.1636 166.11 60.8256 164.209 58.5704 160.56C57.0853 158.156 55.4537 156.19 54.9449 156.19C53.173 156.19 51.1875 162.445 51.1875 168.029C51.1875 173.54 51.1399 173.608 48.7921 171.485C46.5979 169.5 46.5467 169.026 48.1819 165.865C50.7348 160.927 50.4737 152.205 47.6682 148.741L45.3703 145.903L42.7918 150.132C41.3738 152.458 40.212 156.267 40.2096 158.598L40.2047 162.835L38.2193 160C36.3583 157.345 36.3974 156.871 38.8294 152.546C42.865 145.365 41.9241 134.058 37.4334 135.781C36.4449 136.16 34.418 138.986 32.9292 142.063C31.4392 145.139 29.721 147.347 29.1109 146.97C27.295 145.848 27.8051 144.238 31.6625 138.913C34.3948 135.143 35.3235 132.513 35.3235 128.552C35.3235 125.105 34.789 123.254 33.7981 123.271C31.1293 123.318 26.9399 127.377 25.1717 131.63L23.4596 135.744L22.6518 132.523C21.9757 129.832 22.6518 128.533 26.7532 124.631C30.9487 120.64 31.6625 119.223 31.6625 114.892C31.6625 112.103 31.2513 109.824 30.7473 109.826C28.8827 109.835 21.7951 114.778 21.1178 116.54C20.0562 119.308 18.2354 118.718 18.266 115.618C18.2843 113.731 19.5217 112.299 22.2198 111.042C29.0401 107.864 34.7658 96.3927 29.527 96.4037C26.2383 96.4098 19.5034 100.977 18.2745 104.033C17.3556 106.319 17.1604 105.915 17.0957 101.585C17.0383 97.6959 17.4886 96.3988 18.8981 96.3988C22.4992 96.3988 29.9712 91.6911 31.4221 88.5075C32.2251 86.7443 32.8829 84.7785 32.8829 84.1391C32.8829 82.3478 27.0754 82.7614 23.0593 84.8383C21.08 85.8621 19.4594 87.3263 19.4594 88.0914C19.4594 88.8577 19.1812 89.2055 18.8407 88.8651C18.5003 88.5258 18.5588 86.5661 18.9701 84.51C19.6229 81.2435 20.3515 80.676 24.7739 79.9878C30.491 79.0995 32.7645 77.6669 35.7603 73.0618C37.769 69.9758 37.7519 69.8354 35.3113 69.1973C32.3691 68.4273 26.1321 70.0014 23.5145 72.1734C21.922 73.4949 21.9061 73.1826 23.3803 69.5707C24.9069 65.8282 25.5402 65.4462 30.5716 65.2339C36.9343 64.9667 40.8185 63.2035 42.6698 59.7453C43.6948 57.832 43.5581 57.1572 42.0315 56.5702C40.9638 56.1615 37.6555 56.1004 34.6779 56.436L29.2634 57.0461L31.2598 53.6673C33.0513 50.635 33.6175 50.4129 36.761 51.5087C41.3445 53.106 47.85 51.8235 50.6054 48.7778C51.8123 47.4453 52.5738 46.164 52.2992 45.9322C52.0234 45.7004 49.9928 44.9023 47.7865 44.1568C45.1409 43.2648 42.7393 43.1977 40.7356 43.9591C38.0252 44.989 37.8251 44.8743 38.8843 42.895C41.336 38.3155 43.2128 37.6785 48.1648 39.748C53.2816 41.8859 59.7993 41.2953 62.1337 38.4814C63.2857 37.094 62.8464 36.3887 59.8762 34.8524C57.8492 33.8043 54.6679 32.9464 52.8069 32.9464H49.4254L52.1003 30.2717L54.7752 27.5969L60.3765 30.3937C64.5133 32.4596 67.0748 32.9843 70.1756 32.4034C72.4844 31.9702 74.3735 31.1771 74.3735 30.6402C74.3735 29.1551 69.6533 25.2028 66.19 23.7873L63.1088 22.528L66.3145 20.8112C69.2835 19.2224 69.7729 19.3359 72.9066 22.3389C76.7104 25.9825 82.8534 27.6848 85.9493 25.952C87.77 24.9331 87.5638 24.3584 84.1469 20.9417C82.0236 18.8197 79.14 17.0833 77.7366 17.0833C76.3345 17.0833 75.5486 16.7221 75.9916 16.2792C76.4333 15.8375 79.4072 15.5532 82.6008 15.6496C86.6559 15.7704 89.3223 15.1175 91.4395 13.4861C93.1077 12.2012 94.1657 10.843 93.7911 10.4684C93.4164 10.0938 91.503 9.46539 89.5383 9.07247C86.9158 8.54899 84.7656 9.17375 81.4452 11.4263L76.9239 14.494L78.8642 10.4269C80.7972 6.37452 80.342 0 78.1198 0C77.5206 0 75.6096 1.69003 73.8719 3.75467Z" fill="url(#paint1_radial_116_76)" fillOpacity="0.2" />
            <defs>
              <linearGradient id="paint0_linear_116_76" x1="50" y1="0" x2="50" y2="205" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EED273" />
                <stop offset="1" stopColor="#9E3900" />
              </linearGradient>
              <radialGradient id="paint1_radial_116_76" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 102.5) rotate(147.204) scale(118.275 57.69)">
                <stop stopColor="#FFF882" />
                <stop offset="1" stopColor="#EECF7F" />
              </radialGradient>
            </defs>
          </svg>
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
          <svg width="100" height="205" viewBox="0 0 100 205" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.2] md:scale-[1.5] lg:scale-[1.6]">
            <path fillRule="evenodd" clipRule="evenodd" d="M26.1281 3.75467C28.2942 6.32815 29.2875 8.94313 29.2875 12.0706C29.2875 16.0718 29.8061 16.8783 33.5122 18.6465L37.7381 20.6611L36.5935 17.652C35.4317 14.5953 36.1969 7.72045 37.8101 6.72351C38.297 6.42211 39.9786 7.54229 41.5479 9.2128C43.7872 11.5959 44.401 13.6215 44.401 18.6269C44.401 23.5689 44.9648 25.4761 46.9112 27.1039C50.1756 29.8336 51.1628 29.8129 50.4343 27.0307C50.1109 25.7897 50.7479 22.633 51.8523 20.0143L53.8597 15.253L56.2173 18.134C58.7641 21.2456 59.4011 29.1222 57.4071 32.8488C56.4956 34.551 57.0166 35.7762 59.7745 38.418C62.5971 41.1208 63.1938 41.3417 62.735 39.5113C62.0101 36.6254 66.2263 28.6756 68.4827 28.6756C69.4089 28.6756 70.6634 30.6817 71.2699 33.1331C72.1485 36.6889 71.8788 38.5851 69.9361 42.5107L67.5015 47.4307L70.0557 51.4757L72.6086 55.5208L72.9783 52.3311C73.3468 49.1561 79.9048 41.665 81.1898 42.9512C81.562 43.3221 82.1624 45.4783 82.526 47.743C83.0337 50.912 82.4321 52.9681 79.9097 56.6715C76.8223 61.2059 76.7259 61.7672 78.2183 66.4334C79.4752 70.3589 79.895 70.8275 80.2489 68.697C80.4942 67.2193 82.681 64.2663 85.1094 62.1345L89.5233 58.259L90.5545 61.0473C91.9798 64.8984 89.6502 71.2997 85.5756 74.7286C82.659 77.1813 82.3613 78.0452 83.2472 81.4643L84.2638 85.3862L87.5879 81.8365C89.4171 79.8841 92.1482 77.9317 93.6589 77.4985C96.1154 76.7932 96.4022 77.1361 96.3778 80.759C96.3473 85.219 93.9018 88.8736 88.7777 92.1158C86.143 93.7826 85.4218 95.1725 85.4218 98.5818V102.926L88.1675 100.354C90.7741 97.9119 96.4559 95.1786 98.9246 95.1786C100.574 95.1786 100.332 97.2993 98.157 101.883C96.9672 104.39 94.2105 106.986 90.8351 108.776C87.8576 110.356 85.4218 112.29 85.4218 113.075C85.4218 113.86 85.0618 115.439 84.6225 116.585C83.8891 118.497 84.0624 118.516 86.7581 116.805C90.3104 114.55 97.0966 113.011 98.8111 114.072C100.799 115.299 96.7732 121.835 92.3788 124.513C90.2311 125.824 87.223 126.897 85.6964 126.9C83.8427 126.904 82.526 127.943 81.7304 130.035C80.111 134.295 80.1904 134.5 82.9007 133.049C85.9039 131.442 96.4046 131.394 96.4046 132.986C96.4046 133.648 94.8622 135.914 92.9768 138.025C90.181 141.152 88.187 142.268 82.9812 142.768C77.5374 143.29 78.0999 141.548 75.0272 146.471L73.2773 149.855L76.7991 148.526C79.4069 147.541 81.6193 147.585 85.3266 148.696C89.6282 149.984 90.164 150.509 89.1389 152.424C87.223 156.005 79.8218 158.864 73.619 158.419C69.0233 158.089 67.7627 158.477 66.2849 160.675C64.6204 163.151 64.6729 163.285 67.0659 162.659C70.2607 161.823 80.82 165.725 80.2209 167.52C79.9792 168.248 77.7107 169.916 75.1785 171.229C71.0258 173.385 69.9178 173.47 63.8162 172.104C57.6756 170.73 56.847 170.798 54.803 172.848C52.615 175.042 52.6491 175.108 56.0404 175.227C59.5463 175.351 68.3375 179.992 68.3375 181.719C68.3375 183.301 62.3225 185.476 57.9489 185.476C55.6535 185.476 51.8449 184.555 49.4836 183.429C45.6982 181.624 44.8025 181.589 41.9055 183.124L38.6192 184.866L41.7627 185.241C45.2919 185.66 54.7737 193.294 53.4484 194.649C52.9786 195.131 50.1865 195.796 47.2444 196.128C41.9714 196.722 36.1725 194.773 31.7281 190.914C30.221 189.605 29.3583 189.624 26.8469 191.019C24.3171 192.422 24.1878 192.718 26.0927 192.755C28.7396 192.804 36.6093 200.663 36.6093 203.256C36.6093 204.481 35.1352 205 31.6476 205C25.8694 205 22.7869 203.62 17.5847 198.702C14.0324 195.344 13.5028 195.21 8.43236 196.379C0.879848 198.119 0 198.001 0 195.238C0 193.526 0.818825 192.793 2.7457 192.781C8.3994 192.746 10.9828 191.376 10.9828 188.41C10.9828 183.081 14.767 175.838 18.877 173.297C21.0699 171.943 23.2103 170.833 23.635 170.833C25.1262 170.833 24.3721 181.243 22.6404 184.561C20.91 187.878 21.3957 188.527 24.6674 187.271C25.7852 186.843 26.1867 185.235 25.8645 182.478C25.5973 180.196 26 176.449 26.759 174.15C28.2917 169.508 33.356 164.085 35.134 165.185C37.2586 166.498 37.7857 174.678 36.0175 178.908L34.3078 183L37.1683 181.127C39.7748 179.419 39.9701 178.621 39.3782 172.091C38.8364 166.11 39.1744 164.209 41.4296 160.56C42.9147 158.156 44.5463 156.19 45.0551 156.19C46.827 156.19 48.8125 162.445 48.8125 168.029C48.8125 173.54 48.8601 173.608 51.2079 171.485C53.4021 169.5 53.4533 169.026 51.8181 165.865C49.2652 160.927 49.5264 152.205 52.3318 148.741L54.6297 145.903L57.2082 150.132C58.6262 152.458 59.788 156.267 59.7904 158.598L59.7953 162.835L61.7807 160C63.6417 157.345 63.6026 156.871 61.1706 152.546C57.135 145.365 58.0759 134.058 62.5666 135.781C63.5551 136.16 65.582 138.986 67.0708 142.063C68.5608 145.139 70.279 147.347 70.8891 146.97C72.705 145.848 72.1949 144.238 68.3375 138.913C65.6052 135.143 64.6765 132.513 64.6765 128.552C64.6765 125.105 65.211 123.254 66.2019 123.271C68.8707 123.318 73.0601 127.377 74.8283 131.63L76.5404 135.744L77.3482 132.523C78.0243 129.832 77.3482 128.533 73.2468 124.631C69.0513 120.64 68.3375 119.223 68.3375 114.892C68.3375 112.103 68.7487 109.824 69.2527 109.826C71.1173 109.835 78.2049 114.778 78.8822 116.54C79.9438 119.308 81.7646 118.718 81.734 115.618C81.7157 113.731 80.4783 112.299 77.7802 111.042C70.9599 107.864 65.2342 96.3927 70.473 96.4037C73.7617 96.4098 80.4966 100.977 81.7255 104.033C82.6444 106.319 82.8396 105.915 82.9043 101.585C82.9617 97.6959 82.5114 96.3988 81.1019 96.3988C77.5008 96.3988 70.0288 91.6911 68.5779 88.5075C67.7749 86.7443 67.1171 84.7785 67.1171 84.1391C67.1171 82.3478 72.9246 82.7614 76.9407 84.8383C78.92 85.8621 80.5406 87.3263 80.5406 88.0914C80.5406 88.8577 80.8188 89.2055 81.1593 88.8651C81.4997 88.5258 81.4412 86.5661 81.0299 84.51C80.3771 81.2435 79.6485 80.676 75.2261 79.9878C69.509 79.0995 67.2355 77.6669 64.2397 73.0618C62.231 69.9758 62.2481 69.8354 64.6887 69.1973C67.6309 68.4273 73.8679 70.0014 76.4855 72.1734C78.078 73.4949 78.0939 73.1826 76.6197 69.5707C75.0931 65.8282 74.4598 65.4462 69.4284 65.2339C63.0657 64.9667 59.1815 63.2035 57.3302 59.7453C56.3052 57.832 56.4419 57.1572 57.9685 56.5702C59.0362 56.1615 62.3445 56.1004 65.3221 56.436L70.7366 57.0461L68.7402 53.6673C66.9487 50.635 66.3825 50.4129 63.239 51.5087C58.6555 53.106 52.15 51.8235 49.3946 48.7778C48.1877 47.4453 47.4262 46.164 47.7008 45.9322C47.9766 45.7004 50.0072 44.9023 52.2135 44.1568C54.8591 43.2648 57.2607 43.1977 59.2644 43.9591C61.9748 44.989 62.1749 44.8743 61.1157 42.895C58.6641 38.3155 56.7872 37.6785 51.8352 39.748C46.7184 41.8859 40.2007 41.2953 37.8663 38.4814C36.7143 37.094 37.1536 36.3887 40.1238 34.8524C42.1508 33.8043 45.3321 32.9464 47.1931 32.9464H50.5746L47.8997 30.2717L45.2248 27.5969L39.6235 30.3937C35.4867 32.4596 32.9252 32.9843 29.8244 32.4034C27.5156 31.9702 25.6265 31.1771 25.6265 30.6402C25.6265 29.1551 30.3467 25.2028 33.81 23.7873L36.8912 22.528L33.6855 20.8112C30.7165 19.2224 30.2271 19.3359 27.0934 22.3389C23.2896 25.9825 17.1466 27.6848 14.0507 25.952C12.23 24.9331 12.4362 24.3584 15.8531 20.9417C17.9764 18.8197 20.86 17.0833 22.2634 17.0833C23.6655 17.0833 24.4514 16.7221 24.0084 16.2792C23.5667 15.8375 20.5928 15.5532 17.3992 15.6496C13.3441 15.7704 10.6777 15.1175 8.56049 13.4861C6.89232 12.2012 5.8343 10.843 6.20894 10.4684C6.58357 10.0938 8.49703 9.46539 10.4617 9.07247C13.0842 8.54899 15.2344 9.17375 18.5548 11.4263L23.0761 14.494L21.1358 10.4269C19.2028 6.37452 19.658 0 21.8802 0C22.4794 0 24.3904 1.69003 26.1281 3.75467Z" fill="url(#paint0_linear_116_78)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M26.1281 3.75467C28.2942 6.32815 29.2875 8.94313 29.2875 12.0706C29.2875 16.0718 29.8061 16.8783 33.5122 18.6465L37.7381 20.6611L36.5935 17.652C35.4317 14.5953 36.1969 7.72045 37.8101 6.72351C38.297 6.42211 39.9786 7.54229 41.5479 9.2128C43.7872 11.5959 44.401 13.6215 44.401 18.6269C44.401 23.5689 44.9648 25.4761 46.9112 27.1039C50.1756 29.8336 51.1628 29.8129 50.4343 27.0307C50.1109 25.7897 50.7479 22.633 51.8523 20.0143L53.8597 15.253L56.2173 18.134C58.7641 21.2456 59.4011 29.1222 57.4071 32.8488C56.4956 34.551 57.0166 35.7762 59.7745 38.418C62.5971 41.1208 63.1938 41.3417 62.735 39.5113C62.0101 36.6254 66.2263 28.6756 68.4827 28.6756C69.4089 28.6756 70.6634 30.6817 71.2699 33.1331C72.1485 36.6889 71.8788 38.5851 69.9361 42.5107L67.5015 47.4307L70.0557 51.4757L72.6086 55.5208L72.9783 52.3311C73.3468 49.1561 79.9048 41.665 81.1898 42.9512C81.562 43.3221 82.1624 45.4783 82.526 47.743C83.0337 50.912 82.4321 52.9681 79.9097 56.6715C76.8223 61.2059 76.7259 61.7672 78.2183 66.4334C79.4752 70.3589 79.895 70.8275 80.2489 68.697C80.4942 67.2193 82.681 64.2663 85.1094 62.1345L89.5233 58.259L90.5545 61.0473C91.9798 64.8984 89.6502 71.2997 85.5756 74.7286C82.659 77.1813 82.3613 78.0452 83.2472 81.4643L84.2638 85.3862L87.5879 81.8365C89.4171 79.8841 92.1482 77.9317 93.6589 77.4985C96.1154 76.7932 96.4022 77.1361 96.3778 80.759C96.3473 85.219 93.9018 88.8736 88.7777 92.1158C86.143 93.7826 85.4218 95.1725 85.4218 98.5818V102.926L88.1675 100.354C90.7741 97.9119 96.4559 95.1786 98.9246 95.1786C100.574 95.1786 100.332 97.2993 98.157 101.883C96.9672 104.39 94.2105 106.986 90.8351 108.776C87.8576 110.356 85.4218 112.29 85.4218 113.075C85.4218 113.86 85.0618 115.439 84.6225 116.585C83.8891 118.497 84.0624 118.516 86.7581 116.805C90.3104 114.55 97.0966 113.011 98.8111 114.072C100.799 115.299 96.7732 121.835 92.3788 124.513C90.2311 125.824 87.223 126.897 85.6964 126.9C83.8427 126.904 82.526 127.943 81.7304 130.035C80.111 134.295 80.1904 134.5 82.9007 133.049C85.9039 131.442 96.4046 131.394 96.4046 132.986C96.4046 133.648 94.8622 135.914 92.9768 138.025C90.181 141.152 88.187 142.268 82.9812 142.768C77.5374 143.29 78.0999 141.548 75.0272 146.471L73.2773 149.855L76.7991 148.526C79.4069 147.541 81.6193 147.585 85.3266 148.696C89.6282 149.984 90.164 150.509 89.1389 152.424C87.223 156.005 79.8218 158.864 73.619 158.419C69.0233 158.089 67.7627 158.477 66.2849 160.675C64.6204 163.151 64.6729 163.285 67.0659 162.659C70.2607 161.823 80.82 165.725 80.2209 167.52C79.9792 168.248 77.7107 169.916 75.1785 171.229C71.0258 173.385 69.9178 173.47 63.8162 172.104C57.6756 170.73 56.847 170.798 54.803 172.848C52.615 175.042 52.6491 175.108 56.0404 175.227C59.5463 175.351 68.3375 179.992 68.3375 181.719C68.3375 183.301 62.3225 185.476 57.9489 185.476C55.6535 185.476 51.8449 184.555 49.4836 183.429C45.6982 181.624 44.8025 181.589 41.9055 183.124L38.6192 184.866L41.7627 185.241C45.2919 185.66 54.7737 193.294 53.4484 194.649C52.9786 195.131 50.1865 195.796 47.2444 196.128C41.9714 196.722 36.1725 194.773 31.7281 190.914C30.221 189.605 29.3583 189.624 26.8469 191.019C24.3171 192.422 24.1878 192.718 26.0927 192.755C28.7396 192.804 36.6093 200.663 36.6093 203.256C36.6093 204.481 35.1352 205 31.6476 205C25.8694 205 22.7869 203.62 17.5847 198.702C14.0324 195.344 13.5028 195.21 8.43236 196.379C0.879848 198.119 0 198.001 0 195.238C0 193.526 0.818825 192.793 2.7457 192.781C8.3994 192.746 10.9828 191.376 10.9828 188.41C10.9828 183.081 14.767 175.838 18.877 173.297C21.0699 171.943 23.2103 170.833 23.635 170.833C25.1262 170.833 24.3721 181.243 22.6404 184.561C20.91 187.878 21.3957 188.527 24.6674 187.271C25.7852 186.843 26.1867 185.235 25.8645 182.478C25.5973 180.196 26 176.449 26.759 174.15C28.2917 169.508 33.356 164.085 35.134 165.185C37.2586 166.498 37.7857 174.678 36.0175 178.908L34.3078 183L37.1683 181.127C39.7748 179.419 39.9701 178.621 39.3782 172.091C38.8364 166.11 39.1744 164.209 41.4296 160.56C42.9147 158.156 44.5463 156.19 45.0551 156.19C46.827 156.19 48.8125 162.445 48.8125 168.029C48.8125 173.54 48.8601 173.608 51.2079 171.485C53.4021 169.5 53.4533 169.026 51.8181 165.865C49.2652 160.927 49.5264 152.205 52.3318 148.741L54.6297 145.903L57.2082 150.132C58.6262 152.458 59.788 156.267 59.7904 158.598L59.7953 162.835L61.7807 160C63.6417 157.345 63.6026 156.871 61.1706 152.546C57.135 145.365 58.0759 134.058 62.5666 135.781C63.5551 136.16 65.582 138.986 67.0708 142.063C68.5608 145.139 70.279 147.347 70.8891 146.97C72.705 145.848 72.1949 144.238 68.3375 138.913C65.6052 135.143 64.6765 132.513 64.6765 128.552C64.6765 125.105 65.211 123.254 66.2019 123.271C68.8707 123.318 73.0601 127.377 74.8283 131.63L76.5404 135.744L77.3482 132.523C78.0243 129.832 77.3482 128.533 73.2468 124.631C69.0513 120.64 68.3375 119.223 68.3375 114.892C68.3375 112.103 68.7487 109.824 69.2527 109.826C71.1173 109.835 78.2049 114.778 78.8822 116.54C79.9438 119.308 81.7646 118.718 81.734 115.618C81.7157 113.731 80.4783 112.299 77.7802 111.042C70.9599 107.864 65.2342 96.3927 70.473 96.4037C73.7617 96.4098 80.4966 100.977 81.7255 104.033C82.6444 106.319 82.8396 105.915 82.9043 101.585C82.9617 97.6959 82.5114 96.3988 81.1019 96.3988C77.5008 96.3988 70.0288 91.6911 68.5779 88.5075C67.7749 86.7443 67.1171 84.7785 67.1171 84.1391C67.1171 82.3478 72.9246 82.7614 76.9407 84.8383C78.92 85.8621 80.5406 87.3263 80.5406 88.0914C80.5406 88.8577 80.8188 89.2055 81.1593 88.8651C81.4997 88.5258 81.4412 86.5661 81.0299 84.51C80.3771 81.2435 79.6485 80.676 75.2261 79.9878C69.509 79.0995 67.2355 77.6669 64.2397 73.0618C62.231 69.9758 62.2481 69.8354 64.6887 69.1973C67.6309 68.4273 73.8679 70.0014 76.4855 72.1734C78.078 73.4949 78.0939 73.1826 76.6197 69.5707C75.0931 65.8282 74.4598 65.4462 69.4284 65.2339C63.0657 64.9667 59.1815 63.2035 57.3302 59.7453C56.3052 57.832 56.4419 57.1572 57.9685 56.5702C59.0362 56.1615 62.3445 56.1004 65.3221 56.436L70.7366 57.0461L68.7402 53.6673C66.9487 50.635 66.3825 50.4129 63.239 51.5087C58.6555 53.106 52.15 51.8235 49.3946 48.7778C48.1877 47.4453 47.4262 46.164 47.7008 45.9322C47.9766 45.7004 50.0072 44.9023 52.2135 44.1568C54.8591 43.2648 57.2607 43.1977 59.2644 43.9591C61.9748 44.989 62.1749 44.8743 61.1157 42.895C58.6641 38.3155 56.7872 37.6785 51.8352 39.748C46.7184 41.8859 40.2007 41.2953 37.8663 38.4814C36.7143 37.094 37.1536 36.3887 40.1238 34.8524C42.1508 33.8043 45.3321 32.9464 47.1931 32.9464H50.5746L47.8997 30.2717L45.2248 27.5969L39.6235 30.3937C35.4867 32.4596 32.9252 32.9843 29.8244 32.4034C27.5156 31.9702 25.6265 31.1771 25.6265 30.6402C25.6265 29.1551 30.3467 25.2028 33.81 23.7873L36.8912 22.528L33.6855 20.8112C30.7165 19.2224 30.2271 19.3359 27.0934 22.3389C23.2896 25.9825 17.1466 27.6848 14.0507 25.952C12.23 24.9331 12.4362 24.3584 15.8531 20.9417C17.9764 18.8197 20.86 17.0833 22.2634 17.0833C23.6655 17.0833 24.4514 16.7221 24.0084 16.2792C23.5667 15.8375 20.5928 15.5532 17.3992 15.6496C13.3441 15.7704 10.6777 15.1175 8.56049 13.4861C6.89232 12.2012 5.8343 10.843 6.20894 10.4684C6.58357 10.0938 8.49703 9.46539 10.4617 9.07247C13.0842 8.54899 15.2344 9.17375 18.5548 11.4263L23.0761 14.494L21.1358 10.4269C19.2028 6.37452 19.658 0 21.8802 0C22.4794 0 24.3904 1.69003 26.1281 3.75467Z" fill="url(#paint1_radial_116_78)" fillOpacity="0.2" />
            <defs>
              <linearGradient id="paint0_linear_116_78" x1="50" y1="0" x2="50" y2="205" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EED273" />
                <stop offset="1" stopColor="#9E3900" />
              </linearGradient>
              <radialGradient id="paint1_radial_116_78" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 102.5) rotate(32.7955) scale(118.275 57.69)">
                <stop stopColor="#FFF882" />
                <stop offset="1" stopColor="#EECF7F" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <SearchList data={bottom} offset={top.length} />

      </main>
    </div>
  );
}
