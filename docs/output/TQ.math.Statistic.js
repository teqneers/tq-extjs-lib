Ext.data.JsonP.TQ_math_Statistic({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>TQ.math.Statistic</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Statistic.html#TQ-math-Statistic' target='_blank'>Statistic.js</a></div></pre><div class='doc-contents'><p>A collection of useful static methods to deal with statistics problems.</p>\n\n<p>Example:</p>\n\n<pre class='inline-example '><code>var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],\n     stats   = [\n         <a href=\"#!/api/TQ.math.Statistic-method-average\" rel=\"TQ.math.Statistic-method-average\" class=\"docClass\">TQ.math.Statistic.average</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-sum\" rel=\"TQ.math.Statistic-method-sum\" class=\"docClass\">TQ.math.Statistic.sum</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-variance\" rel=\"TQ.math.Statistic-method-variance\" class=\"docClass\">TQ.math.Statistic.variance</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-standardDeviation\" rel=\"TQ.math.Statistic-method-standardDeviation\" class=\"docClass\">TQ.math.Statistic.standardDeviation</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-coefficientOfVariation\" rel=\"TQ.math.Statistic-method-coefficientOfVariation\" class=\"docClass\">TQ.math.Statistic.coefficientOfVariation</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-min\" rel=\"TQ.math.Statistic-method-min\" class=\"docClass\">TQ.math.Statistic.min</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-max\" rel=\"TQ.math.Statistic-method-max\" class=\"docClass\">TQ.math.Statistic.max</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-median\" rel=\"TQ.math.Statistic-method-median\" class=\"docClass\">TQ.math.Statistic.median</a>(data),\n         <a href=\"#!/api/TQ.math.Statistic-method-quantile\" rel=\"TQ.math.Statistic-method-quantile\" class=\"docClass\">TQ.math.Statistic.quantile</a>(75, data)\n     ];\n\n Ext.Array.each(stats, function(v) { Ext.DomHelper.append(document.body, '&lt;p&gt;'+v+'&lt;/p&gt;'); });\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='method-average' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-average' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-average' class='name expandable'>average</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the arithmetic mean of the passed data array. ...</div><div class='long'><p>Calculates the <a href=\"http://en.wikipedia.org/wiki/Arithmetic_mean\">arithmetic mean</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The arithmetic mean.</p>\n</div></li></ul></div></div></div><div id='method-coefficientOfVariation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-coefficientOfVariation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-coefficientOfVariation' class='name expandable'>coefficientOfVariation</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the coefficient of variation of the passed data array. ...</div><div class='long'><p>Calculates the <a href=\"http://en.wikipedia.org/wiki/Coefficient_of_variation\">coefficient of variation</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The coefficient of variation.</p>\n</div></li></ul></div></div></div><div id='method-max' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-max' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-max' class='name expandable'>max</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the maximum value of the passed data array. ...</div><div class='long'><p>Calculates the <a href=\"http://en.wikipedia.org/wiki/Sample_maximum_and_minimum\">maximum value</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The maximum value.</p>\n</div></li></ul></div></div></div><div id='method-median' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-median' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-median' class='name expandable'>median</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the median value of the passed data array. ...</div><div class='long'><p>Calculates the <a href=\"http://en.wikipedia.org/wiki/Median\">median value</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The median value.</p>\n</div></li></ul></div></div></div><div id='method-min' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-min' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-min' class='name expandable'>min</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the minimum value of the passed data array. ...</div><div class='long'><p>Calculates the <a href=\"http://en.wikipedia.org/wiki/Sample_maximum_and_minimum\">minimum value</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The minimum value.</p>\n</div></li></ul></div></div></div><div id='method-quantile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-quantile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-quantile' class='name expandable'>quantile</a>( <span class='pre'>q, data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the q quantile value of the passed data array. ...</div><div class='long'><p>Calculates the <em>q</em> <a href=\"http://en.wikipedia.org/wiki/Quantile\">quantile value</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>q</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The quantile rank.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The <em>q</em> quantile.</p>\n</div></li></ul></div></div></div><div id='method-standardDeviation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-standardDeviation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-standardDeviation' class='name expandable'>standardDeviation</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the population standard deviation of the passed data array. ...</div><div class='long'><p>Calculates the population <a href=\"http://en.wikipedia.org/wiki/Standard_deviation\">standard deviation</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The standard deviation.</p>\n</div></li></ul></div></div></div><div id='method-sum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-sum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-sum' class='name expandable'>sum</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the sum of the passed data array. ...</div><div class='long'><p>Calculates the <a href=\"http://en.wikipedia.org/wiki/Sum\">sum</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The sum.</p>\n</div></li></ul></div></div></div><div id='method-variance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TQ.math.Statistic'>TQ.math.Statistic</span><br/><a href='source/Statistic.html#TQ-math-Statistic-method-variance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TQ.math.Statistic-method-variance' class='name expandable'>variance</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Calculates the population variance of the passed data array. ...</div><div class='long'><p>Calculates the population <a href=\"http://en.wikipedia.org/wiki/Variance\">variance</a> of the passed data array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'><p>The data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The variance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","aliases":{},"requires":[],"mixedInto":[],"enum":null,"parentMixins":[],"superclasses":["Ext.Base"],"tagname":"class","inheritable":null,"code_type":"ext_define","singleton":false,"override":null,"files":[{"href":"Statistic.html#TQ-math-Statistic","filename":"Statistic.js"}],"mixins":[],"inheritdoc":null,"members":{"event":[],"css_var":[],"method":[],"css_mixin":[],"cfg":[],"property":[]},"html_meta":{},"linenr":1,"alternateClassNames":[],"private":null,"subclasses":[],"name":"TQ.math.Statistic","id":"class-TQ.math.Statistic","extends":"Ext.Base","uses":[],"component":false,"statics":{"event":[],"css_var":[],"method":[{"owner":"TQ.math.Statistic","tagname":"method","name":"average","id":"method-average","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"coefficientOfVariation","id":"method-coefficientOfVariation","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"max","id":"method-max","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"median","id":"method-median","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"min","id":"method-min","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"quantile","id":"method-quantile","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"standardDeviation","id":"method-standardDeviation","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"sum","id":"method-sum","meta":{"static":true}},{"owner":"TQ.math.Statistic","tagname":"method","name":"variance","id":"method-variance","meta":{"static":true}}],"css_mixin":[],"cfg":[],"property":[]},"meta":{}});