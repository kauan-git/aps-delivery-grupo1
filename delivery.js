function autenticar(usuarios, email, senha) {
  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) return false;
  return usuario.senha === senha && usuario.ativo === true;
}
function forcaSenha(senha) { return ''; }
function podeLogar(usuario) { return true; }
function calcularFrete(distanciaKm) { return 0; }
function aplicarCupom(valor, cupom) { return valor; }

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };