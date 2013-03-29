describe('Basic Assumptions', function() {

    it('has loaded Ext JS 4.0.7', function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().getMajor()).toEqual(4);
        expect(Ext.getVersion().getMinor()).toEqual(0);
        expect(Ext.getVersion().getPatch()).toEqual(7);
    });

    it('has loaded TQ code',function(){
        expect(TQ).toBeDefined();
    });
});