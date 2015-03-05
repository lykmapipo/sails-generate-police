//For more info
//See https://github.com/balderdashy/sails-hook-email
module.exports.email = {
    /**
     * @description A "well-known service" that Nodemailer knows how
     *              to communicate with (see this list of services)
     * @type {String}
     */
    // service: 'Gmail',

    /**
     * @description Authentication object as {user:"...", pass:"..."}
     * @type {Object}
     */
    // auth: {
    //     user: 'gmail.user@gmail.com',
    //     pass: 'userpass'
    // },

    /**
     * @description Path to view templates (defaults to ../../views/emailTemplates)
     * @type {String}
     */
    // templateDir: '',

    /**
     * @descriptio Default from email address
     * @type {String}
     */
    // from: 'lallyelias87@gmail.com',

    /**
     * @description A flag indicating whether the hook is in "test mode".
     *              In test mode, email options and contents are written
     *              to a .tmp/email.txt file instead of being actually sent.
     *              Defaults to true.
     * @type {Boolean}
     */
    testMode: true,

    /**
     * @description If set, all emails will be sent to this address
     *              regardless of the to option specified. Good for
     *              testing live emails without worrying about
     *              accidentally spamming people.
     * @type {String}
     */
    // alwaysSendTo: ''
}