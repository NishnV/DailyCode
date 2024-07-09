import bcrypt from 'bcryptjs'
import { Schema, model, Document } from 'mongoose'

export interface IUser{
    username : string;
    password : string;
    email : string;
    comparePassword(candidatePassword : string) : Promise<Boolean>;
}


export const userSchema = new Schema<IUser>({
    username : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    email : {type : String, required : true, unique : true}, 
});


userSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        return next()
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next()   
    
}); 

userSchema.methods.comparePassword = function comparePassword(candidatePassword : string){
    return bcrypt.compare(candidatePassword, this.password);
}

export const User = model('User', userSchema); 
