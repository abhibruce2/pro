var jwt = require('jsonwebtoken');

// sign with RSA SHA256
export function verifyToken (req, res, next)  {
    const payload = {
        userId: 1,
        username: 'Abhi'
      };
      const secret = 1234567890;
      
      const token = jwt.sign(payload, secret, { expiresIn: '1h' });jwt.verify(token, secret, (err, decoded) => {
        
        if (err) {
       console.log(err);
        }else{
  next()
        }
      });
}
