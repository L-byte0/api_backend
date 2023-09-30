import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        require: true,
      },
});


userSchema.pre("save", async function (next) {
    if(!this.isModified('password')) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(e){
        throw new Error("Fallo el hash de contraseña");
    }
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);
}

export const Usermodel = model('User', userSchema);