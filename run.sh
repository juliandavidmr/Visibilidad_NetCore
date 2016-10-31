echo "Transpilando codigo..."
webpack --config --progress webpack.config.vendor.js

echo "Transpilacion finalizada."

echo "Arrancando servidor..."
dotnet run