import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="w-full bg-gray-200 text-red-800 py-2 shadow">
            <div className="max-w-7xl mx-auto flex items-start justify-between px-4">
                <Link to='/home'>
                    <img
                        src="https://ik.imagekit.io/cai098/logofarmacia.png?updatedAt=1748872149114"
                        alt="Logo Farmácia"
                        className="h-20 md:h-24 w-auto object-contain"
                    />
                </Link>
                <div className="flex gap-6 text-lg font-semibold mt-5">
                    <Link to='/categorias' className="cursor-pointer hover:text-red-600">Categorias</Link>
                    <Link to='/cadastrarcategoria' className="cursor-pointer hover:text-red-600">Cadastrar categoria</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar