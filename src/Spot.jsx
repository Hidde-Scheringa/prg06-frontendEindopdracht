import { Link } from "react-router";

function Spot({ spot, spotDeleted }) {

    const handleDelete = async () => {
        try {
            const result = await fetch(`http://145.24.223.61:8001/spots/${spot.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (result.status === 204) {
                spotDeleted();
            }

        } catch (error) {
            console.error('Fout bij het verwijderen van item:', error);
        }
    };

    return (
        <article>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{spot.title}</h1>
            <p className="text-gray-700 mb-4">{spot.description}</p>
            <p className="text-gray-600 italic mb-4">{spot.review}</p>
            <img
                    src={spot.imageUrl}
                    alt={spot.title}
                    className="w-full h-auto object-cover mb-4 rounded-lg"
            />


            <div className="flex justify-between items-center mt-4 space-x-4">
                <Link
                    to={`/spot/${spot.id}`}
                    className="w-full px-3 py-2 bg-[#3B9AC6] text-white rounded-lg text-sm font-medium transition duration-300 hover:bg-[#2A7F98] text-center"
                >
                    Details
                </Link>

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

export default Spot;
