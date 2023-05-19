class Download {
  
  static downloadLink(link, filename) {
    const aLink = document.createElement('a');
    aLink.download = filename;
    aLink.href = link;
    aLink.click();
    aLink = null;
  }

  static createObjectUrl(blob) {
    if (!(blob instanceof Blob)) {
      return console.error('blob must be a Blob')
    }
    const fileUrl = window.URL.createObjectURL(blob)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    this.downloadLink(fileUrl, uniqueSuffix)
    window.URL.revokeObjectURL(fileUrl)
  }
}