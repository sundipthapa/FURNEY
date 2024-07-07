import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyEsewaApi } from '../../../apis/api';

export default function EsewaSuccess() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    console.log("Oid, Amont, RefId  " , searchParams)

    const oid = searchParams.get('oid');
    const amt = searchParams.get('amt');
    const refId = searchParams.get('refId');

    const navigate = useNavigate();

    const gotoOrderDetails = () => {
        navigate(`/orders/${oid}`)
    }

    useEffect(() => {
        const verifyEsewaPayment = () => {
           verifyEsewaApi({oid, amt, refId}).then(res => {
                    gotoOrderDetails()
                }).catch(err => {
                    console.log(err);
                })
        }
        console.log(oid, amt, refId);

        if (oid && amt && refId) {
            verifyEsewaPayment()
        }
    }, [oid, amt, refId])

    return (
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <div>Esewa Success</div>
            </div>
        </div>
    )
}
