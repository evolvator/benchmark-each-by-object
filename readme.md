# benchmark-each-by-object

What's the fastest way to each by object?

[![Build Status](https://travis-ci.org/evolvator/benchmark-each-by-object.svg?branch=master)](https://travis-ci.org/evolvator/benchmark-each-by-object)

[Executable code](https://github.com/evolvator/benchmark-each-by-object/tree/code)

[Build json results](https://github.com/evolvator/benchmark-each-by-object/tree/results)

[Analytics of one build result](https://evolvator.github.io/table-viewer/#/{%22path%22%3A%22https%3A%2F%2Fraw.githubusercontent.com%2Fevolvator%2Fbenchmark-each-by-object%2Fresults%2Flast.json%22%2C%22columns%22%3A[{%22id%22%3A%22os%22}%2C{%22id%22%3A%22build%22%2C%22disabled%22%3Atrue}%2C{%22id%22%3A%22job%22%2C%22disabled%22%3Atrue}%2C{%22id%22%3A%22platform%22}%2C{%22id%22%3A%22version%22}%2C{%22id%22%3A%22layout%22%2C%22disabled%22%3Atrue}%2C{%22id%22%3A%22suite%22}%2C{%22id%22%3A%22benchmark%22}%2C{%22id%22%3A%22speed%22}%2C{%22id%22%3A%22distortion%22%2C%22disabled%22%3Atrue}%2C{%22id%22%3A%22sampled%22}%2C{%22id%22%3A%22percent%22}]%2C%22filtered%22%3A[{%22id%22%3A%22suite%22%2C%22list%22%3A[%22get%20depth%201%20by%20[object]%22%2C%22get%20depth%2010%20by%20[object]%22%2C%22get%20depth%205%20by%20[object]%22]%2C%22type%22%3A0%2C%22regexp%22%3A%22%22}%2C{%22id%22%3A%22version%22%2C%22list%22%3A[]%2C%22type%22%3A0%2C%22regexp%22%3A%22^10\\.%22}]%2C%22sorted%22%3A[{%22id%22%3A%22os%22%2C%22desc%22%3Afalse}%2C{%22id%22%3A%22platform%22%2C%22desc%22%3Afalse}%2C{%22id%22%3A%22version%22%2C%22desc%22%3Atrue}%2C{%22id%22%3A%22suite%22%2C%22desc%22%3Atrue}%2C{%22id%22%3A%22percent%22%2C%22desc%22%3Atrue}]%2C%22page%22%3A0%2C%22pageSize%22%3A100})

- Each benchmark has reference to the value.
- Multiple suites for different object size.
