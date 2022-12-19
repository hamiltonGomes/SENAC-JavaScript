const Sequelize = require('sequelize');
const sequelize = new Sequelize('bancoatividade1', 'root', '123456', {
    host: 'localhost',
    dialect: "mysql",
});

// drop table nomeDaTabela -> código para apagar tabela
// código para criação da tabela ^

const tabela1 = sequelize.define('Tabela1', {
    postagensDeBlog: {
        type: Sequelize.INTEGER
    },
    usuarios: {
        type: Sequelize.STRING
    },
    atividades: {
        type: Sequelize.TEXT
    },
    timeDeFutebol: {
        type: Sequelize.TEXT
    },
    serie: {
        type: Sequelize.TEXT
    }
})

const tabela2 = sequelize.define('Tabela2', {
    postagensDeBlog: {
        type: Sequelize.INTEGER
    },
    usuarios: {
        type: Sequelize.STRING
    },
    atividades: {
        type: Sequelize.TEXT
    },
    timeDeFutebol: {
        type: Sequelize.TEXT
    },
    serie: {
        type: Sequelize.TEXT
    }
})

const tabela3 = sequelize.define('Tabela3', {
    postagensDeBlog: {
        type: Sequelize.INTEGER
    },
    usuarios: {
        type: Sequelize.STRING
    },
    atividades: {
        type: Sequelize.TEXT
    },
    timeDeFutebol: {
        type: Sequelize.TEXT
    },
    serie: {
        type: Sequelize.TEXT
    }
})

const tabela4 = sequelize.define('Tabela4', {
    postagensDeBlog: {
        type: Sequelize.INTEGER
    },
    usuarios: {
        type: Sequelize.STRING
    },
    atividades: {
        type: Sequelize.TEXT
    },
    timeDeFutebol: {
        type: Sequelize.TEXT
    },
    serie: {
        type: Sequelize.TEXT
    }
})

const tabela5 = sequelize.define('Tabela5', {
    postagensDeBlog: {
        type: Sequelize.INTEGER
    },
    usuarios: {
        type: Sequelize.STRING
    },
    atividades: {
        type: Sequelize.TEXT
    },
    timeDeFutebol: {
        type: Sequelize.TEXT
    },
    serie: {
        type: Sequelize.TEXT
    }
})


/* tabela1.sync({ force: true }) 
tabela2.sync({ force: true })
tabela3.sync({ force: true })
tabela4.sync({ force: true })
tabela5.sync({ force: true }) */

 
// TABELA 1

tabela1.create({
    postagensDeBlog: 64,
    usuarios: "Hamilton",
    atividades: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Game of Thrones",

});

tabela1.create({
    postagensDeBlog: 21,
    usuarios: "Marcio",
    atividades: "Banana, maça, manga, uva. Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Sons of Anarchy",
})

tabela1.create({
    postagensDeBlog: 97,
    usuarios: "João",
    atividades: "Não convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Santa Cruz",
    serie: "House of the Dragon",
})

tabela1.create({
    postagensDeBlog: 87,
    usuarios: "Junior",
    atividades: "Ônibus, carro, metrô. 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Náutico",
    serie: "Santa Cruz",
})


//TABELA 2

tabela2.create({
    postagensDeBlog: 64,
    usuarios: "Hamilton",
    atividades: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Game of Thrones",

});

tabela2.create({
    postagensDeBlog: 21,
    usuarios: "Marcio",
    atividades: "Banana, maça, manga, uva. Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Sons of Anarchy",
})

tabela2.create({
    postagensDeBlog: 97,
    usuarios: "João",
    atividades: "Não convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Santa Cruz",
    serie: "House of the Dragon",
})

tabela2.create({
    postagensDeBlog: 87,
    usuarios: "Junior",
    atividades: "Ônibus, carro, metrô. 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Náutico",
    serie: "Santa Cruz",
})

// TABELA 3


tabela3.create({
    postagensDeBlog: 64,
    usuarios: "Hamilton",
    atividades: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Game of Thrones",

});

tabela3.create({
    postagensDeBlog: 21,
    usuarios: "Marcio",
    atividades: "Banana, maça, manga, uva. Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Sons of Anarchy",
})

tabela3.create({
    postagensDeBlog: 97,
    usuarios: "João",
    atividades: "Não convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Santa Cruz",
    serie: "House of the Dragon",
})

tabela3.create({
    postagensDeBlog: 87,
    usuarios: "Junior",
    atividades: "Ônibus, carro, metrô. 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Náutico",
    serie: "Santa Cruz",
})

// TABELA 4


tabela4.create({
    postagensDeBlog: 64,
    usuarios: "Hamilton",
    atividades: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Game of Thrones",

});

tabela4.create({
    postagensDeBlog: 21,
    usuarios: "Marcio",
    atividades: "Banana, maça, manga, uva. Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Sons of Anarchy",
})

tabela4.create({
    postagensDeBlog: 97,
    usuarios: "João",
    atividades: "Não convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Santa Cruz",
    serie: "House of the Dragon",
})

tabela4.create({
    postagensDeBlog: 87,
    usuarios: "Junior",
    atividades: "Ônibus, carro, metrô. 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Náutico",
    serie: "Santa Cruz",
})

// TABELA 5


tabela5.create({
    postagensDeBlog: 64,
    usuarios: "Hamilton",
    atividades: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Game of Thrones",

});

tabela5.create({
    postagensDeBlog: 21,
    usuarios: "Marcio",
    atividades: "Banana, maça, manga, uva. Vai ser massa!",
    timeDeFutebol: "Sport",
    serie: "Sons of Anarchy",
})

tabela5.create({
    postagensDeBlog: 97,
    usuarios: "João",
    atividades: "Não convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Santa Cruz",
    serie: "House of the Dragon",
})

tabela5.create({
    postagensDeBlog: 87,
    usuarios: "Junior",
    atividades: "Ônibus, carro, metrô. 18 de dezembro de 2022! Vai ser massa!",
    timeDeFutebol: "Náutico",
    serie: "Santa Cruz",
})