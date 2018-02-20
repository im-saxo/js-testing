'use strict';

const { assert } = chai; 

// describe('isPrimitive - проверяет, является ли тип примитивным', () => {
//   it('...', () => {
//     assert(false);
//   });
// });

describe('deepEqual - сравнивает объекты по значению', () => {
  it('должен возвращать true для объектов с одинаковыми данными', () => {
    let actual = deepEqual({foo: 1}, {foo: 1});
    
    assert(actual, 'Объекты не равны');
  });
});

