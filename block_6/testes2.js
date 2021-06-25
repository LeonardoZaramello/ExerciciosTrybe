function createObject (object, keyName, value) {
  let newObject = object;
  let newKeyName = keyName;
  let newValue = value;

  newObject[newKeyName] = newValue;

  return newObject;
}

console.log(createObject(User1 = {}, 'nome', 'Leonardo'));

console.log(createObject(User2 = {}, 'nome', 'Renata')); 