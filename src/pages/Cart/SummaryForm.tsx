import React, {useContext, useState} from 'react';
import s from "./Cart.module.scss";
import {TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useForm, SubmitHandler} from "react-hook-form";
import {API} from "../../api";
import loader from '../../assets/loader.svg'
import {useNavigate} from "react-router-dom";
import AppContext from "../../context";
import {useAuth} from "../../utils/hooks";


interface SummaryFormProps {
    cartLength: number | undefined
    totalPrice: number | undefined
}

type Inputs = {
    city: string,
    street: string
};

const SummaryForm: React.FC<SummaryFormProps> = ({cartLength, totalPrice}) => {
    const {t} = useTranslation();
    const {setSigningOpen} = useContext(AppContext);

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const [isLoading, setIsLoading] = useState(false)
    const isAuth = useAuth()


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (!isAuth) {
                setSigningOpen(true)
            } else {
                setIsLoading(true)
                await API.postOrder(data)
                navigate('/order')
                setIsLoading(false)
            }


        } catch (e) {
            console.log(e)
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>{t('CartPage.Summary')}</h3>
            <p><span>{t('CartPage.Total')}</span> {cartLength}</p>
            <div className={s.fields}>
                <p>{t('CartPage.Delivery')}</p>
                <TextField id="outlined-basic" label={t('CartPage.City')}
                           error={!!errors.city}
                           helperText={errors.city ? "This filed is required" : " "}
                           variant="outlined" {...register("city", {required: true})}
                           sx={{
                               '& label.Mui-focused': {
                                   color: "black",
                               },
                               '& .MuiOutlinedInput-root': {
                                   '&.Mui-focused fieldset': {
                                       borderColor: 'black'
                                   }
                               },

                           }}

                />
                <TextField id="outlined-basic" label={t('CartPage.Address')}
                           error={!!errors.street}
                           helperText={errors.street ? "This filed is required" : " "}
                           variant="outlined" {...register("street", {required: true})}
                           sx={{
                               '& label.Mui-focused': {
                                   color: "black",
                               },
                               '& .MuiOutlinedInput-root': {
                                   '&.Mui-focused fieldset': {
                                       borderColor: 'black'
                                   }
                               },

                           }}
                />
            </div>
            <div className={s.total}>
                <p>{t('CartPage.TotalPrice')}</p>
                <p>₴{totalPrice}</p>
            </div>
            <button type="submit" className={isLoading ? s.disabled : ''}>{isLoading ?
                <img src={loader} alt="loader" width={24}/> : t('CartPage.Checkout')}</button>
        </form>
    );
};

export default SummaryForm;
