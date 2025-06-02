import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    return (
        <>
            <div className="flex justify-center bg-gray-200 text-red-800">
                <div className="container flex flex-col items-center py-4">
                       <img
                        src="https://ik.imagekit.io/cai098/logofarmacia.png?updatedAt=1748872149114"
                        alt="Logo Farmácia"
                        className="h-20 md:h-30 w-auto object-contain"
                    />
                    <p className='text-lg'>Acesse nossas redes sociais!</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/caio-s-nascimento/" target="_blank">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/caai098/" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/Caiosn098" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer