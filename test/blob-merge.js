var blobMerge = require('../src/blob-merge')

describe("blob-merge", function() {
  before(function(done) {
    that = this
    fs.readFile('../fixtures/text.txt', function(err, text) {
      that.text = text;
    })
  })

  before(function(done) {
    that = this
    fs.readFile('../fixtures/cat.png', function(err, cat) {
      that.cat = cat;
    })
  })

  it("should work", function() {
    console.log('text:', this.text)
  })
})
