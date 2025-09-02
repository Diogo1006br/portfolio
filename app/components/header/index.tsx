import Link from "next/link"
import Image from "next/image"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    }
    {
        label: 'Projetos',
        href: '/projects'
    }
]


export const Header = () => {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <Image
                        width={58}
                        height={49}
                        src="/images/logodi.svg"
                        alt="Logo Diogo Dev"
                    />
                </Link>
                <nav>
                    {NAV_ITEMS.map(item => (

                    ))}
                </nav>
            </div>
        </header>
    )
}