import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
            <header className="bg-blue-600 py-4 shadow-lg">
                <nav className="flex justify-between items-center px-6">
                    <Link
                        to="/"
                        className="text-white font-bold text-2xl italic hover:text-yellow-400 transition-all duration-200"
                    >
                        Home
                    </Link>
                    <div className="space-x-6">
                        <Link
                            to="/pokemon/create"
                            className="text-white font-bold text-xl italic hover:text-yellow-400 transition-all duration-200"
                        >
                            Create
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="py-12 px-6">
                <Outlet />
            </main>

            <footer className="bg-gray-800 text-white text-center py-4 mt-12">
                <p className="text-sm">© 2025 Pokémon App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
