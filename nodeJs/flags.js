 function getflags(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
 }
 
 // eslint-disable-next-line no-undef
 module.exports = getflags;