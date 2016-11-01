import * as React from 'react';

interface ILoginState {
  /* 
    Si el estado es True entonces el usuario ya ha iniciado sesion ()
    Para saber que el usuario ha iniciado sesión se consulta la variable
    SESSION del LocalStorage.
  */
  estado: boolean;
}

export default class Login extends React.Component<any, ILoginState> {
  
  /* True sí el navegador tiene soporte para LocalStorage */
  localStorage_isSupported: boolean = this.localStorage_config();
  SESSION_CONSTANT: string = 'SESSION';

  constructor(props) {
    super(props)
    
    this.state = {
      estado: false      
    }

    if (!this.localStorage_isSupported) {
      alert('Tu navegador no tiene soporte LocalStorage');
    } else {
      /* Si hay soporte de LocalStorage */
      let session_var: string = localStorage.getItem(this.SESSION_CONSTANT);

      if (!session_var && session_var != "") {
        window.location.href = 'http://www.google.com';
      } else {
        window.location.href = '/Menu';
      }
    }
  }

  private localStorage_config(): boolean {
    try {
      var itemBackup = localStorage.getItem("");
      localStorage.removeItem("");
      localStorage.setItem("", itemBackup);
      if (itemBackup === null) {
        localStorage.removeItem("");
      } else {
        localStorage.setItem("", itemBackup);
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  private localStorage_hasItem(key): boolean {
    return localStorage.getItem(key) !== null;
  }

  public render() {
    const { estado } = this.props;

    return (
      <div>
        {
          estado ? 'Sesion iniciada.' : 'No se ha iniciado sesion, redirigiendo al menu.'
        }
      </div>
    )
  }
}