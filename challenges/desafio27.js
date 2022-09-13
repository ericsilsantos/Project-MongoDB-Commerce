db.produtos.countDocuments({
  nome: { $regex: /MC/ig },
});