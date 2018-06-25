var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var _ = require('lodash');
var async = require('async');
var foreach = require('foreach');

async.timesSeries(
  15,
  function(t, next) {
    var count = Math.pow(2, t);
    var suite = new Benchmark.Suite(`${count} object size`);

    var object = {};
    for (var i = 0; i < count; i++) {
      object[i] = i;
    }
    
    var callbackSync = function(value, index) { value; };
    var callbackAsync = function(value, index, next) {
      value;
      next();
    };

    suite.add('Object.keys for', function() {
      var array = Object.keys(object);
      for (var i = 0; i < count; i++) {
        object[array[i]];
      };
    });
    suite.add('Object.keys while', function() {
      var array = Object.keys(object);
      var i = 0;
      while (i < count) {
        object[array[i]];
        i++;
      }
    });
    suite.add('for-in', function() {
      for (var i in object) {
        object[i];
      }
    });
    suite.add('Object.keys forEach', function() {
      Object.keys(object).forEach(callbackSync);
    });
    suite.add('lodash@4.17.10 forEach', function() {
      _.forEach(object, callbackSync);
    });
    suite.add('async@2.6.1 forEachOf', function() {
      async.forEachOf(object, callbackAsync);
    });
    suite.add('async@2.6.1 forEachOfSeries', function() {
      async.forEachOfSeries(object, callbackAsync);
    });
    suite.add('foreach@2.0.5', function() {
      foreach(object, callbackSync);
    });

    tb.wrapSuite(suite, () => next());
    suite.run({ async: true });
  }
);
