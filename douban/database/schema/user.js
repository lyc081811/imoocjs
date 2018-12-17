const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const schame = mongoose.Schema;
const Mixed = schame.Types.Mixed;
const SALT_WORK_FACTOR = 10;
const MAX_LOGIN_ATTAMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1e3
const userSchema = new schame({
    username: {
        unique: true,
        type: String
    },
    email: {
        unique: true,// 不能重复
        type: String
    },
    password: {
        unique: true,
        type: String
    },
    lockUntil: Number,
    loginAttempts: {
        type: Number,
        required: true, // 必须
        default: 0
    },
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
})

userSchema.virtual('isLocked').get(() => {
    return !!(this.lockUntil && this.lockUntil > Date.now())
})

userSchema.pre('save', function(next){
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }
    next()
})

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next()
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, sale) => {
        if(err) return next(err)
        bcrypt.hash(this.password, salt, (error, hash) => {
            if (error) return next(error)
            this.password = hash
            next()
        })
    })
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }
    next()
})

userSchema.methods = {
    // 比对密码
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) return resolve(isMatch)
                else reject(err)
            })
        })
    },
    incLoginAttepts: (user) => {
        return new Promise((resole, reject) => {
             if (this.lockUntil && this.lockUntil < Date.now()) {
                this.update({
                    $set: {
                        loginAttempts: 1
                    },
                    $unset: {
                        lockUntil: 1
                    }
                },err => {
                    if (!err) resole(true)
                    else reject(err)
                })
            } else {
                let updates = {
                    $inc: {
                        loginAttempts: 1
                    }
                }
                if (this.loginAttempts + 1 >= MAX_LOGIN_ATTAMPTS && this.isLocked) {
                    updates.$set = {
                        lockUntil: Date.now() + LOCK_TIME
                    }
                }
                this.update(updates, err => {
                    if (!err) resole(true)
                    else  reject(err)
                })
            }
        })
    }
}
mongoose.model('User', userSchema)
