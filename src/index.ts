import { createFilter } from '@rollup/pluginutils';
import * as stylelint from 'stylelint';

import { normalizePath } from './utils';

import type { Plugin } from 'vite';
import type { Options } from './utils';

export default function viteStylelint(options: Options = {}): Plugin {
    const filter = createFilter(options.include, options.exclude || /node_modules/);

    return {
        name: 'vite-plugin-stylelint',
        async transform(code, id) {
            const file = normalizePath(id);

            if (!filter(id)) {
                return null;
            }

            const result = await stylelint.lint({
                files: file,
                formatter: 'string'
            });

            if (result.errored) {
                console.log(result.output);
            }
        },

        configureServer() {
            console.log('vite-plugin-stylelint enabled');
        }
    };
}
