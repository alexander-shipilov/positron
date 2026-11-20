The `@positron/lang-nominal` package provides internal types for storing nominal
types metadata and is used by the `@positron/lang` package.

It serves to prevent the duplication of classes and symbols in situations where
different versions of the `@positron/lang` package coexist in the project's
dependency tree. Such duplication would lead to ambiguity when using the
`@positron/lang:Nominal` type.

For this reason, this package will never have a new major version.

Thanks to [sindresorhus](https://www.npmjs.com/~sindresorhus) for the idea and
the awesome [type-fest](https://www.npmjs.com/package/type-fest) package.