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
function podeLogar(usuario) {
  return usuario.status === 'ativo' && usuario.falhas < 3;
}
function calcularFrete(distanciaKm) {
  if (distanciaKm <= 0) {
    throw new Error('Distância inválida');
  }
  if (distanciaKm <= 3) {
    return 5;
  }
  const excedente = distanciaKm - 3;
  return Number((5 + excedente * 1.50).toFixed(2));
}
function aplicarCupom(valor, cupom) {
  if (cupom === null || cupom === undefined || cupom === '') {
    return Number(valor.toFixed(2));
  }
  if (cupom === 'PRIMEIRA10') {
    return Number((valor * 0.90).toFixed(2));
  }
  if (cupom === 'VIP20') {
    return Number((valor * 0.80).toFixed(2));
  }
  throw new Error('Cupom inválido');
}

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };