import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip , [tip, order])
    const totalAmount = useMemo(() =>  subtotalAmount + tipAmount , [tip, order])


    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p className="font-black">Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button className="w-full bg-green-600 p-3 uppercase text-white font-bold rounded-2xl disabled:opacity-80"
            disabled={totalAmount === 0}
            onClick={() => dispatch({type: 'place-order'})}
            >
                Guardar Orden
            </button>

            <button className="w-full bg-red-600 p-3 uppercase text-white font-bold rounded-2xl disabled:opacity-80"
            disabled={totalAmount === 0}
            onClick={() => dispatch({type: 'remove-order'})}
            >
                Eliminar Orden
            </button>
        </>
    )
}
