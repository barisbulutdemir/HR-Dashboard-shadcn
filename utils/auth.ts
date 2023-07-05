import jwt from 'jsonwebtoken';

const verifyToken = (token: any) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'your-secret-key', (error: any, decoded: unknown) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });
};

export default verifyToken;
