import { GetStaticProps } from 'next';

type DataProps = {
    data: {
        ispb: string;
        name: string;
        code: string;
        fullName: string;
    }[];
    date: string;
};

export default function StaticPage({ data, date }) {
    return (
        <>
            <h2>{date}</h2>
            Nota: Esta funcionalidade só funciona em produção
            {data.map((repo) => (
                <p key={repo.ispb}>
                    <ul>
                        <li>
                            <b>Código ISPB:</b> {repo.ispb}
                        </li>
                        <li>
                            <b>Identificação:</b> {repo.name}
                        </li>
                        <li>
                            <b>Código:</b> {repo.code ? repo.code : 'Sem'}
                        </li>
                        <li>
                            <b>Nome:</b> {repo.fullName}
                        </li>
                    </ul>
                </p>
            ))}
        </>
    );
}

// Static Props = Site servido estático
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://brasilapi.com.br/api/banks/v1');

    const data = await response.json();
    // const repositoryNames = data.map((item: { name: string }) => item.name);

    return {
        props: {
            data,
            date: new Date().toISOString()
        },
        revalidate: 60 * 60 * 2 // 2 horas // Stale While Revalidate - pesquisar sobre
    };
};
