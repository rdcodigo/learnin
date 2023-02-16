import { Navigate } from "react-router-dom"
import { useLocalStorage } from "react-use"

export function Home() {
  const [auth] = useLocalStorage('auth', {})

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className='h-screen bg-color3-30 text-color2 p-2 md:p-4 flex flex-col items-center space-y-6'>

      <header className="container max-w-4xl md:p-4 flex justify-center">
        <img src="../public/imgs/logo/logo-fundo-vinho.svg" width={100}></img>
      </header>

      <div className='container max-w-4xl flex flex-1 flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6'>
        <div className='flex justify-center w-56 md:w-full md:p-4 md:max-w-md'>
          <img src="../public/imgs/imagem/img.png"></img>
        </div>

        <div className='flex flex-col space-y-6 w-3/4 m-auto'>

          <h1 className='text-xl md:text-2xl text-center md:text-left font-bold'>
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>

          <a href="./signup" className='text-center text-color3-30 bg-color2 md:text-xl px-4 py-2 md:px-8 md:py-4 rounded-xl'>
            Criar minha conta
          </a>

          <a href="./login" className='text-center text-color2 border border-color2 md:text-xl px-4 py-2 md:px-8 md:py-4 rounded-xl '>
            Fazer Login
          </a>

        </div>

      </div>

    </div>
  )
}