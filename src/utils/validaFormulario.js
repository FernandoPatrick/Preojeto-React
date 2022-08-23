export default function validaFormulario(values, errorFn) {
  let msg;

  if (values.hasOwnProperty('nome')) {
    if ((msg = validaCampoSimplesObrigatorio(values.nome, 'Nome'))) {
      errorFn('nome', msg);
    }
  }

  if (values.hasOwnProperty('email')) {
    if ((msg = validaCampoSimplesObrigatorio(values.email, 'E-mail'))) {
      errorFn('email', msg);
    } else if ((msg = validaEmail(values.email))) {
      errorFn('email', msg);
    }
  }

  if (values.hasOwnProperty('cpf')) {
    if ((msg = validaCampoSimplesObrigatorio(values.cpf, 'CPF'))) {
      errorFn('cpf', msg);
    } else if ((msg = validaCpf(values.cpf))) {
      errorFn('cpf', msg);
    }
  }

  if (values.hasOwnProperty('checked')) {
    if ((msg = validaCampoChecked(values.checked))) {
      errorFn('checked', msg);
    }
  }
}

function validaCampoSimplesObrigatorio(value, text) {
  return !value ? `${text} é obrigatório!` : '';
}

function validaEmail(email) {
  const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  return !regex.test(email) ? 'E-mail inválido!' : '';
}

function validaCpf(cpf) {
  const regex = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/;
  return !regex.test(cpf) ? 'CPF inválido!' : '';
}

function validaCampoChecked(value) {
  return !value ? 'Selecione um campo!' : '';
}
