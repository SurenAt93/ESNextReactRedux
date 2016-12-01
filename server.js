const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const config = require('./config');

// Log (C->S data connect) => part 01 ::: Test from Client - > Server data connect

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Log (End Test) ::: (C->S data connect)

const app = new (require('express'))();

// Log (C->S data connect) => part 02 ::: Test from Client - > Server data connect

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Log (End Test) ::: (C->S data connect)

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Log (C->S data connect) => part 03 ::: Test from Client - > Server data connect

require('./routes')(app);

// Log (End Test) ::: (C->S data connect)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(config.get('port') || process.env.PORT || 3000, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", 
      config.get('port'), config.get('port'));
  }
})