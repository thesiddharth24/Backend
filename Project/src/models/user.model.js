import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const UserSchema = mongoose.Schema(
    {
         username: {
             type: String,
             required: true,
             unique: true,
             lowercase: true,
             trim: true,
             
         },
         email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, //cloud ka url use karege 
            required: true,
            
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true,"Password is required"],
        },
        refreshToken: {
            type: String,
        },
         
    },
    {
        timestamps: true
    }
)

//arrow fxn me this ka context nahi hota hai 
User.pre('save',async function (next) {
    if(this.isModified("password")){
        //agar modified hua hai toh hee change karo 
    this.password =bcrypt.hash(this.password,10)
    }
    next()
})

//custom method bhi desigin kar skte hai 
//baatyega inter password correct hai ya nahi 

UserSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password);
}
UserSchema.methods.generateAcessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
UserSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model('User',UserSchema);
export {User};