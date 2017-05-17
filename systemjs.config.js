/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': './node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': './client',
            'forms': './client/app/admin/pages',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js ',
            'moment': 'npm:moment/moment.js',
            'jQuery': 'npm:jquery/dist/jquery.js',
            'ng2-bootstrap/ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
            'ngx-uploader': 'npm:ngx-uploader/bundle/ngx-uploader.umd.js',
            //forms
            'ng2-ckeditor': 'npm:ng2-ckeditor',
            //smart-table
            'ng2-smart-table': 'npm:ng2-smart-table/bundles/table.umd.js',
            'ng2-completer': 'npm:ng2-completer/ng2-completer.umd.js',
            'lodash': 'npm:lodash/lodash.js',
            //chartist
            'chartist': 'npm:chartist/dist/chartist.js',
            'ng-chartist': 'npm:ng-chartist/dist/ng-chartist.js',
            'd3': 'npm:d3/build/d3.min.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app': {
                main: './main.js',
                defaultExtension: 'js'
            },
            'forms': {
                defaultExtension: 'js'
            },
            'rxjs': {
                main: 'index',
                defaultExtension: 'js'
            },
            'services': {
                defaultExtension: 'js'
            },
            "ng2-ckeditor": {
                "main": "lib/index.js",
                "defaultExtension": "js",
            }
        }
    });
})(this);