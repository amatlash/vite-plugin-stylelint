import * as path from 'path';

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
    /** A single file, or array of files, to include when linting. */
    include?: string | string[];
    /** A single file, or array of files, to exclude when linting. */
    exclude?: string | string[];
}

export function filePathGotQuery(id: string): boolean {
    return id.includes('?');
}
