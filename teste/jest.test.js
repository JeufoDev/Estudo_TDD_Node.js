test('Devo conhecer as principais assertivas do jest', ()=>{
    let num = null;
    expect(num).toBeNull(); //Espera que o num seja nulo
    num = 10;
    expect(num).not.toBeNull(); //Espera que o num não seja nulo
    expect(num).not.toBe(-10); //Espera que o num não seja igual ao num passado
    expect(num).toEqual(10); //Espera que o num seja igual ao num passado
    expect(num).toBeGreaterThan(9); //Espera que o num seja maior que o num passado
    expect(num).toBeLessThan(11) //Espera que o num seja menor que o num passado
});

test('Devo saber trabalhar como objetos', ()=>{
    const obj = {name: 'Jefferson', email: 'jeff@teste.com'}
    expect(obj).toHaveProperty('name') //Espera que o objeto passado tenha certa propriedade
    expect(obj).toHaveProperty('name', 'Jefferson') //Espera que o objeto passado tenha certa propriedade e que o nome seja esse
    expect(obj.name).toBe('Jefferson') //Espera que o objeto passado tenha certa propriedade e que o nome seja esse


    const obj2 = {name: 'Jefferson', email: 'jeff@teste.com'}
    const obj3 = obj;
    expect(obj).toBe(obj3);
    expect(obj).toEqual(obj2);
});