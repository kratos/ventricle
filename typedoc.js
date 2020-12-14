module.exports = {
    // out: './docs/',
    // platform: 'bitbucket',
    // theme: 'markdown',
    module: 'es2015',
    includes: './packages/**',
    mode: 'file',
    excludeExternals: true,
    excludeNotExported: true,
    excludePrivate: true,
    excludeProtected: true,
    target: 'ES6',
    tsconfig: './tsconfig.json',
    ignoreCompilerErrors: true,
};