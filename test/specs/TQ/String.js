describe('TQ.String', function() {

    it('highlights the occurences of a string in a dom node', function() {
        setFixtures('<div id="text">' +
            '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>' +
            '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>' +
        '</div>');

        TQ.String.highlight($('#text').get(0), 'ipsum');

        expect($('#text')).toContain('span.tq-search-highlight');
        expect($('#text p span.tq-search-highlight').length).toBe(2);

        $('#text p span.tq-search-highlight').each(function() {
            expect($(this).text()).toBe('ipsum');
        });
    });

    it('allows changing the CSS class to mark the occurences of a string in a dom node', function() {
        setFixtures('<div id="text">' +
            '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>' +
            '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>' +
        '</div>');

        TQ.String.highlight($('#text').get(0), 'ipsum', 'my-class');

        expect($('#text')).toContain('span.my-class');
        expect($('#text span.my-class').length).toBe(2);

        $('#text span.my-class').each(function() {
            expect($(this).text()).toBe('ipsum');
        });
    });

});