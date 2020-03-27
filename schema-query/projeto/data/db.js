const usuarios = [{
  id: 1,
  nome: 'Joao Silva',
  email: 'jsilva@email.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
},
{
  id: 2,
  nome: 'Rafa Ju',
  email: 'rafajun@email.com',
  idade: 30,
  perfil_id: 2,
  status: 'INATIVO'
}, 
{
  id: 3,
  nome: 'jujua Ju',
  email: 'jujuju@email.com',
  idade: 40,
  perfil_id: 1,
  status: 'BLOQUEADO'
}
]

const perfis = [
  {
    id: 1,
    nome: 'Comum'
  },
  {
    id: 2,
    nome: 'Administrador'
  }
]

module.exports = { usuarios, perfis }