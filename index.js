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

    suite.add('Object.keys for', function() {
      var array = Object.keys(object);
      for (var i = 0; i < count; i++) {
        array[i];
      };
    });
    suite.add('Object.keys while', function() {
      var array = Object.keys(object);
      var i = 0;
      while (i < count) {
        i++;
        array[i];
      }
    });
    suite.add('for-in', function() {
      for (var i in object) {
        object[i];
      }
    });
    suite.add('Object.keys forEach', function() {
      Object.keys(object).forEach(function(value, index) {
        value;
      });
    });
    suite.add('lodash@4.17.10 forEach', function() {
      _.forEach(object, function(value, index) {
        value;
      });
    });
    suite.add('async@2.6.1 forEachOf', function() {
      async.forEachOf(object, function(value, index, next) {
        value;
        next();
      });
    });
    suite.add('async@2.6.1 forEachOfSeries', function() {
      async.forEachOfSeries(object, function(value, index, next) {
        value;
        next();
      });
    });
    suite.add('foreach@2.0.5', function() {
      foreach(object, function(value, index) {
        value;
      });
    });

    tb.wrapSuite(suite);
    suite.run({ async: true });
  }
);
