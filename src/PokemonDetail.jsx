import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [notFound, setNotFound] = useState(false);

    async function fetchProduct() {
        try {
            const response = await fetch(`http://145.24.223.61:8001/pokemon/${id}`, {
                headers: { 'Accept': 'application/json' }
            });

            if (response.status === 404) {
                setNotFound(true);
                return;
            }

            const data = await response.json();
            console.log("API Response:", data);
            setPokemon(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            setNotFound(true);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (notFound) {
        return (
            <div>
                <div className="text-center px-4">
                    <h1 className="text-6xl font-extrabold text-red-600 font-[Press Start 2P]">404</h1>
                    <p className="text-2xl text-gray-800 mt-4">Deze Pokémon bestaat niet!</p>
                </div>
            </div>
        );
    }

    if (!pokemon) {
        return <div className="text-center mt-10 text-xl">Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-5xl font-extrabold text-center mb-12 text-yellow-400 drop-shadow-[4px_4px_0px_rgb(10,75,200)]">{pokemon.title}</h1>
                    <p className="font-extrabold text-center mb-12 text-black">{pokemon.description}</p>
                    <p className="font-extrabold text-center mb-12 text-black">{pokemon.review}</p>
                </div>
                <img
                    src={pokemon.imageUrl}
                    alt={pokemon.title}
                    className="w-full h-auto max-h-80 object-contain mx-auto"
                />
            </div>
        </div>
    );
}

export default PokemonDetail;
