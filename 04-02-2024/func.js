class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        var numSlice = dirtyFileName.indexOf('_')
        var extSlice = dirtyFileName.lastIndexOf('.')
        dirtyFileName = dirtyFileName.slice(numSlice+1, extSlice)
        return dirtyFileName
    }
}