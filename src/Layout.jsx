import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className='mx-auto max-w-screen-xl'>
            <header>
                <nav className='flex gap-4'>
                    <Link to={'/'} className='italic gap-3 p-4 font-bold'>Home</Link>
                    <Link to={'/about'} className='italic gap-3 p-4 font-bold'>About</Link>
                    <Link to={'/spots/create'} className='italic gap-3 p-4 font-bold'>Create</Link>
                    <Link to={'/spots'} className='italic gap-3 p-4 font-bold'>list</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Layout;