it('Verifica se o nome da personagem é Wonder Woman', async () => {
  const character = await fetchCharacter('720');
  console.log(character.name);
});