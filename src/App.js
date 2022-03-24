import React, {useState} from 'react'
import './App.css'
const App = () => {
    /*
    podemos tener los useestates que necesitemos, en class based component solo un
    state con muchos campos y nos referemis a ellos como this.state.sss
    */
    //usestate para el usuario
    const[username, setUsername] = useState('');
    //usestate para la contraseña
    const[password, setPassword] = useState('');
    //usestate para mostrar/ocultar la contraseña
    const[showPassword, setShowPassword] = useState(true);
  return (
    <div className='container'>
        <input
        type='text'
        placeholder='Usuario'
        //inicio le value vacio pero es dinámico
        value={username}
        onChange={(e)=>{
            //obtengo lo que escribe el usuario y lo cambio
            setUsername(e.target.value)
            console.log(e.target.value)
        }}
        />
                <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Contraseña'
        //inicio le value vacio pero es dinámico
        value={password}
        onChange={(e)=>{
            //obtengo lo que escribe el usuario y lo cambio
            setPassword(e.target.value)
            console.log(e.target.value)
        }}
        />
        <h2>{username}</h2>
        {/*si ShowPassword es true, entonces mostramos la contraseña sino no la mostramos*/}
        <h2>{showPassword ? password: '*'.repeat(password.length)}</h2>
        <button onClick={(e)=>{
            //si show password es true lo cambio a false, si es false a true
        setShowPassword(!showPassword)
        }}>Mostrar/Ocultar contraseña</button>
    </div>
  )
}

export default App