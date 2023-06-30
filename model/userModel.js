const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    createAt : {
        type:Date,
        default:Date.now
    },
    lastUpdateAt :{
        type:String,
        default:Date.now 
    }
})

userSchema.pre('save', async function(next) {
  if (!this.password) {
    return next(new Error('Password is required.'));
  }

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};

// userSchema.pre('save', async function(next) {
//     if (this.isModified('password') || this.isNew) {
//       try {
//         const hash = await bcrypt.hash(this.password, 10);
//         this.password = hash;
//       } catch (error) {
//         return next(error);
//       }
//     }
//     next();
//   });
  
//   userSchema.methods.isValidPassword = async function(password) {
//     try {
//       return await bcrypt.compare(password, this.password);
//     } catch (error) {
//       throw error;
//     }
//   };
  

const UserModel = mongoose.model('user' , userSchema)

module.exports = UserModel;