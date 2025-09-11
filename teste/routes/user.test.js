const request = require('supertest')

const app = require('../../src/app');

const mail = `${Date.now()}@teste.com`

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

test('Não deve inserir usuário sem email', async () => {
    const result = await request(app).post('/users')
        .send({ name: 'Lucas', passwd: '123456' })
    expect(result.status).toBe(400)
    expect(result.body.error).toBe('Email é um atributo obrigatório')
})

test('Não deve inserir usuário sem senha', (done) => {
    request(app).post('/users')
        .send({ name: 'Jefferson', mail: 'mail@teste.com' })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Senha é um atributo obrigatório')
            done();
        })
})

test('Não deve inserir usuário com email existente', () => {
    return request(app).post('/users')
        .send({ name: 'Lucas', mail, passwd: '123456' })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Já existe um usuário com esse email')
        })
})