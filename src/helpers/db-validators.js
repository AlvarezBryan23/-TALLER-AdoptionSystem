import User from "../user/user.model.js"
import Pet from "../pet/pet.model.js"

export const emailExists = async (email = "") => {
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`The email ${email} is already registered`)
    }
}

export const usernameExists = async (username = "") => {
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const userExists = async (uid = " ") => {
    const existe = await User.findById(uid)
    if(!existe){
        throw new Error("No existe el usuario con el ID proporcionado")
    }
}

export const petExists = async (id = "") => {
    const existe = await Pet.findById(id);
    if (!existe) {
        throw new Error("No existe la mascota con el ID proporcionado");
    }
};


export const appointExists = async (num = '') =>{
    const existe = await appoint.findById(num);
    if(!existe){
        throw new Error("No existe una cita con el ID proprocionado")
    }
}