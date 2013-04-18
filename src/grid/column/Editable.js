/**
 * Grid column editable mixin
 *
 * This mixin makes creating editable grid columns a bit easier. Just add the mixin to your column type and provide
 * a {@link createEditor()} method that return the editor for the column.
 *
 * Only applicable if the grid is using an {@link Ext.grid.plugin.Editing Editing} plugin.
 *
 * Example usage:
 *
 *        Ext.define('My.grid.column.Special', {
 *	        extend: 'Ext.grid.column.Number',
 *          mixins: {
 *              editable: 'TQ.grid.column.Editable'
 *          },
 *
 *          editable: true,
 *
 *          createEditor: function() {
 *		        return {
 *			        xtype: 'numberfield',
 *			        decimalSeparator: ',',
 *			        decimalPrecision: 2,
 *			        minValue: -10,
 *			        maxValue: 10
 *		        };
 *	        }
 *	    });
 */
Ext.define('TQ.grid.column.Editable', {

    /**
     * @cfg {Boolean} editable
     * False to prevent creating the editor
     */
    editable: true,

    /**
     * Performs initialization of this mixin. Component classes using this mixin should call this method during their
     * own initialization.
     */
	initEditableColumn: function() {
		if (   this.isXType('gridcolumn')
            && this.editable
        ) {
            var editor  = this.createEditor();
            if (editor) {
                this.editor	= editor;
            }
		}
	},

    /**
     * Returns the xtype or config object for a {@link Ext.form.field.Field Field} or a fully instantiated
     * {@link Ext.grid.CellEditor} to use for editing.
     *
     * @returns {Object/String/Null}
     */
    createEditor: function() {
        return null;
    }
});
