import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-18',
        value: .18,
        label: '18%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-25',
        value: .25,
        label: '25%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps ) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
