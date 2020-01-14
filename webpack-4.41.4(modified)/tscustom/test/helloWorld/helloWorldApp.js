const PATH = require( 'path' )
const webpack = require( '../../../lib/webpack.js' )

const webpackConfig = {
    entry: PATH.resolve( __dirname, 'src/bar.js' ),
    output: {
        filename: 'bundle.js',
        path: PATH.resolve( __dirname, 'dist' )
    },
    optimization: {
        minimize: false
    }
}

webpack( webpackConfig ).run( () => {
    console.log( 'compiled!' )
} )