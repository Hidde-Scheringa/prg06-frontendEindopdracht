import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditComponent() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        review: '',
        imageUrl: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`http://145.24.223.61:8001/pokemon/${id}`, {
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Pokemon Data:', data);
                    setFormData({
                        title: data.title,
                        description: data.description,
                        review: data.review,
                        imageUrl: data.imageUrl,
                    });
                } else {
                    console.error('Fout bij ophalen van gegevens:', response.statusText);
                }
            } catch (error) {
                console.error('Er is een fout opgetreden bij ophalen van de pokemon:', error);
            }
        };

        fetchPokemonData();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.title || !formData.description || !formData.review || !formData.imageUrl) {
            alert('Vul alle velden in!');
            return;
        }

        try {
            const response = await fetch(`http://145.24.223.61:8001/pokemon/${id}/`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Succesvol bijgewerkt:', data);
                navigate('/');
            } else {
                console.error('Fout bij updaten:', response.statusText);
                alert('Er is iets misgegaan. Probeer het opnieuw.');
            }
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            alert('Kan geen verbinding maken. Controleer je netwerk.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
            <h2 className="text-5xl font-extrabold text-center mb-12 text-yellow-400 drop-shadow-[4px_4px_0px_rgb(10,75,200)]">Pokemon Bewerken</h2>
            <input
                type="text"
                name="title"
                placeholder="Titel"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border rounded"
            />
            <textarea
                name="description"
                placeholder="Beschrijving"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border rounded"
            />
            <input
                type="text"
                name="review"
                placeholder="Review"
                value={formData.review}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border rounded"
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Afbeeldings-URL"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border rounded"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
               Bijwerken
            </button>
        </form>
    );
}

export default EditComponent;
