/**
 * Evaluates the script in file.<br>
 * Similar to `eval({@link utils.ReadTextFile}(path))`, but provides more features:<br>
 * - Has `include guards` - script won't be evaluated a second time if it was evaluated before in the same panel.<br>
 * - Has script caching - script file will be read only once from filesystem (even if it is included from different panels).<br>
 * - Has better error reporting.<br>
 * <br>
 * Note: when the relative `path` is used it will be searched in the following paths:<br>
 * - `${current_package_path}/scripts/${path}`, if the panel uses a package script.<br>
 * - `${current_script_path}/${path}`, if the script is not a top-level `in-memory` script.<br>
 * - `${fb.ComponentPath}/${path}`, otherwise.
 *
 * @param {string} path Absolute or relative path to JavaScript file.
 * @param {object=} [options=undefined]
 * @param {boolean=} [options.always_evaluate=false] If true, evaluates the script even if it was included before.
 *
 * @example <caption>Include sample from `foo_spider_monkey_panel`</caption>
 * include('samples/complete/properties.js')
 */
function include(path, options) {}
