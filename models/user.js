var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var SALT_FACTOR = 10;

var userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});
//pre method to encrypt password
userSchema.pre("save", function(done){
    var user = this;
    //password modified
    if(!user.isModified("password")){
        return done();
    }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        //error handling
        if (err) {
            return done(err);
        }
        //encrypt password
        bcrypt.hash(user.password, salt, function(err, hashedPassword){
            if (err) {
                return done(err);
            }
            user.password = hashedPassword;
            done();
        });
    });
});

//check password
userScheme.methods.checkPassword = function(guess, done){
    if(this.password != null) {
        bcrypt.compare(guess, this.password, function(err, isMatch){
            done(err, isMatch);
        });
    };
};

var User = mongoose.model("User", userSchema);
module.exports = User;