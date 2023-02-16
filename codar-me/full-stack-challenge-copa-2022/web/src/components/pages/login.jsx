import { ArrowIcon } from "../icons/arrowIcons"

import { Input } from "../inputs/dataInputs"
import { useLocalStorage } from "react-use"
import { Navigate } from "react-router-dom"

import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Informe um email válido').required('Preencha seu email'),
    password: Yup.string().required('Preencha sua senha')
});

export function Login() {
    const [auth, setAuth] = useLocalStorage('auth', {})

    const formik = useFormik({
        onSubmit: async (values) => {

            const res = await axios({
                method: 'get',
                baseURL:import.meta.env.VITE_API_URL,
                url: '/login',
                auth: {
                    username: values.email,
                    password: values.password
                }
            })

            setAuth(res.data)
        },
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema
    })

    if (auth?.user?.id) {
        return <Navigate to="/dashboard" replace={true} />
    }

    return (
        <>
            <header className="p-4 border-b border-color3-10">
                <div className="container max-w-xl flex justify-center">
                    <img src="../public/imgs/logo/logo-fundo-branco.svg" className="w-28 md:w-36" ></img>
                </div>
            </header>

            <main className="container max-w-xl p-4">
                <section>
                    <div className="p-4 flex space-x-4 items-center text-color3-20">
                        <a href="/">
                            <ArrowIcon name="arrowBack" className="w-6" />
                        </a>
                        <h2 className="text-color3-30 text-xl font-bold">Entre na sua conta</h2>
                    </div>

                    <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
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
                            disabled={!formik.isValid}
                        >
                            {formik.isSubmitting ? 'Carregando...' : 'Acessar Conta'}
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}