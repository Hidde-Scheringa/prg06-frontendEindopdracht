import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon.jsx";

function ProductComponent() {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    async function fetchProduct(currentPage) {
        try {
            const response = await fetch(
                `http://145.24.223.61:8001/pokemon?page=${currentPage}&limit=${limit}`,
                {
                    headers: { Accept: "application/json" },
                }
            );

            const data = await response.json();
            setPokemon(data.items);
            setTotalPages(data.pagination.totalPages);
        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    }

    useEffect(() => {
        fetchProduct(page);
    }, [page]);

    return (
        <main className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-6">

                <h1 className="text-5xl font-extrabold text-center mb-12 text-yellow-400 drop-shadow-[4px_4px_0px_rgb(10,75,200)]">
                    Pokémon Overzicht
                </h1>



                {pokemon.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {pokemon.map((mon) => (
                            <div
                                key={mon.id}
                                className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-2xl"
                            >
                                <Pokemon
                                    pokemon={mon}
                                    pokemonDeleted={() => fetchProduct(page)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 text-xl mt-12">
                        <div className="animate-spin inline-block w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full"></div>
                        <p className="mt-4 text-lg font-medium">Pokémon worden ingeladen...</p>
                    </div>
                )}


                <div className="flex justify-center items-center mt-12 space-x-4">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className={`px-6 py-3 font-semibold rounded-lg transition ${
                            page === 1
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                    >
                        Vorige
                    </button>

                    <span className="px-6 py-3 bg-white shadow-md rounded-lg text-gray-700 font-semibold">
                        Pagina {page} van {totalPages}
                    </span>

                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className={`px-6 py-3 font-semibold rounded-lg transition ${
                            page === totalPages
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                    >
                        Volgende
                    </button>
                </div>
            </div>
        </main>
    );
}

export default ProductComponent;
