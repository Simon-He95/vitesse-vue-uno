import simon from '@antfu/eslint-config'

export default simon({
  ignores: ['**/fixtures', 'test', 'shims.d.ts'],
}, {
  rules: {
    'no-console': 'off',
  },
})
