function autenticar(usuarios, email, senha) {
  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) return false;
  return usuario.senha === senha && usuario.ativo === true;
}
function forcaSenha(senha) {
  if (senha.length < 8) {
    return 'fraca';
  }
  let tipos = 0;
  if (/[a-z]/.test(senha)) tipos++;
  if (/[A-Z]/.test(senha)) tipos++;
  if (/\d/.test(senha)) tipos++;
  if (/[^a-zA-Z0-9]/.test(senha)) tipos++;

  if (tipos <= 2) {
    return 'media';
  }
  return 'forte';
}
function podeLogar(usuario) { return true; }
function calcularFrete(distanciaKm) { return 0; }
function aplicarCupom(valor, cupom) { return valor; }

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };