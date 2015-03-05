/**
 * Module dependencies
 */
var path = require('path');
var generatorPath = path.resolve(__dirname);
var fsExtra = require('fs-extra');

module.exports = {
    //install dependencies after
    //generate all required
    //files
    after: function(scope, callback) {
        console.log('\n')
        callback.log.info('You should run: npm install --save sails-police sails-hook-email');
        callback();
    },
    /**
     * The files/folders to generate.
     * @type {Object}
     */

    targets: {
        //copy layout.ejs
        './views/layout.ejs': {
            copy: 'views/layout.ejs'
        },

        //copy auth views
        'authViews': {
            exec: function(scope, cb) {

                var src = path.join(generatorPath, 'templates', 'views', 'auth');

                fsExtra.copy(src, path.join('views', 'auth'), cb);
            }
        },


        //copy emailTemplates
        'emailTemplates': {
            exec: function(scope, cb) {

                var src = path.join(generatorPath, 'templates', 'views', 'emailTemplates');

                fsExtra.copy(src, path.join('views', 'emailTemplates'), cb);
            }
        },


        //copy home.js
        './views/home/index.ejs': {
            copy: 'views/home/index.ejs'
        },

        //copy User model
        './api/models/User.js': {
            copy: 'models/User.js'
        },

        //copy controllers
        'controllers': {
            exec: function(scope, cb) {

                var src = path.join(generatorPath, 'templates', 'controllers');

                fsExtra.copy(src, path.join('api', 'controllers'), cb);
            }
        },

        //copy policies
        './api/policies/Auth.js': {
            copy: 'policies/Auth.js'
        },

        //copy configs
        'config': {
            exec: function(scope, cb) {

                var src = path.join(generatorPath, 'templates', 'config');

                fsExtra.copy(src, scope.rootPath, cb);
            }
        },

        //copy public assets
        'js': {
            exec: function(scope, cb) {

                var src = path.join(generatorPath, 'templates', 'public', 'js');

                fsExtra.copy(src, path.join('assets', 'js'), cb);
            }
        },
        'css': {
            exec: function(scope, cb) {

                var src = path.join(generatorPath, 'templates', 'public', 'css');

                fsExtra.copy(src, path.join('assets', 'styles'), cb);
            }
        },
        'fonts': {
            exec: function(scope, cb) {

                var src = path.join(generatorPath, 'templates', 'public', 'fonts');

                fsExtra.copy(src, path.join('assets', 'fonts'), cb);
            }
        }

    },


    /**
     * The absolute path to the `templates` for this generator
     * (for use with the `template` helper)
     *
     * @type {String}
     */
    templatesDirectory: require('path').resolve(__dirname, './templates')
};