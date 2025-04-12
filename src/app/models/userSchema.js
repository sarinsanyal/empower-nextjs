import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true,
    },

    profileCompleted: {
        type: Boolean,
        default: false,
    },

    //Now comes the later register part
    sex: {
        type: String,
        default: null
    },
    DOB: {
        type: Date,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    profilePhoto: {
        type: String,
        default: 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
    },
    
}, { timestamp: true });

//bcrypt stuff
UserSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model('User', UserSchema)
export default User;