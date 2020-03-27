const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola(){
    return 'Bom dia!'
  },
  horaAtual(){
    return new Date
  },
  usuarioLogado(){
    return {
      id: 1,
      nome: 'Ana da Web',
      email: 'anadaweb@email.com',
      idade: 23,
      salario_real: 1234.56,
      vip: true
    }
  },
  produtoEmDestaque() {
    return {
      nome: 'Produto da Ana',
      preco: 160.90,
      desconto: 0.85
    }
  },
  numerosMegaSena(){
    // return [4, 8, 13, 28, 33, 54]
    const crescente = (a, b) => a - b
    return Array(6).fill(0)
          .map(n => parseInt(Math.random() * 60 + 1))
          .sort(crescente)
  },
  usuarios(){
    return usuarios
  },
  usuario(_, args) {
    const sels = usuarios
      .filter(u => u.id === args.id)
      return sels ? sels[0] : null
  },
  perfis(){
    return perfis
  },
  perfil(_, { id }) {
    const selecs = perfis
      .filter(p => p.id === id)
      return selecs ? selecs[0] : null
  }
}