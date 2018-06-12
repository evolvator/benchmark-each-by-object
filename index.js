var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var beauty = require('beautify-benchmark');
var _ = require('lodash');
var async = require('async');

async.timesSeries(
  15,
  function(t, next) {
    var count = Math.pow(2, t);
    var suite = new Benchmark.Suite(`${count} size`);

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
    suite.add('for-of', function() {
      for (var f of object) {
        f;
      }
    });
    suite.add('Object.keys forEach', function() {
      Object.keys(object).forEach(function(value, index) {
        value;
      });
    });
    suite.add('lodash.forEach', function() {
      _.forEach(object, function(value, index) {
        value;
      });
    });
    suite.add('async.forEach', function() {
      async.forEach(object, function(value, index) {
        value;
      });
    });
    suite.add('async.forEachSeries', function() {
      async.forEachSeries(object, function(value, index) {
        value;
      });
    });

    suite.on('cycle', function (event) { beauty.add(event.target); });
    suite.on('complete', function(event) {
      beauty.log();
      tb.saveSuite(
        tb.parseSuite(event),
        function(error) {
          next();
        }
      );
    });

    suite.run({ async: true });
  }
);
