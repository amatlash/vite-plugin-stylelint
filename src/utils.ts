import * as path from 'path';
import { clearTimeout, setTimeout } from 'timers';

/**
 * Normalizes file path. Allows to locate local files by url with query.
 * @param filePath File path
 */
export function normalizePath(filePath: string): string {
    return path
        .relative(process.cwd(), filePath)
        .split('?')[0]
        .split(path.sep)
        .join('/');
}

export interface Options {
    /**
     * A single file, or array of files, to include when linting.
     * @default /.*\.(vue|scss|sass|css|postcss)/
     */
    include?: string | string[] | RegExp;
    /**
     * A single file, or array of files, to exclude when linting.
     * @default /node_modules/
     */
    exclude?: string | string[] | RegExp;
}

/**
 * Collection of stylelint formatted outputs.
 * Helps to prevent loosing previously added outputs on any Vite dev-server update.
 * @key filePath
 * @value stylelinter output
 */
export type OutputCollection = Map<string, string>;

/**
 * Creates specific Map to handle linter outputs
 */
export function createOutputCollection(): OutputCollection {
    return new Map<string, string>();
}

/**
 * Debounce timeout for disaplying outputs
 */
let timeoutId: NodeJS.Timeout;

/**
 * Displays error stack via terminal (debounced)
 */
export function displayOutput(collection: OutputCollection): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout( () => {
        debouncedDisplayOutput(collection)
    }, 200);
}

/**
 * Debounced function to prevent multiple output display at dev-server updates
 */
function debouncedDisplayOutput(collection: OutputCollection): void {
    collection.forEach(output => {
        console.log(output);
    });
}
