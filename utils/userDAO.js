//Realizar operação de CRUD da aplicação
// => Login
// => Cadastramento
// => Alterações
// => Exclusão
import connect from "./database"

const Login = async (name, password) => {
    const {
        db
    } = await connect()

    const user = {
        name: name,
        password: password
    }

    const collection = db.collection('logins')
    const options ={
        projection:{
            password:false
        }
    }

    const response = collection.findOne(user, options)

    return response
}

export default Login