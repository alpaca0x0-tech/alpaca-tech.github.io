"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"AlpacaTech Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"735acb606da9870ae29b4b9a9ad1f82f",url:"./2019/12/12/淺談AI人工智慧的深度學習概念/index.html"},{revision:"df3652f579bbebb82499f4797340bf64",url:"./2019/12/14/About-Albert-Einstein/index.html"},{revision:"5bb88171646b42aa946cec6160644c8c",url:"./2019/12/20/Ubuntu顯示電量百分比/index.html"},{revision:"cb324539c2c2b53eb3827b60c89be999",url:"./2019/12/22/HeyMandi網頁版XSS/index.html"},{revision:"d279803c7ec65d211929fae1801b4561",url:"./2019/12/23/RC語音XSS漏洞/index.html"},{revision:"abbbe8c3ee49420da57ee05d8afd059e",url:"./2020/01/06/MrL/index.html"},{revision:"b97736a672f72d7c010c9e2160983e19",url:"./2020/01/19/XD-XVideosDownloader/index.html"},{revision:"1ce0a76c3da0b7d2ca322090fb2caa2b",url:"./2020/01/24/Social-Engineering(社交工程)/index.html"},{revision:"d879380f2d980de7cf8da80787f27762",url:"./2020/01/26/中二病/index.html"},{revision:"d7882e20128fda38dcb5366a0a66bd8f",url:"./2020/01/27/量子力學 (Quantum Mechanics)/index.html"},{revision:"9c839dbf1abd5c940acf56789ab35e70",url:"./2020/01/30/Covid-19-Pneumonia/index.html"},{revision:"04540856871d8f83adb59f0a2bde7a84",url:"./2020/02/04/Anonymous/index.html"},{revision:"0bcfa73cc7d609f1d753c914f73fe94a",url:"./2020/02/05/Cicada3301/index.html"},{revision:"c16aa1a0ce64d3b4241bb875d457b20f",url:"./2020/02/08/Coulrophobia-小丑恐懼症/index.html"},{revision:"0efa6c638c4795ef8b7b5cd2101c83b4",url:"./2020/02/17/DarkWeb/index.html"},{revision:"fdd39f6e3dc1e48e6714e012a40dcea8",url:"./2020/02/18/DarkWeb-FamousWeb/index.html"},{revision:"8c60596ca2a7a06031edee7655606581",url:"./2020/02/27/PRISM(稜鏡計劃)/index.html"},{revision:"44af037965c178282399cb3049280dc2",url:"./2020/02/27/Snowden/index.html"},{revision:"27eb2070d4211f6a633269ded329719d",url:"./2020/02/28/Cigarette/index.html"},{revision:"bab09ad1ecae6e7fbbbc79fc48c65b4d",url:"./2020/03/25/Korea-N-Room/index.html"},{revision:"b714b322752e7e0757250cb214fda3db",url:"./2020/07/20/Motorcycle/index.html"},{revision:"0e87b3d6fe0c1172b6ec967848bddd83",url:"./2020/08/07/Make-Money-Online/index.html"},{revision:"25a2db316c3c3ee6ea7985f4140b44cd",url:"./2020/08/21/One-Off-Service/index.html"},{revision:"c7e45381134c837d60a8a8b7d33e503e",url:"./2020/09/01/How-To-Enter-The-DarkWeb/index.html"},{revision:"8b6faf2b3b8b4f800cfb6361e29b3a6c",url:"./2020/09/04/XMPP/index.html"},{revision:"258ad398b0b125d82c5689dcdb558063",url:"./2021/01/08/About-Lose-Weight/index.html"},{revision:"b7297afea005c60475929be634006e6d",url:"./2021/01/09/Pi-Coin/index.html"},{revision:"be5abc83cdfd2bcda01cc4d6b1be2bbb",url:"./2021/01/11/Pi-Coin-APP/index.html"},{revision:"f8d6f6b2f4bc9a6da1fb0279158d7e10",url:"./2021/04/06/Windows10-Ultimate-Performance/index.html"},{revision:"b0b4057bedc345c23e1abf8c2d522361",url:"./2021/06/13/Pareto-Principle/index.html"},{revision:"7de13275853bc2c9deeb4d33508291d8",url:"./404.html"},{revision:"5596b7a90f1e017088192c796524c38c",url:"./about/index.html"},{revision:"a9cdb0289f6b13a09ff1f455da0348e9",url:"./archives/2019/12/index.html"},{revision:"8477a75a5e82df8b3d5d3f3b08106df9",url:"./archives/2019/index.html"},{revision:"f4f78c3b2adac31d10706f73213c93c2",url:"./archives/2020/01/index.html"},{revision:"c27f383ae5fc999667675e5ebfa6ac47",url:"./archives/2020/02/index.html"},{revision:"5504c6d89fd07f289bc4c6da21aaef1e",url:"./archives/2020/03/index.html"},{revision:"ae331de3e3fd497f0c93fc9c3f4234dc",url:"./archives/2020/07/index.html"},{revision:"e6874050475069ff6db1a06f3f9fe9fc",url:"./archives/2020/08/index.html"},{revision:"39628cd22f0c2585eebc6a1b29e08066",url:"./archives/2020/09/index.html"},{revision:"970e53d2a469ed57c1cc615ba7b6f91a",url:"./archives/2020/index.html"},{revision:"46c8a72dd85aabc8e1607f37d5e45fca",url:"./archives/2020/page/2/index.html"},{revision:"a411536fc22279ae4c19f2d0e96ae5e4",url:"./archives/2021/01/index.html"},{revision:"6a514c33c8332ac7fffd13d099b3f507",url:"./archives/2021/04/index.html"},{revision:"fe7782b4da22fbbf701994b88efdd6ee",url:"./archives/2021/06/index.html"},{revision:"e753319c3c8e1fc8361272074a3aea45",url:"./archives/2021/index.html"},{revision:"3308da1a667960d9f57b73c37baa7363",url:"./archives/index.html"},{revision:"bc4097f4547043ba2c36c17d230281a5",url:"./archives/page/2/index.html"},{revision:"c1f8869055c2247be4aeee6a0b887279",url:"./archives/page/3/index.html"},{revision:"8da8f68c5743ded2ecf9cf65d8b862b7",url:"./bing.json"},{revision:"252d12f74f37e70077642c289d4f4170",url:"./categories/Computer-Science/index.html"},{revision:"6e6ab107594b4f62ec94aead579532c0",url:"./categories/Computer-Science/Security-Flaw-安全漏洞/index.html"},{revision:"a636c35f6e5dab6cc3c9706c4926c642",url:"./categories/Computer-Science/Security-Flaw-安全漏洞/我的通報/index.html"},{revision:"d4d4c93c174d091eaec0cc81bb0d614b",url:"./categories/Concept-概念分享/index.html"},{revision:"e349fdc8236d82e2d9bd4f865aa0fbfc",url:"./categories/index.html"},{revision:"5da29760d0ff4c84f6a063f70c12fdaf",url:"./categories/Information-資訊分享/index.html"},{revision:"92ab05e53183e11ce65a4380177aaf97",url:"./categories/Learning-學習筆記/index.html"},{revision:"cf51842d18da72fcd6e828a2b450f65f",url:"./categories/Learning-學習筆記/Psychology/index.html"},{revision:"7bb490a62b9a2e1f8eb4cd8aae5b5071",url:"./categories/Note-技巧分享/index.html"},{revision:"bcf111cffca4d34199e1ef1538c6aa4f",url:"./categories/Person-人物分享/index.html"},{revision:"40f37a417e186ea32d61c6cea95accba",url:"./categories/Popular-Science-科普/index.html"},{revision:"ab9c55f45f823ab843377274965c5746",url:"./categories/Project-專案分享/index.html"},{revision:"ab7e349b319d7dbe3a02c13085ff7f33",url:"./categories/Project-專案分享/我的專案/index.html"},{revision:"0005fd552c5e0c4ba5ee689bc2436b11",url:"./categories/Service-服務分享/index.html"},{revision:"03ab3d5349f70718525c395e91daf27e",url:"./categories/Writing-文學創作/index.html"},{revision:"82d738c2a89ef96c73546afa2312b80f",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"24e96d374956ee73fcc6995a3cc00b59",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"70426823322223c1238567a40980ca15",url:"./link/index.html"},{revision:"0cf763181ac0dcf84862a7c9012e8bab",url:"./page/2/index.html"},{revision:"976f8aed9d19232e5f06f1ab27b5d7d9",url:"./page/3/index.html"},{revision:"b4409018739e04b737fa272992f132cd",url:"./tags/18/index.html"},{revision:"ccc298f48d28299cd767b6ce139e4327",url:"./tags/AI-人工智慧/index.html"},{revision:"ceb2fcd174b8b7ec1277212d645147b6",url:"./tags/Anonymous-匿名者/index.html"},{revision:"8852499edb1d5b90d9efa822dab1258b",url:"./tags/Big-Data-大數據/index.html"},{revision:"dd1594dc5fe463a83fb7cbb0c47f02b4",url:"./tags/Bitcoin-比特幣/index.html"},{revision:"3c75ca5215942e296acbccaf03f82b4b",url:"./tags/CIA-美國中央情報局/index.html"},{revision:"2013cb625ae82d29f87cbcf31a0fa330",url:"./tags/Cicada3301/index.html"},{revision:"be4a35b614cbbf4e23d026e712361045",url:"./tags/Composition-作文/index.html"},{revision:"daba8ba44f74fd75a1d23d1f84331aef",url:"./tags/Crawler-爬蟲/index.html"},{revision:"c4fd527e3b2b34d53ac5d155aa1354f4",url:"./tags/Cryptography-密碼學/index.html"},{revision:"8706b79f9aea4124a7f249c099e88198",url:"./tags/Cyber-Security-網絡安全/index.html"},{revision:"fbebfbcc11fe954c10750a22c492f1c4",url:"./tags/Cyberculture-網絡文化/index.html"},{revision:"78649cf94f19219a6ff55912257e41cf",url:"./tags/Dark-Web-暗網/index.html"},{revision:"be4f10484ff6e9e659bcb17c2ad44ba1",url:"./tags/Deep-Learning-深度學習/index.html"},{revision:"4e04332a969961c156cb9ce4e69dd355",url:"./tags/Deep-Web-深網/index.html"},{revision:"59eb54998f2e8a40e6e587d993b3d645",url:"./tags/Digital-Currency-數位貨幣/index.html"},{revision:"80e8551a9f6f2c1ea8351b62e507242b",url:"./tags/Hacker-駭客/index.html"},{revision:"87da3b8a20764ecee205d5047709bad1",url:"./tags/index.html"},{revision:"62f8b48f4deae19a4c2846383c5ed570",url:"./tags/Linux/index.html"},{revision:"b0c048b8f00fbaad3805d8af8b2a495b",url:"./tags/Machine-Learning-機器學習/index.html"},{revision:"23cd22029e896f27252d877e498f3bcd",url:"./tags/MadeFromMe-我的專案/index.html"},{revision:"98737a6378732be07d78e596f326db04",url:"./tags/Neural-Network-神經網絡/index.html"},{revision:"db5316aec7a3ef9c8a7e1ca566fde3ba",url:"./tags/Phishing-釣魚攻擊/index.html"},{revision:"e56707debbadd0ad6cecaa66587a4539",url:"./tags/Phobia-恐懼症/index.html"},{revision:"3fbce25a9e748fdb9a0c7b218d545044",url:"./tags/Psychology-心理學/index.html"},{revision:"4a796c56e600ea95a84893538545a3e0",url:"./tags/Python/index.html"},{revision:"244bb65c4aee6fe424b14218405ed1a2",url:"./tags/ReportedFromMe-我的通報/index.html"},{revision:"c52e2d91bbbddc311dcaf007d225b781",url:"./tags/Science-科學/index.html"},{revision:"1c0cbaa59c6157cc8ded1c208df81209",url:"./tags/Social-Engineering-社交工程/index.html"},{revision:"e2b5c6e24f1f8e6735098934c074912f",url:"./tags/Tor-洋蔥路由/index.html"},{revision:"c49438da89fc8e57fa41d79d261ab810",url:"./tags/Ubuntu/index.html"},{revision:"d390072e6717b04ebc323b33b394384e",url:"./tags/Wiki-維基百科/index.html"},{revision:"caa7324c9c03fb9e4f4888918234c7a3",url:"./tags/Windows-10/index.html"},{revision:"20672ef99862d12462fde39ae39dd0dc",url:"./tags/XSS-Cross-Site-Scripting/index.html"},{revision:"774d61d344a4bae35c7136d8dd657b1d",url:"./tags/量子力學-Quantum-Mechanics/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();