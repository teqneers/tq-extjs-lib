/**
 * A collection of useful static methods to deal with strings.
 *
 * Example:
 *      @example
 *      Ext.DomHelper.append(document.body, '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>');
 *      TQ.String.highlight(document.body, 'ipsum', 'error');
 */
Ext.define('TQ.String', {
    statics: {
        /**
         * Marks all occurrences of *search* on the dom node *node* with the CSS class *cls*.
         * @param   {HTMLElement}   node                            The dom node.
         * @param   {String}        search                          The string to mark
         * @param   {String}        [cls="tq-search-highlight"]     The CSS class to add to the marker span
         * @returns {Number}
         */
		highlight: function(node, search, cls) {
			search  = search.toUpperCase();

			var skip	= 0;
			if (node.nodeType == 3) {
				var pos = node.data.toUpperCase().indexOf(search);
				if (pos >= 0) {
					var spannode	= document.createElement('span'),
					    middlebit	= node.splitText(pos),
					    middleclone	= middlebit.cloneNode(true);

					spannode.className	= cls || 'tq-search-highlight';
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += this.highlight(node.childNodes[i], search, cls);
				}
			}
			return skip;
		}
	}
});