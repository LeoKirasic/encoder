module.exports = function login (req, res) {
  const { email, password } = req.body
  if (
    email === 'a' &&
    password === 'a'
  ) {
    return res.send({ token: 'xyz0987654321' })
  }

  return res.status(401).send('Login failed.')
}