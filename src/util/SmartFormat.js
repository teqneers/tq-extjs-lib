/**
 * @class TQ.util.SmartFormat
 *
 * This class contains methods for smart formatting numeric values.
 *
 * ## Default settings
 *
 * Default settings can be set on the singleton.
 *
 * Settings include:
 *
 * - showThousandSeparator
 * - stripTrailingZeroes
 *
 * ## Using with renderers
 *
 * There is a helper function that returns a new function that can be used in conjunction with
 * grid renderers:
 *
 *     columns: [{
 *         dataIndex: 'value',
 *         renderer: TQ.util.SmartFormat.numberRenderer()
 *     }]
 *
 * @singleton
 */
(function() {
    Ext.ns('TQ.util');

    TQ.util.SmartFormat = {};
    var SmartFormat     = TQ.util.SmartFormat,
        UtilFormat      = TQ.util.Format,
        defaultStrategy = [{
            p: function(v, absV) {
                return absV >= 100;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 0, showThousandSeparator, false);
            }
        }, {
            p: function(v, absV) {
                return absV >= 10;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 1, showThousandSeparator, stripTrailingZeroes);
            }
        }, {
            p: function(v, absV) {
                return absV >= 1;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 2, showThousandSeparator, stripTrailingZeroes);
            }
        }, {
            p: function(v, absV) {
                return absV == 0;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 0, showThousandSeparator, false);
            }
        }, {
            p: function(v, absV) {
                return absV > Math.pow(10, -1 * 6);
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 6, showThousandSeparator, false);
            }
        }, {
            p: function(v, absV) {
                return true;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                var exponent	= 0,
                    absV	    = Math.abs(value);
                if (absV > 0) {
                    exponent	= Math.floor(Math.log(absV) / Math.LN10);
                }

                if (exponent === 0) {
                    return UtilFormat.number(value, 6, showThousandSeparator, stripTrailingZeroes);
                }

                var mantissa	= SmartFormat.number(value / Math.pow(10, exponent));
                return mantissa + 'e' + exponent;
            }
        }];

    Ext.apply(SmartFormat, {

        /**
         * @property {Boolean} showThousandSeparator
         * The default setting whether the thousand separator should be displayed.
         */
        showThousandSeparator: true,

         /**
         * @property {Boolean} stripTrailingZeroes
         * The default setting whether trailing zeroes are to be stripped.
         */
        stripTrailingZeroes: true,

        /**
         * Smartly formats the passed number according to the passed parameters.
         *
         * @param   {Number}    v           The number to format.
         * @param   {Array}     strategy    The precision to display floating point numbers - defaults to {@link #precision}.
         * @return  {String}                The formatted number.
         */
        number: function(v, strategy) {
            if (!Ext.isEmpty(v) && Ext.isNumber(v)) {
                strategy    = strategy || defaultStrategy;
                var absV	= Math.abs(v),
                    len     = strategy.length,
                    i;
                for (i = 0; i < len; i++) {
                    if (strategy[i].p(v, absV)) {
                        return strategy[i].f(v, SmartFormat.showThousandSeparator, SmartFormat.stripTrailingZeroes);
                    }
                }
            }
            return '';
        },

        /**
         * Returns a number rendering function that can be reused to apply the smart number format multiple
         * times efficiently.
         *
         * @param   {Array}    strategy     The precision to display floating point numbers - defaults to {@link #precision}.
         * @return  {Function}               The number formatting function
         */
        numberRenderer: function(strategy) {
            return function(v) {
                return SmartFormat.number(v, strategy);
            };
        }

    });
}());