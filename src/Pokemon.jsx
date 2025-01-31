import { Link } from "react-router";

function Pokemon({pokemon, pokemonDeleted }) {

    const handleDelete = async () => {
        try {
            const result = await fetch(`http://145.24.223.61:8001/pokemon/${pokemon.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (result.status === 204) {
                pokemonDeleted();
            }

        } catch (error) {
            console.error('Fout bij het verwijderen van item:', error);
        }
    };

    return (
        <article>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{pokemon.title}</h1>
            <img
                    src={pokemon.imageUrl}
                    alt={pokemon.title}
                    className="w-full h-auto object-cover mb-4 rounded-lg"
            />


            <div className="flex justify-between items-center mt-4 space-x-4">
                <Link
                    to={`/pokemon/${pokemon.id}`}
                    className="w-full px-3 py-2 bg-[#3B9AC6] text-white rounded-lg text-sm font-medium transition duration-300 hover:bg-[#2A7F98] text-center"
                >
                    Details
                </Link>

                <Link to={`/pokemon/edit/${pokemon.id}`} className='italic gap-3 p-4 font-bold'>edit</Link>

                <button
                    onClick={handleDelete}
                    className="w-full px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium transition duration-300 hover:bg-red-700 text-center"
                >
                    Verwijder
                </button>
            </div>
        </article>
    );
}

export default Pokemon;
