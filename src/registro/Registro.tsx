import './Registro.css'
export function RegistroComponent(){
    return (
        <form className="registro">
            <h2>Registro</h2>
            <div className='inputs'>
                <div className='form-group-of-groups'>
                    <div className='form-group'>
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
                    <label htmlFor="inpEmail">*Contraseña:</label>
                    <input type="pasword" name="inpPass" id="inpPass" placeholder="*********"/>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="inpEmail">*Confirma la contraseña:</label>
                    <input type="password" name="inpPassConf" id="inpPassConf" placeholder="***********"/>
                </div>
                
                <input type="submit" value="Registrarse" />

            </div>
                <p>* Campo requerido</p>
        </form>
    )
}