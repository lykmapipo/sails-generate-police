function messages(request) {
    var error = request.flash('error');
    var success = request.flash('success');
    var warning = request.flash('warning');

    return {
        error: _.isEmpty(error) ? null : error,
        warning: _.isEmpty(warning) ? null : warning,
        success: _.isEmpty(success) ? null : success
    }
}

/**
 * @description  Home controller
 * @type {Object}
 */
module.exports = {
    index: function(request, response) {
        var data = _.extend({
            title: 'Home'
        }, messages(request));

        response
            .view('home/index', data);
    }
}