describe('TQ.util.SmartFormat', function() {

    function initFormat(thousandSeparator, decimalSeparator) {
        TQ.util.Format.thousandSeparator = Ext.util.Format.thousandSeparator = thousandSeparator;
        TQ.util.Format.decimalSeparator  = Ext.util.Format.decimalSeparator  = decimalSeparator;
    }

    it('formats 0 with 0 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(0);
        expect(number).toBe('0');
    });

    it('formats a number < 1e-6 with scientific notation', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(0.0000009);
        expect(number).toBe('9.00e-7');
    });

    it('formats a number = 1e-6 with scientific notation', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(1e-6);
        expect(number).toBe('1.00e-6');
    });

    it('formats a number > 10e-6 with 6 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(0.123);
        expect(number).toBe('0.123000');
    });

    it('formats a number > 1 with 2 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(1);
        expect(number).toBe('1.00');
    });

    it('formats a number >= 1 with 2 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(9.123);
        expect(number).toBe('9.12');
    });

    it('formats a number = 10 with 1 decimal', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(10);
        expect(number).toBe('10.0');
    });

    it('formats a number >= 10 with 1 decimal', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(89.123);
        expect(number).toBe('89.1');
    });

    it('formats a number = 100 with 0 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(100);
        expect(number).toBe('100');
    });

    it('formats a number >= 100 with 0 decimals', function() {
        initFormat(',', '.');
        var number =    TQ.util.SmartFormat.number(150.123);
        expect(number).toBe('150');
    });

});