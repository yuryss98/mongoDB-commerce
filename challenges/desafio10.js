db.produtos.find(
  { valoresNutricionais: {
      $all: [
        { $elemMatch: { tipo: 'proteínas', percentual: { $gte: 30, $lte: 40 } } }
      ]
    }
  }, { _id: 0, nome: 1 }
);