
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
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/cai098/logofarmacia.png?updatedAt=1748872149114"
                            alt="Logo Farmácia"
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home