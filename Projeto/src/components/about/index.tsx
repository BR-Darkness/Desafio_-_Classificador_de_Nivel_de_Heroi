export function AboutSection() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-textColor text-4xl">Sobre o Desafio:</h2>

            <p><b>Instruções para entrega do desafio</b></p>
            
            <h3 className="font-semibold text-lg">📝│ O Que deve ser utilizado :</h3>

            <ul className="bg-borderColor/50 p-4 rounded-md">
                <li>• - Variáveis</li>
                <li>• - Operadores</li>
                <li>• - Laços de repetição</li>
                <li>• - Estruturas de decisões</li>
            </ul>

            <h3 className="font-semibold text-lg">🎯│ Objetivo :</h3>

            <p>Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:</p>

            <table className="border-collapse border border-borderColor">
                <caption className="caption-bottom m-4 italic">Tabela: Condições e resultados</caption>
                <thead className="h-10">
                    <tr className="bg-borderColor/50">
                        <th className="text-left border px-4 border-borderColor">❓ Condição</th>
                        <th className="text-left border px-4 border-borderColor">🏆 Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for menor do que 1.000</td>
                        <td className="border px-4 border-borderColor">Ferro</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for entre 1.001 e 2.000</td>
                        <td className="border px-4 border-borderColor">Bronze</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for entre 2.001 e 5.000</td>
                        <td className="border px-4 border-borderColor">Prata</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for entre 5.001 e 7.000</td>
                        <td className="border px-4 border-borderColor">Ouro</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for entre 7.001 e 8.000</td>
                        <td className="border px-4 border-borderColor">Platina</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for entre 8.001 e 9.000</td>
                        <td className="border px-4 border-borderColor">Ascendente</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for entre 9.001 e 10.000</td>
                        <td className="border px-4 border-borderColor">Imortal</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se XP for maior ou igual a 10.001</td>
                        <td className="border px-4 border-borderColor">Radiante</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="font-semibold text-lg">💻│ Saída :</h3>

            <p>Ao final deve se exibir uma mensagem:</p>

            <p className="bg-borderColor/50 p-4 rounded-md">" O Herói de nome **nome** está no nível de **nivel** "</p>
        </section>
    )
}