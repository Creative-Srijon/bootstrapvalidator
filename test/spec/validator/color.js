describe('color', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="colorForm">',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="color" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="colorMultiple" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="colorHex" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="colorRgb" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="colorRgba" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="colorHsl" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="colorHsla" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" class="form-control" name="colorKeyword" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#colorForm').bootstrapValidator({
            fields: {
                color: {
                    validators: {
                        color: { }
                    }
                },
                colorMultiple: {
                    validators: {
                        color: {
                            type: [
                                'hex',
                                'rgb'
                            ]
                        }
                    }
                },
                colorHex: {
                    validators: {
                        color: {
                            type: ['hex']
                        }
                    }
                },
                colorRgb: {
                    validators: {
                        color: {
                            type: ['rgb']
                        }
                    }
                },
                colorRgba: {
                    validators: {
                        color: {
                            type: ['rgba']
                        }
                    }
                },
                colorHsl: {
                    validators: {
                        color: {
                            type: ['hsl']
                        }
                    }
                },
                colorHsla: {
                    validators: {
                        color: {
                            type: ['hsla']
                        }
                    }
                },
                colorKeyword: {
                    validators: {
                        color: {
                            type: ['keyword']
                        }
                    }
                }
            }
        });

        this.bv             = $('#colorForm').data('bootstrapValidator');
        this.$color         = this.bv.getFieldElements('color');
        this.$colorMultiple = this.bv.getFieldElements('colorMultiple');
        this.$colorHex      = this.bv.getFieldElements('colorHex');
        this.$colorRgb      = this.bv.getFieldElements('colorRgb');
        this.$colorRgba     = this.bv.getFieldElements('colorRgba');
        this.$colorHsl      = this.bv.getFieldElements('colorHsl');
        this.$colorHsla     = this.bv.getFieldElements('colorHsla');
        this.$colorKeyword  = this.bv.getFieldElements('colorKeyword');
    });

    afterEach(function() {
        $('#colorForm').bootstrapValidator('destroy').remove();
    });

    // Start hsla() tests
    it('Run hsla() test suite on hsla only field', function() {
        this.$colorHsla.val('hsla(120,50%,50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla( 120 , 50% , 50%, 1 )');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(  120,  50%,       50% ,   1  )');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(-120,50%,50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(480,50%,50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,0)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,0.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,.524141)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,2)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,-1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,1.000000000001)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,-0.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,100%,2.3)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(10,-50%,50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(10,50%,-50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('120,50%,50%,1');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,100%,101%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla (120,50%,50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val(' hsla(120,50%,50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120,50%,50%,1) ');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(50%, 50%, 100%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120, 50, 100%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsla.val('hsla(120, 50%, 100,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);
    });

    // Start hsl() tests
    it('Run hsl() test suite on hsl only field', function() {
        this.$colorHsl.val('hsl(120,50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsl.val('hsl( 120 , 50% , 50% )');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsl.val('hsl(  120,  50%,       50%  )');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsl.val('hsl(-120,50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsl.val('hsl(480,50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toBeTruthy();

        this.bv.resetForm();
        this.$colorHsl.val('hsl(10,-50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('hsl(10,50%,-50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('120,50%,50%');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('hsl(120,100%,101%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('hsl (120,50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val(' hsl(120,50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('hsl(120,50%,50%) ');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('hsl(50%, 50%, 100%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('hsl(120, 50, 100%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);

        this.bv.resetForm();
        this.$colorHsl.val('hsl(120, 50%, 100)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);
    });

    // Start keyword test
    it('Run keyword test suite on keyword only field', function() {
        this.$colorKeyword.val('transparent');
        this.bv.validate();
        expect(this.bv.isValidField('colorKeyword')).toBeTruthy();

        this.bv.resetForm();
        this.$colorKeyword.val('transparent');
        this.bv.validate();
        expect(this.bv.isValidField('colorKeyword')).toBeTruthy();

        this.bv.resetForm();
        this.$colorKeyword.val('blueviolet red');
        this.bv.validate();
        expect(this.bv.isValidField('colorKeyword')).toEqual(false);

        this.bv.resetForm();
        this.$colorKeyword.val('shady');
        this.bv.validate();
        expect(this.bv.isValidField('colorKeyword')).toEqual(false);

        this.bv.resetForm();
        this.$colorKeyword.val('blueish');
        this.bv.validate();
        expect(this.bv.isValidField('colorKeyword')).toEqual(false);
    });

    // Start rgba() test
    it('Run rgba() test suite on rgba only field', function() {
        this.$colorRgba.val('rgba(255,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba( 255 , 255 , 255 , 1 )');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(  255  ,  255    ,       255 ,  1     )');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,100%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,0)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,0.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,.524141)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,100%,0)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,100%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,100%,0.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,100%,.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,100%,.524141)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,100%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,2)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,-1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,1.000000000001)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,-0.5)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,2.3)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,100%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(-10,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(-10%,100%,100%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('255,255,255,1');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,256),1');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(100%,100%,101%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba (255,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val(' rgba(255,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgba.val('rgba(255,255,255,1) ');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);
    });

    // Start rgb() test
    it('Run rgb() test suite on rgb only field', function() {
        this.$colorRgb.val('rgb(255,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgb.val('rgb( 255 , 255 , 255 )');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgb.val('rgb(  255,  255,       255  )');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgb.val('rgb(255,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgb.val('rgb(100%,100%,100%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toBeTruthy();

        this.bv.resetForm();
        this.$colorRgb.val('rgb(255,255,100%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val('rgb(-10,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val('rgb(-10%,100%,100%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val('255,255,255');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val('rgb(255,255,256)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val('rgb(100%,100%,101%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val('rgb (255,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val(' rgb(255,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);

        this.bv.resetForm();
        this.$colorRgb.val('rgb(255,255,255) ');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);
    });

    /* Run individual tests */
    it('Individual field keyword: accept keyword', function() {
        this.$colorKeyword.val('blue');
        this.bv.validate();
        expect(this.bv.isValidField('colorKeyword')).toBeTruthy();
    });

    it('Individual field keyword: reject rgb', function() {
        this.$colorKeyword.val('rgb(255,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorKeyword')).toEqual(false);
    });

    it('Individual field hex: accept 6 char hex', function() {
        this.$colorHex.val('#0000FF');
        this.bv.validate();
        expect(this.bv.isValidField('colorHex')).toBeTruthy();
    });

    it('Individual field hex: accept 3 char hex', function() {
        this.$colorHex.val('#00F');
        this.bv.validate();
        expect(this.bv.isValidField('colorHex')).toBeTruthy();
    });
    it('Individual field hex: reject keyword', function() {
        this.$colorHex.val('blue');
        this.bv.validate();
        expect(this.bv.isValidField('colorHex')).toEqual(false);
    });

    it('Individual field rgb(): accept rgb()', function() {
        this.$colorRgb.val('rgb(255,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toBeTruthy();
    });

    it('Individual field rgb(): reject hex', function() {
        this.$colorRgb.val('#0000FF');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgb')).toEqual(false);
    });

    it('Individual field rgba(): accept rgba()', function() {
        this.$colorRgba.val('rgba(255,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toBeTruthy();
    });

    it('Individual field rgba(): reject rgb()', function() {
        this.$colorRgba.val('rgb(255,255,255)');
        this.bv.validate();
        expect(this.bv.isValidField('colorRgba')).toEqual(false);
    });

    it('Individual field hsl(): accept hsl()', function() {
        this.$colorHsl.val('hsl(120,50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toBeTruthy();
    });

    it('Individual field hsl(): reject rgba()', function() {
        this.$colorHsl.val('rgba(255,255,255,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsl')).toEqual(false);
    });

    it('Individual field hsla(): accept hsla()', function() {
        this.$colorHsla.val('hsla(120,50%,50%,1)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toBeTruthy();
    });

    it('Individual field hsla(): reject hsl()', function() {
        this.$colorHsla.val('hsl(120,50%,50%)');
        this.bv.validate();
        expect(this.bv.isValidField('colorHsla')).toEqual(false);
    });

    /* Run validation message tests */
    it('Validation message tests', function() {
        this.$color.val('notacolor');
        this.bv.validate();
        expect(this.bv.isValidField('color')).toEqual(false);
        expect(this.bv.getMessages(this.$color, 'color')[0]).toEqual($.fn.bootstrapValidator.i18n[this.bv.getLocale()].color.default);
    });
});
