import { ArrowIcon } from "../icons/arrowIcons"
import {addDays, subDays, format, formatISO} from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function HunchDate({currentDate, onChange}) {

    const date = new Date(currentDate)

    function nextDay(){
        const nextDate = addDays(date, 1)
        onChange(formatISO(nextDate))
    }

    function prevDay(){
        const prevDate = subDays(date, 1)
        onChange(formatISO(prevDate))
    }

    return (
        <div className="text-color3-20 font-bold flex items-center justify-center p-4">
            <ArrowIcon onClick={prevDay} name="arrowLeft" className="w-6" />
            <span className="px-6 text-color3-30">{format(date, "d 'de' MMMM", { locale: ptBR })}</span>
            <ArrowIcon onClick={nextDay} name="arrowRight" className="w-6" />
        </div>
    )
}
