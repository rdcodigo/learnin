import { ArrowIcon } from "../icons/arrowIcons"
import { Input } from "../inputs/dataInputs"

import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

import { Navigate } from "react-router-dom"
import { useLocalStorage } from "react-use"


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Preencha seu nome'),
  username: Yup.string().required('Preencha seu nome de usuário'),
  email: Yup.string().email('Informe um email válido').required('Preencha seu email'),
  password: Yup.string().required('Preencha sua senha')
});

export function Signup() {

  const [auth, setAuth] = useLocalStorage('auth', {})

  const formik = useFormik({
    onSubmit: async (values) => {

      const res = await axios({
        method: 'post',
        baseURL: import.meta.env.import.meta.env.VITE_API_URL,
        url: '/users',
        data: values
      })

      setAuth(res.data)
      console.log(auth)

    },
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema
  })

  if (auth?.user?.id) {
    return <Navigate to="/profile" replace={true} />
  }

  return (
    <>
      <header className="p-4 border-b border-color3-10">
        <div className="container max-w-xl flex justify-center">
          <img src="../public/imgs/logo/logo-fundo-branco.svg" className="w-28 md:w-36"></img>
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <section>
          <div className="p-4 flex space-x-4 items-center text-color3-20">
            <a href="/">
              <ArrowIcon name="arrowBack" className="w-6" />
            </a>
            <h2 className="text-color3-30 text-xl font-bold">Crie sua conta</h2>
          </div>

          <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              name="name"
              label="Seu nome"
              placeholder="Digite seu nome"
              error={formik.touched.name && formik.errors.name}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Input
              type="text"
              name="username"
              label="Seu nome de usuário"
              placeholder="Digite um nome de usuário"
              error={formik.touched.username && formik.errors.username}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Input
              type="text"
              name="email"
              label="Seu e-mail"
              placeholder="Digite seu e-mail"
              error={formik.touched.email && formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Input
              type="password"
              name="password"
              label="Sua senha"
              placeholder="********"
              error={formik.touched.password && formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <button
              type="submit"
              className=' block w-full text-center text-color2 bg-color3-20 p-3 rounded-xl disabled:opacity-50'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Carregando...' : 'Criar Conta'}
            </button>
          </form>
        </section>
      </main>
    </>
  )
}