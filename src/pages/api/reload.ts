/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
    // Esta função cria a rota estática
    await res.unstable_revalidate('/staticpage'); // Informe a rota

    return res
        .status(200)
        .json({ name: 'Página recarregada, volte e teste novamente!' });
};
