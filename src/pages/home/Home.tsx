
function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-red-800'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem-vindo a Farmacaio!
                        </h2>
                        <p className='text-xl'>
                            "Sua farmácia, sempre ao seu alcance."
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Adicionar Categoria
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src=""
                            alt=""
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home