const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');


// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true,
    },    
    password:{
        type:String,
        required:true,
    },    
    refreshToken:{
        type:String,
    },    
    movies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }]
});
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
}); 
userSchema.methods.isPasswordMatched = async function(enteredPassword){   
    return await bcrypt.compare(enteredPassword,this.password);
};

module.exports = mongoose.model('User', userSchema);