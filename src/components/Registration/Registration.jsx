import rs from './Registration.module.css'


function Registration() {
  return (
    <div className={rs.Registration}>
      <div className={rs.signInContainer}>
        <div className={rs.title}>
            <h1 className={rs.title}>LogBook</h1>
        </div>
        <div className={rs.login}>
            <input placeholder={"Имя пользователя или эл. адрес"}/>
        </div>
        <div className={rs.password}>
            <input placeholder={"Пароль"}/>
        </div>
        <div className={rs.signInButton}>
            <span>Войти</span>
        </div>
        <div className={rs.helpButtons}>
            <span>Забыли пароль?</span>
        </div>
      </div>
      <div className={rs.signUpContainer}>
          <div className={rs.signUpLink}>
              <p>У вас нет аккаунта? <span>Зарегистрируйтесь</span></p>
          </div>
      </div>
    </div>
  );
}

export default Registration;