const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('carros antigos.html', 'utf8');
const dadosJs = fs.readFileSync('js/dados.js', 'utf8');
const mainJs = fs.readFileSync('js/main.js', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("log", (...data) => console.log(...data)); virtualConsole.on("error", (...data) => console.error(...data));

const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    virtualConsole: virtualConsole
});

const script1 = dom.window.document.createElement("script");
script1.textContent = dadosJs;
dom.window.document.body.appendChild(script1);

const script2 = dom.window.document.createElement("script");
script2.textContent = mainJs;
dom.window.document.body.appendChild(script2);

setTimeout(() => {
    console.log("Cars rendered:", dom.window.document.querySelectorAll('.car').length);
}, 1000);
dom.window.document.dispatchEvent(new dom.window.Event("DOMContentLoaded"));
