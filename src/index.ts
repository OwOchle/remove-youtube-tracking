function setShareURL(shareUrlInput: HTMLInputElement) {
    console.log("changed")
    const currentUrl = new URL(shareUrlInput.value)

    currentUrl.searchParams.delete("si")

    shareUrlInput.value = currentUrl.toString()
}

function removeTracking () {
    const shareUrlInput = document.querySelector<HTMLInputElement>("#share-url")

    if (!shareUrlInput) {
        console.error("Share URL input not found")
        return
    }

    shareUrlInput.onchange = () => { setShareURL(shareUrlInput) }
    setShareURL(shareUrlInput)
}


(() => {
   new MutationObserver((mutations, observer) => {
       if (document.querySelector<HTMLInputElement>("#share-url") != null) removeTracking()
   }).observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false})
})()