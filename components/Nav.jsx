import Link from "next/link"

const Nav = () => {
    return (
        <nav className="px-12 mt-12 flex justify-between items-center">
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

            <div className="flex-1 flex justify-end">
                <Link href="/login">
                    Login
                </Link>
            </div>
        </nav>
    )
}

export default Nav