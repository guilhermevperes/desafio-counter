// LANGUAGE ENUM

export const HEADER = {
  TITLE: {
    COUNTER_LIST: 'Contadores',
    COUNTER_CONFIG: 'Configurações'
  }
}

export const COUNTERS_SCREEN = {
  SELECTED_COUNTER: 'Contador selecionado:',
  COUNTERS: 'Contadores:',
  COUNTER_NAME: 'Nome: ',
  CURRENT_VALUE: 'Contagem atual: ',
  INCREMENT: 'Incrementar',
  DECREMENT: 'Decrementar',
  MAX_VALUE: 'Valor Máximo: ',
  MIN_VALUE: 'Valor Mínimo: ',
  ADD_COUNTER: 'Adicionar',
  REMOVE_COUNTER: 'Remover',
  EDIT: 'Editar',
  SAVE: 'Salvar',
  NEW_COUNTER: 'Novo contador:',
  RESET: 'Resetar',
  COUNTER_REMOVED: 'Contador Removido',
  OK: 'Ok',
  OPS: 'Ops',
  ALERT_MAX_MIN: 'O valor máximo é menor que o valor mínimo.',
  ALERT_FILL_NAME: 'Preencha o nome!',
  ALERT_FILL_MAX_MIN: 'Preencha os valores de máximo e mínimo!',
  VOID_MESSAGE: 'Você não possui contadores... Crie um abaixo!'
}

// PROJECT CONFIG ENUM

export const NAVIGATION_SCREEN = {
  BOTTOM_TAB: 'BottomTab',
  COUNTERS_SCREEN: 'CounterConfigScreen',
  COUNTER_LIST_SCREEN: 'CounterListScreen'
}

export const CONTEXT = {
  TAB: {
    SET_LIST_ICON_COLOR: 'SET_LIST_ICON_COLOR',
    SET_CONFIG_ICON_COLOR: 'SET_CONFIG_ICON_COLOR',
    SET_HEADER_TITLE: 'SET_HEADER_TITLE'
  },
  COUNTER: {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    SET_SELECTED_COUNTER: 'SET_SELECTED_COUNTER',
    SET_MAX_VALUE: 'SET_MAX_VALUE',
    SET_MIN_VALUE: 'SET_MIN_VALUE',
    UPDATE_COUNTER: 'UPDATE_COUNTER',
    REMOVE_COUNTER: 'REMOVE_COUNTER',
    ADD_COUNTER: 'ADD_COUNTER',
    RESET_COUNTER: 'RESET_COUNTER'
  }
}

export const FONTS = {
  REGULAR: 'Montserrat-Regular',
  MEDIUM: 'Montserrat-Medium',
  SEMI_BOLD: 'Montserrat-SemiBold',
  BOLD: 'Montserrat-Bold'
}
