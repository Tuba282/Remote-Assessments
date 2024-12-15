import ExternalImportPlugin from 'webpack-external-import';

export const plugins = [
    new ExternalImportPlugin({
        allowedSchemes: ['https'],
    }),
];
