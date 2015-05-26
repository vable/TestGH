module.exports = {
    //entry: "./js/MyApp.js",
    // i am remote
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    } 
};