// Require Node modules in the browser thanks to Browserify: http://browserify.org
// var $ = require('./bower_components/jquery/dist/jquery.js');
var $ = require('jquery');
var bespoke = require('bespoke');
// var theme = require('bespoke-theme-cube');
var theme = require('bespoke-theme-voltaire');
var keys = require('bespoke-keys');
var touch = require('bespoke-touch');
var bullets = require('bespoke-bullets');
var progress = require('bespoke-progress');
var forms = require('bespoke-forms');
var hash = require('bespoke-hash');
var localeval = require('localeval');

// Bespoke.js
bespoke.from('article', [
	theme(),
	keys(),
	touch(),
	bullets('li, .bullet'),
	progress(),
	forms(),
	hash()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

$('.editor').each(function (ix, element) {
	var ta = $(element).find('textarea').get()[0];
	console.log(ta);
	new Behave({
		textarea: ta
	});
});

$(document).on('click', 'button', function (event) {
	var $button = $(event.currentTarget);
	var $editor = $button.closest('.editor');
	var $textarea = $editor.find('textarea');
	var value = $textarea.val();
	var res = localeval(value, {});
	var $output = $editor.find('.output');
	$output.html(res);
});

// var editor = ace.edit("editor");
// editor.setTheme("ace/theme/monokai");
// editor.getSession().setMode("ace/mode/javascript");

