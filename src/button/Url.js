/**
 * Url-Button
 *
 * This simple button extension takes an {@link #url} parameter
 * and redirects the user to this url on clicking the button.
 *
 * Example:
 *      @example
 *      Ext.create('TQ.button.Url', {
 *          text: 'Take me to Google, please!',
 *          url: 'http://www.google.com',
 *          renderTo: document.body
 *      });
 *
 */
Ext.define('TQ.button.Url', {
	extend: 'Ext.button.Button',
	alias: 'widget.tq-urlbutton',

    /**
     * @cfg {String} url
     * The URL to which the user will be redirected.
     */
	url: null,

    /**
     * Handles the button click.
     * @param   {TQ.button.Url}     b   This button.
     * @param   {Ext.EventObject}   e   The click event.
     * @protected
     */
	handler: function(b, e) {
		if(b.url) {
			window.location.href = b.url;
		}
	}
});