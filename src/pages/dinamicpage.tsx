import { GetServerSideProps, GetStaticProps } from 'next';

type DataProps = {
    data: {
        ispb: string;
        name: string;
        code: string;
        fullName: string;
    }[];
    date: string;
};

export default function Home({ data, date }: DataProps) {
    return (
        <>
            <h2>{date}</h2>

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

// Server Side Props
export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://brasilapi.com.br/api/banks/v1');

    const data = await response.json();
    // const repositoryNames = data.map((item: { name: string }) => item.name);

    return {
        props: {
            data,
            date: new Date().toISOString()
        }
    };
};
