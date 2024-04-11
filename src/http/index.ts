import type Categoria from '@/interfaces/ICategoria';
import type Receita from '@/interfaces/IReceita';

export async function getCategorias(): Promise<Categoria[]> {
  const response = await fetch(
    'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json'
  );
  return await response.json();
}

export async function getReceitas(): Promise<Receita[]> {
  const response = await fetch(
    'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json'
  );

  return await response.json();
}
