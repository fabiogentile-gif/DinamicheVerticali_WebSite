db.nomeCollezione.insertOne({
  titolo: "Esempio titolo",
  descrizione: "Testo di esempio",
  prezzo: 29.99,
  attivo: true,
  tags: ["tag1", "tag2"],
  createdAt: new Date()
});

  {
    titolo: "Primo elemento",
    prezzo: 10,
    attivo: true,
    createdAt: new Date()
  },
  {
    titolo: "Secondo elemento",
    prezzo: 20,
    attivo: false,
    createdAt: new Date()
  }