define(function(require,exports,module){
    var cvs = document.getElementById('cvs');
    var ctx = cvs.getContext('2d');
    exports.cvs=cvs;
    exports.ctx=ctx;
})