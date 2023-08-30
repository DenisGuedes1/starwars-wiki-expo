module.eports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['react', 'react-hooks', 'import'],
    setting: {
        'import/resolver': {
            'babel-plugin-root-import':{
                rootPathSuffix: 'src',
            },
        },
    },
    rules: {
        semi: [2, 'never'],
        'no-extra-boolean-cast': 'off',
    },

}