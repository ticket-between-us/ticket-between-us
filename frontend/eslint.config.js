import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'

export default [
  { ignores: ['dist/**', 'coverage/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  // 코드 모양(띄어쓰기, 따옴표 등)은 Prettier가 담당하므로 ESLint의 서식 규칙은 끕니다.
  skipFormatting,
]
