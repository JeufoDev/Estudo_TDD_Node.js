const request = require('supertest')

const app = require('../../src/app');

test('Deve listar todos os usuários', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
            //expect(res.body[0]).toHaveProperty('name', 'Jefferson')
            //expect(Array.isArray(res.body)).toBe(true) Verifica se o que foi enviado é um array
            //expect(res.body.length).toBeGreaterThan(1) Verifica se o tamanho do array é maior(pode ser usado o menor também)
        })
})

test('Deve inserir usuário com sucesso', () => {
    const mail = `${Date.now()}@teste.com`

    return request(app).post('/users')
        .send({ name: 'Lucas', mail, passwd: '123456' })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Lucas')
        })
})

test('Não deve inserir um usuário sem nome', () => {
    return request(app).post('/users')
        .send({ mail: 'mail@teste.com', passwd: '123456' })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Nome é um atributo obrigatório')
        })
})