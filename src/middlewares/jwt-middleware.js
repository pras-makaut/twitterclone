import JWT from "passport-jwt";
import User from '../models/user.js'

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
        const user = await User.findById(jwt_payload.id);
        if(!user){
            done(null,false);
        }else{
            done(null,user);
        }
    }));
    
}