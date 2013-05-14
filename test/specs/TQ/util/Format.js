describe('TQ.util.Format', function() {

    function initFormat(thousandSeparator, decimalSeparator) {
        TQ.util.Format.thousandSeparator = Ext.util.Format.thousandSeparator = thousandSeparator;
        TQ.util.Format.decimalSeparator  = Ext.util.Format.decimalSeparator  = decimalSeparator;
    }

    it('creates a number format string without thousand separator for US format with 2 decimals', function() {
        initFormat(',', '.');
        var format =    TQ.util.Format.numberFormatString(2, false);
        expect(format).toBe('0.00');
    });

    it('creates a number format string without thousand separator for German format with 2 decimals', function() {
        initFormat('.', ',');
        var format =    TQ.util.Format.numberFormatString(2, false);
        expect(format).toBe('0,00/i');
    });


    it('creates a number format string without thousand separator for US format with no decimals', function() {
        initFormat(',', '.');
        var format =    TQ.util.Format.numberFormatString(0, false);
        expect(format).toBe('0');
    });

    it('creates a number format string without thousand separator for German format with no decimals', function() {
        initFormat('.', ',');
        var format =    TQ.util.Format.numberFormatString(0, false);
        expect(format).toBe('0/i');
    });

    it('creates a number format string with thousand separator for US format with 2 decimals', function() {
        initFormat(',', '.');
        var format =    TQ.util.Format.numberFormatString(2, true);
        expect(format).toBe('0,000.00');
    });

    it('creates a number format string with thousand separator for German format with 2 decimals', function() {
        initFormat('.', ',');
        var format =    TQ.util.Format.numberFormatString(2, true);
        expect(format).toBe('0.000,00/i');
    });

    it('creates a number format string with thousand separator for US format with no decimals', function() {
        initFormat(',', '.');
        var format =    TQ.util.Format.numberFormatString(0, true);
        expect(format).toBe('0,000');
    });

    it('creates a number format string with thousand separator for German format with no decimals', function() {
        initFormat('.', ',');
        var format =    TQ.util.Format.numberFormatString(0, true);
        expect(format).toBe('0.000/i');
    });



    it('formats a number without thousand separator for US format with 2 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.Format.number(5615462.6, 2, false, false);
        expect(number).toBe('5615462.60');
    });

    it('formats a number without thousand separator for German format with 2 decimals', function() {
        initFormat('.', ',');
        var number =    TQ.util.Format.number(5615462.6, 2, false, false);
        expect(number).toBe('5615462,60');
    });

    it('formats a number with thousand separator for US format with 2 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.Format.number(5615462.6, 2, true, false);
        expect(number).toBe('5,615,462.60');
    });

    it('formats a number with thousand separator for German format with 2 decimals', function() {
        initFormat('.', ',');
        var number =    TQ.util.Format.number(5615462.6, 2, true, false);
        expect(number).toBe('5.615.462,60');
    });

    it('formats a number without thousand separator for US format with 2 decimals stripping trailing zeroes', function() {
        initFormat(',', '.');
        var number =    TQ.util.Format.number(5615462.6, 2, false, true);
        expect(number).toBe('5615462.6');
    });

    it('formats a number without thousand separator for German format with 2 decimals stripping trailing zeroes', function() {
        initFormat('.', ',');
        var number =    TQ.util.Format.number(5615462.6, 2, false, true);
        expect(number).toBe('5615462,6');
    });

    it('formats a number with thousand separator for US format with 2 decimals stripping trailing zeroes', function() {
        initFormat(',', '.');
        var number =    TQ.util.Format.number(5615462.6, 2, true, true);
        expect(number).toBe('5,615,462.6');
    });

    it('formats a number with thousand separator for German format with 2 decimals stripping trailing zeroes', function() {
        initFormat('.', ',');
        var number =    TQ.util.Format.number(5615462.6, 2, true, true);
        expect(number).toBe('5.615.462,6');
    });
});