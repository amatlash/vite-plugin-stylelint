import { createFilter } from '@rollup/pluginutils';
import * as stylelint from 'stylelint';

import { normalizePath, createOutputCollection, displayOutput } from './utils';

import type { Plugin } from 'vite';
import type { Options } from './utils';

export default function viteStylelint(options: Options = {}): Plugin {
    const filter = createFilter(
        options.include,
        options.exclude || /node_modules/);

    const outputCollection = createOutputCollection();

    return {
        name: 'vite-plugin-stylelint',
        async transform(code, id) {
            const file = normalizePath(id);

            if (!filter(id)) {
                return null;
            }

            await stylelint.lint({
                files: file,
                formatter: 'string'
            })
                .then(({ errored, output }) => {
                    if (errored) {
                        outputCollection.set(file, output);
                    } else if (outputCollection.has(file)) {
                        outputCollection.delete(file);
                    }
                })
                // .catch(error => console.error(error))
                .finally(() => {
                    displayOutput(outputCollection);
                })
        },

        configureServer() {
            console.log('vite-plugin-stylelint enabled');
        }
    };
}
