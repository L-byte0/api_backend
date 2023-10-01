import { generateToken } from "../utils/tokenmanager.js";
import { Usermodel } from "../models/UserModel.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Usermodel.findOne({ email });
    if (user) throw { code: 11000 };

    user = new Usermodel({ email, password });
    await user.save();

    //generate token
    const { token, expiresIn } = generateToken(user.id);
    return res.json({ token, expiresIn });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Ya existe este usuario" });
    }

    return res.status(500).json({ error: "Error de servidor" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Usermodel.findOne({ email });
    if (!user) return res.json({ error: "usuario no existe" });
    const respuestaPassword = await user.comparePassword(password);
    if (!respuestaPassword)
      return res.status(403).json({ error: "Contraseña incorrecta" });

    // Generar el token JWT
    const { token, expiresIn } = generateToken(user.id);

    return res.json({ token, expiresIn });
  } catch (error) {
    return res.status(500).json({ error: "Error de servidor" });
  }
};
