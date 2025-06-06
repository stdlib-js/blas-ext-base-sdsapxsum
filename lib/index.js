/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Add a scalar constant to each single-precision floating-point strided array element and compute the sum using extended accumulation.
*
* @module @stdlib/blas-ext-base-sdsapxsum
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var sdsapxsum = require( '@stdlib/blas-ext-base-sdsapxsum' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = sdsapxsum( x.length, 5.0, x, 1 );
* // returns 16.0
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var sdsapxsum = require( '@stdlib/blas-ext-base-sdsapxsum' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = sdsapxsum.ndarray( 4, 5.0, x, 2, 1 );
* // returns 25.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require' );
var isError = require( '@stdlib/assert-is-error' );
var main = require( './main.js' );


// MAIN //

var sdsapxsum;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sdsapxsum = main;
} else {
	sdsapxsum = tmp;
}


// EXPORTS //

module.exports = sdsapxsum;

// exports: { "ndarray": "sdsapxsum.ndarray" }
