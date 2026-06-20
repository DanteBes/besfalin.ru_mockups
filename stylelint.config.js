/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    // CSS Modules часто используют camelCase-классы
    'selector-class-pattern': null,
    // пустые блоки допустимы как заглушки в модулях
    'block-no-empty': null,
    // разрешаем и старую, и новую нотацию цветов
    'color-function-notation': null,
    'hue-degree-notation': null,
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    // не требуем строгого порядка пустых строк
    'declaration-empty-line-before': null,
  },
}
