import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

import { useLocalStorage } from "react-use"

const validationSchema = Yup.object().shape({
    homeTeamScore: Yup.string().required(),
    awayTeamScore: Yup.string().required()
});

export function HunchCard({disabled, gameTime, homeTeam, homeTeamScore, awayTeam, awayTeamScore, gameId }) {

    const [auth] = useLocalStorage('auth')

    const formik = useFormik(
        {
            onSubmit: (values) => {
                axios(
                    {
                        method: 'post',
                        baseURL: import.meta.env.VITE_API_URL,
                        url: '/hunches',
                        headers:{
                            authorization: `Bearer ${auth.accessToken}`,
                        },
                        data: {
                            ...values,
                            gameId
                        }
                    }
                )
            },
            initialValues: {
                homeTeamScore,
                awayTeamScore
            },
            validationSchema
        }
    )

    return (
        <section className=" space-y-6">

            <div className="rounded-3xl border py-4 border-color4-10 flex flex-col items-center text-color4-30">
                <span className="text-xs md:text-base font-bold">{gameTime}</span>

                <form className="flex items-center space-x-1.5 sm:space-x-5 p-1">
                    <span className="uppercase">{homeTeam}</span>
                    <img src={`../public/imgs/bandeiras/${homeTeam}.png`} className="w-6 sm:w-10 md:w-18"></img>

                    <input
                        className="w-6 h-6 sm:w-10 sm:h-10 md:w-18 md:h-18 flex justify-center items-center bg-color3-10/[0.15] text-color3-30 sm:text-xl text-center"
                        type="number"
                        name="homeTeamScore"
                        value={formik.values.homeTeamScore}
                        onChange={formik.handleChange}
                        onBlur={formik.handleSubmit}
                        disabled={disabled}
                    />

                    <span className="text-xl text-color3-20 font-bold">X</span>

                    <input
                        className="w-6 h-6 sm:w-10 sm:h-10 md:w-18 md:h-18 flex justify-center items-center bg-color3-10/[0.15] text-color3-30 sm:text-xl text-center"
                        type="number"
                        name="awayTeamScore"
                        value={formik.values.awayTeamScore}
                        onChange={formik.handleChange}
                        onBlur={formik.handleSubmit}
                        disabled={disabled}
                    />

                    <img src={`../public/imgs/bandeiras/${awayTeam}.png`} className="w-6 sm:w-10 md:w-18"></img>

                    <span className="uppercase">{awayTeam}</span>
                </form>
            </div>

        </section>
    )
}