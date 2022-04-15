import { GetStaticPaths, GetStaticProps } from 'next';

export default function Blog({ repositories, date }) {
    return (
        <>
            <h2>{date}</h2>
            <ul>
                {repositories.map((repo) => (
                    <li key={repo}>{repo}</li>
                ))}
            </ul>
        </>
    );
}

// Quando tem slug precisa desta parte
export const getStaticPaths: GetStaticPaths = async () => {
    // Pode pegar posts mais lidos, para gerar durante a build

    return {
        paths: [], // Informa dentro o array de posts mais lidos
        fallback: false
    };
};

// Static Props = Site servido estático
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(
        'https://api.github.com/users/andrelinos/repos'
    );

    const data = await response.json();
    const repositoryNames = data.map((item: { name: string }) => item.name);

    return {
        props: {
            repositories: repositoryNames,
            date: new Date().toISOString()
        },
        revalidate: 20 // Stale While Revalidate - pesquisar sobre
    };
};
