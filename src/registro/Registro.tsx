import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { TRegisterInput, registerSchema } from './registerSchema';
import './Registro.css'

export function RegistroComponent(){

    const {register, handleSubmit, formState:{errors}} = useForm<TRegisterInput>({resolver:yupResolver(registerSchema)});

    const handleRegSubmit:SubmitHandler<TRegisterInput> = (data:TRegisterInput)=>console.log(data,errors);

    return (
        <form onSubmit={handleSubmit(handleRegSubmit)} className="bg-indigo-50 px-7 py-7 sm:px-10 max-w-96 text-slate-800 rounded-2xl" aria-label='signup-form'>
            <h2 className='font-extrabold text-2xl mb-3'>Registro</h2>
            <div className='inputs'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='pe-1 form-group'>
                        <label htmlFor="regFirstName">*Primer Nombre:</label>
                        <input {...register('regFirstName')} type="text" name="regFirstName" id='regFirstName' placeholder="First Name"/>
                        {errors.regFirstName && <span className='text-xs text-start px-2 bg-red-300 rounded-sm'>{errors.regFirstName.message}</span>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="regLastName">*Apellido</label>
                        <input {...register('regLastName')} type="text" name="regLastName" id="regLastName" placeholder="Last Name"/>
                        {errors.regLastName && <span className='text-xs text-start px-2 bg-red-300 rounded-sm'>{errors.regLastName.message}</span>}
                    </div>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="regEmail">*Email:</label>
                    <input {...register('regEmail')} type="email" name="regEmail" id="regEmail" placeholder="email@example.com"/>
                    {errors.regEmail && <span className='text-xs text-start px-2 bg-red-300 rounded-sm'>{errors.regEmail.message}</span>}
                </div>

                <div className='form-group'>
                    <label htmlFor="regPassword">*Contraseña:</label>
                    <input {...register('regPassword')} type="password" name="regPassword" id="regPassword" placeholder="*********"/>
                    {errors.regPassword && <span className='text-xs text-start px-2 bg-red-300 rounded-sm'>{errors.regPassword.message}</span>}
                </div>
                
                <div className='form-group'>
                    <label htmlFor="regConfirmPassword">*Confirma la contraseña:</label>
                    <input {...register('regConfirmPassword')} type="password" name="regConfirmPassword" id="regConfirmPassword" placeholder="***********"/>
                    {errors.regConfirmPassword && <span className='text-xs text-start px-2 bg-red-300 rounded-sm'>{errors.regConfirmPassword.message}</span>}
                </div>
                
                <input type="submit" value="Registrarse" className='w-full mt-3 py-3 bg-indigo-600 text-slate-50 font-bold rounded-lg shadow-lg'/>

            </div>
                <p className='m-0 text-sm'>* Campo requerido</p>
        </form>
    )
}