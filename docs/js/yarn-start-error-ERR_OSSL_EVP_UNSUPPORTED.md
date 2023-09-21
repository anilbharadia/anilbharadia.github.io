```shell
yarn start
```

Result 
```console
yarn run v1.22.19
$ webpack serve --config config/webpack/development.config.js
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /ProjectDir/dist
ℹ ｢wds｣: 404s will fallback to /index.html
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:138:10)
    at BulkUpdateDecorator.hashFactory (/ProjectDir/node_modules/webpack/lib/util/createHash.js:145:18)
    at BulkUpdateDecorator.update (/ProjectDir/node_modules/webpack/lib/util/createHash.js:46:50)
    at OriginalSource.updateHash (/ProjectDir/node_modules/webpack-sources/lib/OriginalSource.js:104:8)
    at NormalModule._initBuildHash (/ProjectDir/node_modules/webpack/lib/NormalModule.js:870:17)
    at handleParseResult (/ProjectDir/node_modules/webpack/lib/NormalModule.js:936:10)
    at /ProjectDir/node_modules/webpack/lib/NormalModule.js:1028:4
    at processResult (/ProjectDir/node_modules/webpack/lib/NormalModule.js:745:11)
    at /ProjectDir/node_modules/webpack/lib/NormalModule.js:809:5
node:internal/crypto/hash:69
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:138:10)
    at BulkUpdateDecorator.hashFactory (/ProjectDir/node_modules/webpack/lib/util/createHash.js:145:18)
    at BulkUpdateDecorator.update (/ProjectDir/node_modules/webpack/lib/util/createHash.js:46:50)
    at OriginalSource.updateHash (/ProjectDir/node_modules/webpack-sources/lib/OriginalSource.js:104:8)
    at NormalModule._initBuildHash (/ProjectDir/node_modules/webpack/lib/NormalModule.js:870:17)
    at handleParseResult (/ProjectDir/node_modules/webpack/lib/NormalModule.js:936:10)
    at /ProjectDir/node_modules/webpack/lib/NormalModule.js:1028:4
    at processResult (/ProjectDir/node_modules/webpack/lib/NormalModule.js:745:11)
    at /ProjectDir/node_modules/webpack/lib/NormalModule.js:809:5 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v20.6.1
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```


## Solution

```shell
export NODE_OPTIONS=--openssl-legacy-provider
```