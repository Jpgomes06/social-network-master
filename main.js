const bcrypt = require('bcrypt');
const password = "123123123"

bcrypt.hash(password, 10)
  .then(hashedPassword => {
    console.log(hashedPassword);
    // Agora, compare a senha 
    bcrypt.compare("25687", hashedPassword)
      .then(isMatch => {
        if (isMatch) {
          console.log("As senhas coincidem.");
        } else {
          console.log("As senhas não coincidem.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  }
);