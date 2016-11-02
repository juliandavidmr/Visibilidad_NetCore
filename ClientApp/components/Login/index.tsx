import * as React from 'react';

interface ILoginState {
  /**
   * Si el estado es True entonces el usuario ya ha iniciado sesion ()
   * Para saber que el usuario ha iniciado sesión se consulta la variable
   * SESSION del LocalStorage. 
   * 
   * @type {boolean}
   * @memberOf ILoginState
   */
  estado?: boolean;

  /**
   * Muestra el estado actual del inicio de sesion
   * 
   * @type {string}
   * @memberOf ILoginState
   */
  message?: string;
}

export default class Login extends React.Component<any, ILoginState> {

  /* True sí el navegador tiene soporte para LocalStorage */
  localStorage_isSupported: boolean = this.localStorage_config();

  /* Constante para la variable del LocalStorage */
  private SESSION_CONSTANT: string = 'SESSION';

  constructor(props) {
    super(props)

    if (!this.localStorage_isSupported) {
      // window.alert('Tu navegador no tiene soporte LocalStorage');

      this.state = {
        estado: false,
        message: 'Tu navegador no tiene soporte LocalStorage'
      }
    } else {
      /* Si hay soporte de LocalStorage */
      let session_var: string = localStorage.getItem(this.SESSION_CONSTANT);

      if (!session_var && session_var != "") {
        this.state = {
          estado: true,
          message: 'Redirigiendo al Login de Chaira debido que no se ha iniciado sesion.'
        }

        setTimeout(() => {
          window.location.href = 'http://www.google.com';
        }, 2000);
      } else {
        this.state = {
          estado: true,
          message: 'Redirigiendo al MENU Dashboard. El usuario ya ha iniciado sesion.'
        }

        setTimeout(() => {
          window.location.href = '/Menu?date=' + new Date();
        }, 2000);
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
    const { estado, message } = this.props;

    return (
      <h1>
        {
          estado ? 'Sesion iniciada.' : 'No se ha iniciado sesion, redirigiendo al menu.'
        }
        {
          message ? message : ''
        }
      </h1>
    )
  }
}