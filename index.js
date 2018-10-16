var path = require('path');
var express = require('express');
var app = express();
 
app.set('port', (process.env.PORT || 8080));
 
app.use(express.static(path.join(__dirname + '/dist/grtvendas')));
 
// redireciona todas as requições para o Angular 2 
app.all('*', function(req, res) {
  res.status(200).sendFile(
  	path.join(__dirname + '/dist/grtvendas/index.html'));
});
 
app.listen(app.get('port'), function() {
  console.log('Node executando na porta ', app.get('port'));
});