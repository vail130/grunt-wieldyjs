var grunt = require('grunt');

exports['wieldyjs'] = {
  'validateAndReadFile': function(test) {
    test.equal(
      grunt.helper('validateAndReadFile', '').result,
      'Empty file path.',
      'Fail for empty file path.'
    );
    
    test.equal(
      grunt.helper('validateAndReadFile', 'asdf.wml').result,
      'Invalid file path.',
      'Fail for invalid file path.'
    );
    
    test.equal(
      grunt.helper('validateAndReadFile', 'dest/markup-test.html').result,
      'Invalid file extension.',
      'Fail for invalid extension.'
    );
    
    test.equal(
      grunt.helper('validateAndReadFile', 'src/markup-test.wml').status,
      'success',
      'Succeed with valid, existing file with proper extension.'
    );
    
    test.done();
  },
  'getOutputFileFromInputFile': function(test) {
    test.equal(
      grunt.helper(
        'getOutputFileFromInputFile', 'src/markup-test.wml', '', 'src/'
      ),
      'markup-test.html',
      'Return file name without folders for empty destination.'
    );
    
    test.equal(
      grunt.helper(
        'getOutputFileFromInputFile', 'src/markup-test.wml', 'dest/', ''
      ),
      'dest/src/markup-test.html',
      'Don\'t remove input folder for empty base path.'
    );
    
    test.equal(
      grunt.helper(
        'getOutputFileFromInputFile', 'src/markup-test.wml', 'dest/', 'src/'
      ),
      'dest/markup-test.html',
      'Remove input folder and add destination folder for corrent arguments.'
    );
    
    test.done();
  }
};
