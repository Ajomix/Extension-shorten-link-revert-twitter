chrome.contextMenus.create({
    title:"Short-ten %s",
    contexts:['selection','link'],
    onclick:async (info,tab)=>{
      
      const url = info.selectionText || info.linkUrl;
      const shortenUrl = await shortening(url);
      copyToClipboard(shortenUrl);

    }
} ,()=>{
   
})
