const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Corrigido para caminho relativo dentro do backend

async function createAdmin() {
  try {
    const existingUser = await User.findOne({ email: 'admin@gmail.com' });
    if (existingUser) {
      console.log('Administrador já existe.');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('adminpassword', salt);

    const newAdmin = new User({
      username: 'admin',
      email: 'admin@gmail.com',
      password: hashedPassword,
      fullName: 'Administrador',
      role: 'admin',
      createdAt: new Date('2025-05-04T00:00:00.000'),
    });

    await newAdmin.save();
    console.log('Administrador criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar o administrador:', error);
  }
}

mongoose.connect('mongodb+srv://admin:suaSenha123@cik.sjtgy83.mongodb.net/?retryWrites=true&w=majority&appName=CIK', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao MongoDB!');
    createAdmin();
  })
  .catch((error) => console.error('Erro de conexão com o MongoDB:', error));
