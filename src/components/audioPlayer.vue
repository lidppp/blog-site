<template>
  <div id="aplayer" ref="aplayerDom"></div>
</template>

<script setup>
import 'aplayer/dist/aplayer.min.css';

import Aplayer from "aplayer"
import Cookies from "js-cookie"
import {fetch163Playlist} from "@/api/aplayer.js";
import swal from "sweetalert"
import {onMounted, ref} from "vue";
let player = null;
const playlistId = "78694173"
const aplayerDom = ref(null)

onMounted(() => {
  // Active player
  // CheckCookie
  var player_auto = Cookies.get('player_auto');
  if (player_auto) {
    // isAuto
    if (player_auto === "auto") {
      activePlayer();
    } else {
      activePlayer(false);
    }
  } else {
    swal("是否需要播放乐曲呢？", {
      buttons: {
        cancel: "拒绝",
        allow: "好的"
      }
    })
        .then((value) => {
          if (value === "allow") {
            activePlayer();
            Cookies.set('player_auto', 'auto', {expires: 365});
          } else {
            // do nothing
            activePlayer(false);
            Cookies.set('player_auto', 'no', {expires: 365});
          }
        });
  }
})

function activePlayer(auto = true) {
  fetch163Playlist(playlistId)
      .then((data)=> {
        var songs = [];
        data.map((song) => {
          songs.push({
            name: song.name,
            artist: song.artist,
            cover: song.pic,
            url: song.url,
            lrc: song.lrc.base
          });
        });
        return songs;
      })
      .then((songs) => {
        player = new Aplayer({
          container: aplayerDom.value,
          lrcType: 1,
          fixed: true,
          autoplay: auto,
          preload: 'metadata',
          audio: songs
        });
        player.lrc.toggle();
        player.volume(0.5);
        // $("#active_player").text("暂停");
      })
      .catch(function (err) {
        console.log(err);
      });
}
</script>

<style>
.aplayer-lrc-contents > p {
  color: #fff !important;
  text-shadow: none !important;
}

/*#aplayer {*/
/*  @apply opacity-0 md:opacity-100*/
/*}*/
</style>
