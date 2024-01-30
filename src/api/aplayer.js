/**
 * 优化: 本地session存储
 */

export function fetch163Playlist(playlist_id) {
  let musicList = localStorage.getItem("music-list")
  let expireTime = localStorage.getItem("expire-time");
  /**
   * 判断过期时间
   */
  if ((+new Date()) > expireTime){
    localStorage.removeItem("music-list")
    localStorage.removeItem("expire-time");
    musicList = false
  }
  console.log("musicList",JSON.parse(musicList),"expireTime",expireTime)
  /**
   * 判断是否存在音乐列表
   * 如果存在则直接返回, 不存在则请求
   */
  if (musicList){
    return new Promise(res=>{
      return res(JSON.parse(musicList))
    })
  }

  return new Promise(function (ok, err) {
    fetch("https://v1.hitokoto.cn/nm/playlist/" + playlist_id + "?nocache=true")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var arr = [];
        data.playlist.trackIds.map(function (value) {
          arr.push(value.id);
        });
        return arr;
      })
      .then(function (ids) {
        return fetch163Songs(ids);
      })
      .then(function (data) {
        localStorage.setItem("music-list", JSON.stringify(data))
        localStorage.setItem("expire-time", +new Date() + 1296000000) // 设置过期时间为15天
        ok(data);
      })
      .catch(function (e) {
        err(e);
      });
  })
}

export function fetch163Songs(IDS) {
  return new Promise(function (ok, err) {
    var ids;
    switch (typeof IDS) {
      case 'number':
        ids = [IDS];
        break;
      case 'object':
        if (!Array.isArray(IDS)) {
          return new Error("Please enter array or number");
        }
        ids = IDS;
        break;
      default:
        throw new Error("Please enter array or number");
    }
    fetch("https://v1.hitokoto.cn/nm/summary/" + ids.join(",") + "?lyric=true&common=true&quick=true")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var songs = [];
        data.songs.map(function (song) {
          songs.push({
            name: song.name,
            url: song.url,
            artist: song.artists.join("/"),
            album: song.album.name,
            pic: song.album.picture,
            lrc: song.lyric
          });
        });
        return songs;
      })
      .then(function (result) {
        ok(result);
      })
      .catch(function (e) {
        err(e);
      });
  });
}
