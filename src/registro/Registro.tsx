import './Registro.css'
export function RegistroComponent(){
    return (
        <form className="bg-indigo-50 px-7 py-7 sm:px-10 max-w-96 text-slate-800 rounded-2xl" id='registro'>
            <h2 className='font-extrabold text-2xl mb-3'>Registro</h2>
            <div className='inputs'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='pe-1 form-group'>
                        <label htmlFor="inpName">*Primer Nombre:</label>
                        <input type="text" name="inpName" id="inpName" placeholder="First Name"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="inpLastName">*Apellido</label>
                        <input type="text" name="inpLastName" id="inpLastName" placeholder="Last Name"/>
                    </div>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="inpEmail">*Email:</label>
                    <input type="email" name="inpEmail" id="inpEmail" placeholder="email@example.com"/>
                </div>

                <div className='form-group'>
                    <label htmlFor="inpPass">*Contraseña:</label>
                    <input type="password" name="inpPass" id="inpPass" placeholder="*********"/>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="inpPassConf">*Confirma la contraseña:</label>
                    <input type="password" name="inpPassConf" id="inpPassConf" placeholder="***********"/>
                </div>
                
                <input type="submit" value="Registrarse" className='w-full mt-3 py-3 bg-indigo-600 text-slate-50 font-bold rounded-lg shadow-lg'/>

            </div>
                <p className='m-0 text-sm'>* Campo requerido</p>
        </form>
    )
}