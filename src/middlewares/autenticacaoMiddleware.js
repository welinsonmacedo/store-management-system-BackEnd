const autenticacaoMiddleware = (req, res, next) => {
  // Recupera o token de autenticação dos cabeçalhos da requisição
  const token = req.headers.authorization;

  // Verifica se o token está presente
  if (!token) {
    // Se o token não estiver presente, retorna uma resposta de não autorizado
    return res.status(401).json({ error: 'Acesso não autorizado. Token não fornecido.' });
  }

  // Adicione aqui a lógica de verificação do token, como verificar no banco de dados
  // Se o token for válido, chame next(); caso contrário, retorne uma resposta de não autorizado.

  // Exemplo simplificado: sempre permite a passagem para as próximas rotas
  next();
};

module.exports = autenticacaoMiddleware;

  