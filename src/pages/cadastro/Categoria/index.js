import React, {useState} from "react";
import PageDefault from "../../../components/PageDefault";
import {Link} from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([
    {
      nome: 'Teste',
      descricao: 'Teste',
      cor: '#FFFFFF'
    }
  ]);

  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '#FFFFFF'
  };

  const [values, setValues] = useState(valoresInicias);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor
    });
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValue(name, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategorias([
      ...categorias,
      values
    ]);

    setValues(valoresInicias);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: <b style={{color: values.cor}}>{values.nome}</b></h1>

      <form onSubmit={handleSubmit}>
        {/*State é necessário quando você tem muita coisa na sua aplicação e vai ser demandado um controle. o State guarda o valor,*/}
        {/*O State vai ter dados, tem uma variável de controle um true e false do menu, você vai ter um valores bases que inicializam junto com a aplicação*/}
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          type="text"
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

        <button>
          Cadastrar
        </button>
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