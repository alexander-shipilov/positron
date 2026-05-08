import type { IncludeOptions } from "../types";

/**
 * The {@link include} function evaluates the script in file.
 *
 * Similar to `eval({@link utils.ReadTextFile}(path))`, but provides more
 * features:
 *  - Has `include guards` - script won't be evaluated a second time if it was
 *    evaluated before in the same panel.
 *  - Has script caching - script file will be read only once from filesystem
 *    (even if it is included from different panels).
 *  - Has better error reporting.
 *
 * Note: when the relative `path` is used it will be searched in the following
 * paths:
 *  - `${current_package_path}/scripts/${path}`, if the panel uses a package
 *    script.
 *  - `${current_script_path}/${path}`, if the script is not a top-level
 *    `in-memory` script.
 *  - `${fb.ComponentPath}/${path}`, otherwise.
 *
 * ```ts
 *  include('samples/complete/properties.js');
 *  // include sample from `foo_spider_monkey_panel`
 * ```
 *
 * @param path - Absolute or relative path to JavaScript file.
 * @param options - Include options.
 *
 * @public
 */
export declare function include(path: string, options?: IncludeOptions): void;
