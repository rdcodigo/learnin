import { ReactComponent as arrowBack } from './../../../public/imgs/icones/arrow-back.svg'
import { ReactComponent as arrowLeft } from './../../../public/imgs/icones/arrow-left.svg'
import { ReactComponent as arrowRight } from './../../../public/imgs/icones/arrow-right.svg'

const icons = {
        arrowBack,
        arrowLeft,
        arrowRight
}

export function ArrowIcon({ name, ...props }) {
        const Element = icons[name]
        return (
                <>
                        <Element {...props} />
                </>
        )
}