import Link from 'next/link'

function Home() {
    return <div>
        <h1>Página de teste inicial</h1>
        
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        
    </div>
}

export default Home