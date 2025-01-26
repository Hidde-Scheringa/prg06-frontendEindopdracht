import React, { useState, useEffect } from 'react';
import Spot from "./Spot.jsx";

function ProductComponent() {
    const [spots, setSpots] = useState(null);

    async function fetchProduct() {
        try {
            const response = await fetch('http://145.24.223.61:8001/spots/', {
                headers: {
                    'Accept': 'application/json',
                },
            });

            const data = await response.json();
            setSpots(data.items);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    console.log(spots);

    return (
        <main>
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-12 text-green-800">
                    Spots Overzicht
                </h1>
                {spots ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {spots.map((spot) => (
                            <div
                                key={spot.id}
                                className="flex flex-col justify-between shadow-xl rounded-lg border p-6 bg-white hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl"
                            >
                                <Spot
                                    spot={spot}
                                    spotDeleted={fetchProduct}
                                    className="text-lg font-semibold text-gray-700 mb-4"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 text-xl">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p className="mt-4">Spots worden ingeladen...</p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default ProductComponent;
