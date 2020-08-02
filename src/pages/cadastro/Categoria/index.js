import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([
    {
      nome: 'Teste',
      descricao: 'Teste',
      cor: '#FFFFFF',
    },
  ]);

  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '#FFFFFF',
  };

  const [values, setValues] = useState(valoresInicias);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategorias([
      ...categorias,
      values,
    ]);

    setValues(valoresInicias);
  };

  useEffect(() => {
    // carregar os dados iniciais
    console.log('carreguei');
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:&nbsp;
        <b style={{ color: values.cor }}>{values.nome}</b>
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="cor"
          value={values.cor}
          type="color"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => <li key={`${categoria.nome}${index}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
