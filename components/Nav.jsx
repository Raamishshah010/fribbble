import Link from "next/link"

const Nav = () => {
    return (
        <nav className=" flex justify-between items-center max-md:hidden ">
            <ul className="flex items-center gap-6 text-[19px] font-medium font-poppins">
                <li>
                    <Link href='/'>Find talent</Link>
                </li>
                <li>
                    <Link href='/'>Find designer</Link>
                </li>
                <li>
                    <Link href='/'>Inspiration</Link>
                </li>
                <li>
                    <Link href='/'>Learn design</Link>
                </li>
                <li>
                    <Link href='/'>Go pro</Link>
                </li>
            </ul>

            <div className="flex-1 text-center">
                <h1 className="font-pacifico text-4xl">Fribbble</h1>
            </div>

            <div className="flex-1 flex gap-7 justify-center items-center font-poppins">
                <Link href="/login" className="text-black px-8 py-3 bg-transparent font-semibold rounded-full">
                    Log in <span className="text-2xl">.</span>
                </Link>

                <Link href="/register" className="text-black px-8 py-3 bg-white font-semibold rounded-full">
                    Sign Up
                </Link>

                <Link href="/register" className="bg-black px-8 py-3 text-white font-semibold rounded-full">
                    Hire Creatives
                </Link>

            </div>
        </nav>
    )
}

export default Nav