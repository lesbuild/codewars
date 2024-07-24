const whosOnline = friends => friends.reduce((a,{username, status, lastActivity}) => {
    const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
    a[fStatus] ? a[fStatus].push(username) : a[fStatus] = [username];
    return a;
  }, {})