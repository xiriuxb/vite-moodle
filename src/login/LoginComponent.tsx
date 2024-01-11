import { SubmitHandler, useForm } from "react-hook-form";
import { TRegisterInput } from "../registro/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TLoginInput, loginSchema } from "./loginSchema";

export function LoginComponent() {
    const {register, handleSubmit, formState:{errors}} = useForm<TLoginInput>({resolver:yupResolver(loginSchema)});

    const handleLoginSubmit:SubmitHandler<TLoginInput> = (data:TLoginInput)=>console.log(data,errors);

    return (
        <section className="">
            <form onSubmit={handleSubmit(handleLoginSubmit)} className="bg-indigo-50 px-7 py-7 sm:px-10  text-slate-800 rounded-2xl justify-self-center" aria-label='sigin-form'>
                <h2 className='font-extrabold text-2xl mb-3'>Ingreso</h2>
                <div className='inputs'>                
                    <div className='form-group'>
                        <label htmlFor="loginEmail">*Email:</label>
                        <input {...register('loginEmail', {required:true})} type="email" name="loginEmail" id="loginEmail" placeholder="email@example.com"/>
                        {errors.loginEmail && <span className='text-xs text-start px-2 bg-red-300 rounded-sm'>{errors.loginEmail.message}</span>}
                    </div>

                    <div className='form-group'>
                        <label htmlFor="loginPassword">*Contraseña:</label>
                        <input {...register('loginPassword', {required:true})} type="password" name="loginPassword" id="loginPassword" placeholder="*********"/>
                        {errors.loginPassword && <span className='text-xs text-start px-2 bg-red-300 rounded-sm'>{errors.loginPassword.message}</span>}
                    </div>
                    <div className='form-group flex-row'>
                        <label htmlFor="loginRemember">Recordarme:</label>
                        <input type="checkbox" name="loginRemember" id="loginRemember" />
                    </div>
                    <input type="submit" value="Ingresar" className='w-full mt-3 py-3 bg-indigo-600 text-slate-50 font-bold rounded-lg shadow-lg'/>
                </div>
                    <p className='m-0 text-sm'>* Campo requerido</p>
            </form>
        </section>
    )
}