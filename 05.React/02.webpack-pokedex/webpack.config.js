const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module:{
        rules:[ //Aquí se cargan los Loaders de WebPack
            {
                test: /\.html$/, //REGEX -> Busca todos los archivos que terminan en .html
                use: [
                    {
                        loader: "html-loader", //Traduce HTML para que webpack lo entienda
                        options: {minimize:true} //Minifica los archivos HTML encontrados
                    }
                ]
                //test: Significa que tengo que buscar
                //use: de lo que encontre, que Loader voy a aplicar
            },
            {
                test: /\.js$/, //Va a buscar todos los archivos JS en mi proyecto
                exclude: /node_modules/, //Le digo que no busque en la carpeta node_modules
                use: {
                    loader: "babel-loader" //carga babel
                }
            },
            {
                test: /\.scss$/,
                use: [ //El orden de los Loader SI importa
                    "style-loader", // Procesa estilos en linea
                    "css-loader", // Procesa estilos en archivos CSS
                    "postcss-loader",
                    "sass-loader" // Procesa estilos en archivos SCSS (SASS)
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    "file-loader" //Se puede colocar de manera implicita sin usar la palabra loader:
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Que archivo HTML va a ser el base de mi proyecto en la carpeta src
            filename:"./index.html" // Que único archivo de HTML se va a generar en la carpeta dist
            //El archivo de conf. de webpack simula que se trabaja desde la carpeta dist, por lo que no se necesita especificar.
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css", //Webpack se encargará de generar un nombre del archivo de CSS por nosotros.
            chunkFilename: "[id].css" //Separa el CSS en pedacitos para que dependiendo de la vista solo cargue el CSS necesario. Solo se ejecuta en el caso si hay mucho CSS o es muy grande.
        }),
    ]
}