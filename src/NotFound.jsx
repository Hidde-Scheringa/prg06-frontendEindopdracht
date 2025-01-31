import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-xl text-gray-700 mt-4">Oeps! Deze pagina bestaat niet.</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                Terug naar home
            </Link>
        </div>
    );
}

export default NotFound;