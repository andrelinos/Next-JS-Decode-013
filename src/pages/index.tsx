import Link from 'next/link';

export default function Home() {
    return (
        <div className="home">
            <h2>Exemplos de páginas</h2>
            <ul>
                <li>
                    <Link href="/staticpage">Estática</Link>{' '}
                    <Link href="/api/reload">Reload</Link>
                </li>
                <li>
                    <Link href="dinamicpage">Dinâmica</Link>
                </li>
            </ul>
        </div>
    );
}
