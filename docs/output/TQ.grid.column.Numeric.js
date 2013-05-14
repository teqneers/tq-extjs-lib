Ext.data.JsonP.TQ_grid_column_Numeric({"mixedInto":[],"superclasses":["Ext.grid.column.Number"],"linenr":1,"inheritable":null,"code_type":"ext_define","singleton":false,"override":null,"parentMixins":[],"mixins":["TQ.grid.column.Editable"],"inheritdoc":null,"alternateClassNames":[],"subclasses":[],"files":[{"href":"Numeric.html#TQ-grid-column-Numeric","filename":"Numeric.js"}],"enum":null,"html_meta":{"author":null},"members":{"event":[],"css_var":[],"property":[{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"align","id":"property-align"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"allowBlank","id":"property-allowBlank"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"editorConfig","id":"property-editorConfig"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"factor","id":"property-factor"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"invertValue","id":"property-invertValue"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"maxPrecision","id":"property-maxPrecision"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"minValue","id":"property-minValue"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"numberRenderer","id":"property-numberRenderer"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"renderPrefix","id":"property-renderPrefix"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"renderPrefixCallback","id":"property-renderPrefixCallback"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"renderSuffix","id":"property-renderSuffix"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"renderSuffixCallback","id":"property-renderSuffixCallback"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"smartFormatting","id":"property-smartFormatting"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"stringWhenNull","id":"property-stringWhenNull"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"stripTrailingZeros","id":"property-stripTrailingZeros"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"property","name":"withThousands","id":"property-withThousands"}],"css_mixin":[],"cfg":[{"owner":"TQ.grid.column.Editable","meta":{},"tagname":"cfg","name":"editable","id":"cfg-editable"}],"method":[{"owner":"TQ.grid.column.Numeric","meta":{},"tagname":"method","name":"constructor","id":"method-constructor"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"method","name":"applyCellFormatting","id":"method-applyCellFormatting"},{"owner":"TQ.grid.column.Numeric","meta":{},"tagname":"method","name":"createEditor","id":"method-createEditor"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"method","name":"getNumericValue","id":"method-getNumericValue"},{"owner":"TQ.grid.column.Numeric","meta":{"private":true},"tagname":"method","name":"initComponent","id":"method-initComponent"},{"owner":"TQ.grid.column.Editable","meta":{},"tagname":"method","name":"initEditableColumn","id":"method-initEditableColumn"}]},"extends":"Ext.grid.column.Number","uses":[],"statics":{"event":[],"css_var":[],"property":[],"css_mixin":[],"cfg":[],"method":[]},"tagname":"class","meta":{"author":["Timo Buhmann <buhmann@teqneers.de>"]},"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.column.Number<div class='subclass '><strong>TQ.grid.column.Numeric</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/TQ.grid.column.Editable' rel='TQ.grid.column.Editable' class='docClass'>TQ.grid.column.Editable</a></div><h4>Files</h4><div class='dependency'><a href='source/Numeric.html#TQ-grid-column-Numeric' target='_blank'>Numeric.js</a></div></pre><div class='doc-contents'><p>This file contains Javascript code to provide\nTEQneers specific ExtJs enhancements</p>\n\n<p>@copyright  2011/12 TEQneers GmbH &amp; Co. KG\n@package        TEQframework\n@subpackage javascript\n@version        $Revision: 26090 $\n@internal   $Id: Numeric.js 26090 2012-07-13 08:43:56Z stephan $</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-editable' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/TQ.grid.column.Editable' rel='TQ.grid.column.Editable' class='defined-in docClass'>TQ.grid.column.Editable</a><br/><a href='source/Editable.html#TQ-grid-column-Editable-cfg-editable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Editable-cfg-editable' class='name expandable'>editable</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>False to prevent creating the editor ...</div><div class='long'><p>False to prevent creating the editor</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-align' class='name expandable'>align</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'right'</code></p></div></div></div><div id='property-allowBlank' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-allowBlank' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-allowBlank' class='name expandable'>allowBlank</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>editor attributes ...</div><div class='long'><p>editor attributes</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-editorConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-editorConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-editorConfig' class='name not-expandable'>editorConfig</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-factor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-factor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-factor' class='name expandable'>factor</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-invertValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-invertValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-invertValue' class='name expandable'>invertValue</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-maxPrecision' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-maxPrecision' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-maxPrecision' class='name expandable'>maxPrecision</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>regular formatting ...</div><div class='long'><p>regular formatting</p>\n<p>Defaults to: <code>12</code></p></div></div></div><div id='property-minValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-minValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-minValue' class='name not-expandable'>minValue</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-numberRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-numberRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-numberRenderer' class='name not-expandable'>numberRenderer</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-renderPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-renderPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-renderPrefix' class='name not-expandable'>renderPrefix</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-renderPrefixCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-renderPrefixCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-renderPrefixCallback' class='name not-expandable'>renderPrefixCallback</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-renderSuffix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-renderSuffix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-renderSuffix' class='name not-expandable'>renderSuffix</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-renderSuffixCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-renderSuffixCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-renderSuffixCallback' class='name not-expandable'>renderSuffixCallback</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-smartFormatting' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-smartFormatting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-smartFormatting' class='name expandable'>smartFormatting</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>smart formatting ...</div><div class='long'><p>smart formatting</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-stringWhenNull' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-stringWhenNull' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-stringWhenNull' class='name expandable'>stringWhenNull</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-stripTrailingZeros' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-stripTrailingZeros' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-stripTrailingZeros' class='name expandable'>stripTrailingZeros</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-withThousands' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-property-withThousands' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-property-withThousands' class='name expandable'>withThousands</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/TQ.grid.column.Numeric-method-constructor' class='name expandable'>TQ.grid.column.Numeric</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/TQ.grid.column.Numeric\" rel=\"TQ.grid.column.Numeric\" class=\"docClass\">TQ.grid.column.Numeric</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/TQ.grid.column.Numeric\" rel=\"TQ.grid.column.Numeric\" class=\"docClass\">TQ.grid.column.Numeric</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyCellFormatting' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-method-applyCellFormatting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-method-applyCellFormatting' class='name expandable'>applyCellFormatting</a>( <span class='pre'>v, m, r</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>m</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createEditor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-method-createEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-method-createEditor' class='name expandable'>createEditor</a>( <span class='pre'></span> ) : Object/String/Null</div><div class='description'><div class='short'>Returns the xtype or config object for a Field or a fully instantiated\nExt.grid.CellEditor to use for editing. ...</div><div class='long'><p>Returns the xtype or config object for a Field or a fully instantiated\nExt.grid.CellEditor to use for editing.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/String/Null</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/TQ.grid.column.Editable-method-createEditor' rel='TQ.grid.column.Editable-method-createEditor' class='docClass'>TQ.grid.column.Editable.createEditor</a></p></div></div></div><div id='method-getNumericValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-method-getNumericValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-method-getNumericValue' class='name expandable'>getNumericValue</a>( <span class='pre'>v, r</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.grid.column.Numeric'>TQ.grid.column.Numeric</span><br/><a href='source/Numeric.html#TQ-grid-column-Numeric-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Numeric-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initEditableColumn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/TQ.grid.column.Editable' rel='TQ.grid.column.Editable' class='defined-in docClass'>TQ.grid.column.Editable</a><br/><a href='source/Editable.html#TQ-grid-column-Editable-method-initEditableColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.grid.column.Editable-method-initEditableColumn' class='name expandable'>initEditableColumn</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Performs initialization of this mixin. ...</div><div class='long'><p>Performs initialization of this mixin. Component classes using this mixin should call this method during their\nown initialization.</p>\n</div></div></div></div></div></div></div>","name":"TQ.grid.column.Numeric","aliases":{"widget":["tq-grid-column-numeric"]},"requires":[],"component":false,"id":"class-TQ.grid.column.Numeric"});