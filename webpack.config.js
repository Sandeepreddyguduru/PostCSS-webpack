module.exports = {
    module: {
        module="development",
        entry='./src/index.js',
        devServer: {
            contentBase: './dist',
        },
        rules: [
            {
                test: /\.(sass|less|css|scss)?$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        "autoprefixer",
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
};