// Array with all input
// TODO: use seperate file for input
let inputList = [ 
    "4-5 l: rllllj", 
    "4-10 s: ssskssphrlpscsxrfsr", 
    "14-18 p: ppppppppppppppppppp", 
    "1-6 z: zzlzvmqbzzclrz", 
    "4-5 j: jhjjhxhjkxj", 
    "7-8 s: tsszsssrmsss", 
    "12-13 m: mmmmsmmmmmmqm", 
    "16-17 k: kkkkkkkzkkkkrkkmfkk", 
    "6-7 x: jxxwxpx", 
    "3-7 w: wwwwwwwwwwwwwwwwwwww", 
    "4-15 h: gcxfgbpbghdtrkhn", 
    "3-4 g: tprznvggnfgpgtmzsrmr", 
    "16-17 c: cccccccccccccccwccc", 
    "6-7 s: ssssssmsss", 
    "3-4 l: flll", 
    "4-5 v: mvvvc", 
    "17-19 j: lwjsfvkjgjjmsjrsjjr", 
    "2-20 k: xhfhfzvghbkbngzbqcck", 
    "2-3 s: rssnsxslshrdtk", 
    "12-17 b: hbvctbbxbkbbjhbvbw", 
    "8-9 j: qjxxtnwjqpjj", 
    "14-15 b: bbbbbbbbbbbbbbbb", 
    "14-19 l: llllllllllllllllllml", 
    "6-7 f: krgfxsffffsffrbf", 
    "8-9 f: fffffffffff", 
    "16-17 c: cczccwccccccccccz", 
    "8-10 s: tlstjjwsms", 
    "8-12 f: fffffffftftxff", 
    "5-16 z: vxjlgzxckzqgwjdw", 
    "8-15 t: lltqlhtptgtsvmw", 
    "5-9 h: dhsnnlthw", 
    "7-9 d: hgbdzzppdscxt", 
    "5-8 g: ggdmfgzm", 
    "2-14 w: wwwwwwwwwwwwwwwwww", 
    "9-16 q: qqlqqqqkqjqqqqrq", 
    "1-5 p: lpdmptz", 
    "1-3 l: llql", 
    "10-16 x: xxxxxxxxnxxxxxxcrxx", 
    "6-8 h: lhhhhqhh", 
    "4-15 z: zzszzzzzzmtzzzzrz", 
    "4-5 c: zvcsz", 
    "7-8 f: zcpftffqfwfffcdf", 
    "11-15 s: lsssssssgssfssrh", 
    "18-19 p: pppwpppppppppppppppp", 
    "3-5 g: gzgggqg", 
    "4-6 n: nnfnktnnndqt", 
    "1-10 l: llllllllldfll", 
    "9-17 x: xxxxxxxxrxxxxxxxhx", 
    "13-16 c: cccccncccxccgwckcc", 
    "3-4 k: kkhn", 
    "4-14 m: mmmdmmmmmmmmmmmm", 
    "4-16 t: stwqdgdhlzlzlwqtjmj", 
    "1-6 x: xpbxxj", 
    "9-10 h: mhhhhhhhhh", 
    "1-3 q: qqqqdqqq", 
    "1-3 b: bbbb", 
    "6-8 g: gggggpgmv", 
    "10-13 f: ffxzhfldffvmc", 
    "5-9 w: xwwwnwwfw", 
    "5-7 d: gtdhdzp", 
    "2-14 k: kkkkkkkkkkkkkkkkk", 
    "6-13 r: hzqgnrdqqxdwcshjr", 
    "5-10 d: ddczhrqjqd", 
    "1-10 b: qngplzdvrbsb", 
    "3-5 d: xrndch", 
    "2-6 s: sssssss", 
    "1-6 s: gsssssnssff", 
    "4-5 p: pnpxpgppsp", 
    "3-7 j: jcjnbvz", 
    "8-14 j: mrvbmlsdplscxznj", 
    "1-6 b: zbbbbbbbb", 
    "4-5 b: bbbbb", 
    "6-8 b: bbwbbbbbbbn", 
    "11-20 m: dlmcggnmlwmghngcqpxm", 
    "8-10 n: nfnncmwnnn", 
    "5-8 c: ccccjccc", 
    "18-20 k: qdckkkkdvknkkvvblhkk", 
    "1-15 l: gclfbjlvsxfgllq", 
    "14-16 v: vvvvcvvvvfknvvvvmvvv", 
    "4-7 t: rtdtttt", 
    "5-7 h: shhhwvb", 
    "4-5 x: xxsnvx", 
    "11-12 v: vqgqvdvrjvvdvvvvvvl", 
    "5-6 l: llllvwll", 
    "3-4 l: llhln", 
    "6-7 w: wwwwwwb", 
    "3-6 j: jjjjjjjfjjjjj", 
    "1-7 q: qqqqdqqqqq", 
    "4-14 q: qcqjqqqqqqqqqfqqqk", 
    "2-5 z: pzzfz", 
    "1-2 f: ffsflqqrgzfnmbw", 
    "1-4 p: qwgpwlbx", 
    "3-5 s: mzpcwhfswsz", 
    "6-7 w: dsmwcnwfww", 
    "2-5 h: qpkwhsmftnlvcgpq", 
    "10-11 m: mmmmmdmmmlbfmmmxmm", 
    "2-5 g: vgvgg", 
    "4-6 l: lglvltlll", 
    "4-7 t: ttttttmtttt", 
    "5-8 w: wwkfwwvhrvwwpx", 
    "4-5 k: nszkkkdrk", 
    "1-4 x: hbdg", 
    "6-9 p: pjppfwpjpj", 
    "4-5 h: hhrsqh", 
    "11-13 x: cfxfxrxxxxxrh", 
    "12-15 n: ctjxnzsbjmnnnfnjm", 
    "9-13 n: nnnndnntndzlgnnnnnnn", 
    "3-4 h: hhhws", 
    "4-15 f: kqgfffkvqtksrlwglt", 
    "10-15 d: dddddddddgddddbd", 
    "3-5 g: ggxgfhggg", 
    "4-8 b: bpjbpnvnzwbvfts", 
    "5-11 c: wccccmvccccc", 
    "17-20 h: hhshhhhhghhhhdhhvhhh", 
    "10-12 m: gmmmmmmmpbsmpmmmmhr", 
    "1-8 z: zzzzpzzxbh", 
    "4-10 c: kcxlxtckgxvc", 
    "8-10 f: ffffffffffffff", 
    "6-12 h: hhhhhjhhhhhhhhh", 
    "6-8 s: wsvwvfssh", 
    "3-6 j: xjjzjjzlztjrjjjt", 
    "2-3 g: gfvg", 
    "11-12 v: vvvvvvvvvvvv", 
    "2-4 l: lllltlll", 
    "4-9 q: qvqmhqdkd", 
    "4-5 l: lllxlj", 
    "5-6 d: dddbdddt", 
    "3-8 g: gpggggxzdggzxgh", 
    "2-7 s: nsrkvkwzpmv", 
    "11-13 v: vvvvvpvvvvvvpvvvvpvv", 
    "3-5 c: qccvjcc", 
    "12-13 d: ddddhddddddfld", 
    "3-4 q: dqqqqqqqqqq", 
    "12-14 k: kkkkkkkkkkqnkp", 
    "2-4 v: bvwvz", 
    "6-8 d: mxhdddddckdbkgddtsdd", 
    "3-5 p: ttpdppp", 
    "9-10 p: pnppvpkphp", 
    "2-5 q: qqxczq", 
    "1-5 x: xbgtwk", 
    "6-7 f: dwzfpfr", 
    "12-13 b: bbbbbbbzbbbbb", 
    "8-10 x: xxxxxmvcnphxfx", 
    "15-16 t: tttttttthmttkttdg", 
    "1-3 l: rsmgkpjxnpjnlrmdslsw", 
    "2-4 x: xhxsjxx", 
    "11-14 w: hwwbwlwhwgxmwwwwwz", 
    "3-4 j: pjjdr", 
    "1-8 s: sssssssssss", 
    "9-13 q: jqxcngqqqrxqwp", 
    "3-10 v: vjxhfzbfvv", 
    "14-15 w: lmxjqmwtpwsvjjw", 
    "8-9 c: tcmccdczs", 
    "4-5 w: wwwtw", 
    "5-10 f: ffffmfhffkpfffffffff", 
    "7-9 l: llgblxlxlwv", 
    "6-14 w: wghjmwtbvsvzkfcwwj", 
    "6-9 p: mqpnmlpcdppfp", 
    "5-7 b: bbbbbbbb", 
    "6-7 w: xwwwxcw", 
    "11-13 p: ppppppwppfppzszppwpp", 
    "3-5 z: rzmzmzzbzzczz", 
    "1-8 h: bhbxrhthphhbljknfvhh", 
    "11-12 q: qqqqqqqqqqwjqhq", 
    "2-17 r: zrmshszlckcrxtmsrtg", 
    "4-5 s: svztv", 
    "8-11 z: zzzzzzzqzzczz", 
    "3-4 h: hnzpc", 
    "13-14 q: qqqqqqqqqqqqqhqq", 
    "2-5 p: rppgpd", 
    "12-15 p: ppppppppppppppl", 
    "1-14 v: vvzvvvvvvvjszv", 
    "7-9 h: hxhnhhlhzdh", 
    "2-3 r: rrrr", 
    "5-9 m: mmmmdzmmwmmmm", 
    "4-7 f: zpvlfff", 
    "4-15 j: gpjjjcjpjjjjjpj", 
    "4-7 p: pdkgjhp", 
    "6-16 w: wwwwwwwwwwwwwwwww", 
    "9-10 q: hsdfqqqrlm", 
    "4-16 q: qqqqqqqqqqqqqqqjq", 
    "4-7 s: sssdtsr", 
    "15-16 p: bqphxhczjpmpwpqpd", 
    "7-8 g: wbjggggc", 
    "11-16 x: xxxxxxxxxxxxxxxmxx", 
    "16-17 w: wwwzwwwwwwwvxvxww", 
    "2-7 t: ttttttgttttt", 
    "6-14 q: mmkqxqljbkmfpjvgf", 
    "16-19 j: jfjjjsjjjjjjjjfjqjj", 
    "6-7 r: rrrrrrs", 
    "7-9 d: ddgndhdcvdlnddddsdt", 
    "2-3 m: mgpms", 
    "6-10 g: lqdxdtjmglvgn", 
    "6-7 q: qqqqqbqb", 
    "3-5 w: wwjtwwwwwwww", 
    "3-4 g: ggthg", 
    "6-9 k: dbhgrkcjllqkgh", 
    "14-16 c: ccccccccccwcclqccccc", 
    "2-8 f: wfpvntbqcjf", 
    "6-10 r: njrlljrfkl", 
    "1-4 h: hhtjhhfh", 
    "5-6 z: zgxwzjqz", 
    "6-7 b: xbcbsbk", 
    "3-4 p: prpq", 
    "1-4 s: dhsmk", 
    "2-6 f: pffqffrfjff", 
    "5-6 h: hhwbdzhhg", 
    "5-6 q: qqjqqqqqvq", 
    "5-8 k: kkkkkkkq", 
    "4-5 k: kkkkzk", 
    "8-9 s: ssdvssbss", 
    "11-13 q: qqqpqqqqqqrqq", 
    "2-13 w: wvcwwwwwcwvmwmwwwww", 
    "9-12 r: rrrrrprrgrrhrr", 
    "10-13 m: mmmmmmmmwfmmmmm", 
    "9-14 t: vgsrtrxzltkvbtt", 
    "2-3 j: sjjj", 
    "4-5 v: mvvfm", 
    "4-5 h: hhhrb", 
    "7-10 j: jjjdjvfcjjm", 
    "4-13 l: lldllllwlpgmllkbsbd", 
    "12-20 r: rwrrrrrrrfdrrqnrrhrr", 
    "9-11 s: smssssssssgss", 
    "4-5 b: dfmsp", 
    "2-3 d: dlsnxd", 
    "10-19 m: mmmmmmmmmfmfmmmmmmm", 
    "1-5 n: nnnnhnnnn", 
    "4-7 d: dfsddkw", 
    "1-7 q: dqzzqxqpqqqsqnqq", 
    "2-3 p: twrp", 
    "14-15 g: lrsggrgvgjjcvggfgcc", 
    "9-20 m: rsbmmdmpmjjfhjdmfpgl", 
    "4-5 v: vvvmv", 
    "7-9 t: tttttthttt", 
    "3-4 r: rrhjr", 
    "5-8 m: mmmxmmqmmmcssnmm", 
    "10-11 g: gbgmggggwhnggsgvgf", 
    "6-7 m: mcmpkmm", 
    "2-3 b: bzbb", 
    "5-14 w: wwwwbwwwwwwwwdsw", 
    "4-17 x: wctqhkgxmnhwlsvpx", 
    "6-9 x: jdkxxdxhx", 
    "4-6 k: hpkskbkgjkkckh", 
    "8-10 h: hhhhhhhphphhhsh", 
    "10-11 p: ppppjppppzjppppp", 
    "12-15 f: ffmphffwxwjzfsfbs", 
    "2-4 n: nnrn", 
    "5-7 b: zbrbmbrbbbbbbbbbsbb", 
    "4-9 q: qhpbmrldqpvfk", 
    "3-5 b: bbbcr", 
    "2-13 t: ztkrtfqmcdcwsx", 
    "1-2 r: rxjrnrrrrtprr", 
    "2-5 h: rhbdcbp", 
    "1-2 z: zzzz", 
    "2-5 x: xkgxxxqtghn", 
    "2-7 z: hzrtbqzbfgqzd", 
    "5-6 j: jjzjmj", 
    "9-14 q: hqtgqqsqqqqqqhnqvqqq", 
    "3-4 x: txmxcx", 
    "3-8 x: hszvqxxxzvgpjrtxtqk", 
    "4-10 p: plpzpppppp", 
    "5-6 v: dvvsbv", 
    "16-18 z: zzzzzzzzzzzzzpxzzz", 
    "1-18 t: tjtttcststttttvlttt", 
    "7-13 t: tbdttctqtxdfrtncntcl", 
    "9-10 r: rrrqrrrrrrm", 
    "3-13 n: fqgmfmtnxhnzn", 
    "3-8 l: scjrllgwmkkfgbr", 
    "6-13 t: tgttttzsftrrtqnqt", 
    "5-11 r: rdrqrprfrbrr", 
    "9-15 k: kkkkkkkkkknkkkkkhk", 
    "11-12 b: bbbbbbbbbbbb", 
    "1-4 n: nnnsn", 
    "6-7 t: xnttbttsnt", 
    "6-11 z: rzxzzzkwlnjzzrsswz", 
    "1-2 h: hrmfh", 
    "2-3 x: mxxx", 
    "10-12 k: jrqdmnxlsbkwgg", 
    "16-17 j: jjjjjjjjjjjjjjjjw", 
    "10-11 k: kkkkkkkhkgwkk", 
    "6-7 n: nnnnnrbn", 
    "9-11 q: qqqqqqqqqqq", 
    "1-4 c: cccq", 
    "13-15 p: pppppcpppkppppp", 
    "2-4 b: gbbbjdqdbz", 
    "13-17 p: pppxpbpppppphppppk", 
    "3-5 p: pplppp", 
    "4-5 q: qqqkpq", 
    "10-12 h: hhhhhhhhhhhmhhhhhhh", 
    "17-18 r: rxrrrrrrrrrrrrrrcq", 
    "4-6 p: ppppppnpp", 
    "3-10 r: rrrrrrrrrrr", 
    "2-3 b: qwrv", 
    "1-3 c: vfcgc", 
    "3-4 s: ppsrq", 
    "2-4 s: wpsvjxs", 
    "2-9 d: rjjdddcddjdd", 
    "10-11 w: hwwwnwwwwwsnslwpwwb", 
    "1-5 k: nfvnks", 
    "13-14 w: wwwwwwwwwwwwww", 
    "4-6 s: sssssks", 
    "2-6 m: mmmmmmmmmm", 
    "6-12 h: hhhhhhhhhhwvh", 
    "3-8 v: nvkvvvvrvv", 
    "9-14 x: xxxxxxxxxxxxxxxx", 
    "4-9 r: rrrxrmrkrrrvrr", 
    "2-6 x: qrpxzx", 
    "7-17 n: snnnnnzmvnsspnqlnznm", 
    "4-7 q: qqqqqqvqqnqqgq", 
    "7-8 v: vsvjvsvvvfvzv", 
    "8-12 d: kwzmmqfztrnd", 
    "2-4 n: nnjnh", 
    "5-6 f: zfwvfffvrfc", 
    "12-14 b: bcbbbztsbbbfbbbbbb", 
    "15-16 m: wmmmmzxmmmmmmmmhm", 
    "11-13 m: mwmdmmcnmmfmnmwmmm", 
    "1-3 n: znggn", 
    "8-10 x: xxxxxxpxxs", 
    "7-8 k: qkpspjkk", 
    "5-6 b: wjsbbbbmbbbq", 
    "9-13 x: xxxjxnrxhxlvpx", 
    "1-3 p: hpvp", 
    "5-6 z: qpsfzc", 
    "5-11 t: pdbtttftrtt", 
    "7-9 b: bbbbbbzbzb", 
    "6-13 g: ggggggggggggdg", 
    "8-14 h: hhhhhjhhqhhnhr", 
    "17-19 x: xxxxxxxxxzxxxxxxxxxx", 
    "5-7 s: sssssskx", 
    "5-8 p: phnjswphclpbtcwrdvp", 
    "2-14 b: jpvmgklvqjbclb", 
    "3-5 s: bkqmsvlfrhbtssmfrzlq", 
    "6-8 v: vvvvvwvv", 
    "7-8 c: mmlhlccr", 
    "11-15 f: hvvfvbpgwxfpxvfnb", 
    "5-7 n: pntnnsx", 
    "10-15 n: mlmrbrnknsncjddm", 
    "1-7 x: xzqswmkktxbvbcm", 
    "1-3 n: lndnn", 
    "7-8 d: dddmkddd", 
    "2-6 q: qggqqqzqq", 
    "3-4 z: zzszzz", 
    "14-16 r: nrrgprrxhrlrjxlr", 
    "2-14 p: pppppppppppppvp", 
    "7-10 x: trwjbxxwjqfhspxr", 
    "6-7 q: mqgpjwq", 
    "5-6 f: fffzgb", 
    "7-8 q: qqqlqtdqq", 
    "5-7 s: zsfkdss", 
    "2-4 h: thjwvg", 
    "2-8 f: zmrdffff", 
    "2-6 t: btrqbs", 
    "11-12 m: mmmmmmmmmmcm", 
    "7-10 w: wwwnwwbwwwwwwzwsw", 
    "4-6 c: khszwwltfcndcbd", 
    "12-16 v: svnxvvvrvvvvvvvvvvvv", 
    "2-9 d: dgddwddrnddscdchdd", 
    "6-8 p: dpmdzptwfcvkzbznwf", 
    "9-10 d: dddddddddvd", 
    "16-17 s: cqtsgqsbkjrldhlcs", 
    "3-14 w: dvrblqkwnnwwbww", 
    "13-18 n: nthqnkfgnnnsncnnnb", 
    "10-12 j: zlcjgjcpzjbj", 
    "10-11 r: rrrgjrrrrrfr", 
    "4-8 z: vnmzsbzrvcznhjhtn", 
    "10-11 r: rrrrrrrrrhqr", 
    "4-5 n: nhdnzd", 
    "10-14 z: nzzzzzzzzzzkzzzz", 
    "7-9 n: nzzwnnkqnn", 
    "3-4 h: hhhx", 
    "1-8 c: ccgqgmkc", 
    "4-5 w: wwdwrww", 
    "2-9 p: ncppppppfppszpw", 
    "12-18 n: nnnnnnnnnnncnnnnnnn", 
    "4-6 f: fhflfnv", 
    "16-17 x: xxxtvxxtjxxxsxxxx", 
    "12-14 h: zhsxhfhhhhhhvshpnvp", 
    "13-15 v: mvvnjgvvvvqnbvvvg", 
    "3-6 j: jgzwjpcjj", 
    "1-3 k: qcktkhnk", 
    "13-17 f: ffmfffffffffxffft", 
    "3-5 s: ssssq", 
    "8-16 m: zmzbmmmxmmcvphqc", 
    "4-5 l: llrsl", 
    "3-12 m: qmpfmmmmmbdjmmlmtpv", 
    "1-4 c: ccspqcj", 
    "3-4 l: qblll", 
    "12-16 h: mphhhhhhhhhhvhhwhkh", 
    "4-6 v: vvvrvbvnvv", 
    "12-13 x: gkxwxzwljjqxxxgwjgxx", 
    "1-5 z: zzzzzzzzz", 
    "1-14 q: ltqqqqqqqqqqqpqqqqq", 
    "8-10 g: ggmggjvghg", 
    "12-20 v: rttnvvvqvmvlnhsvvqtv", 
    "13-17 v: vvvvvvvvvvvndvvvhwvv", 
    "13-14 w: wrwwvwcwmwwwxwwwlwww", 
    "3-13 l: lltlllllllllp", 
    "7-14 d: bhcspvkdwdsmkdwnq", 
    "1-5 k: kkpkx", 
    "1-5 k: stkkk", 
    "1-10 n: ntbptczncn", 
    "5-8 m: rmffmrvcfzsqqmvvm", 
    "10-12 f: fffffffffsfff", 
    "3-4 g: kptg", 
    "4-9 f: fffffbsbf", 
    "1-2 v: dnvmd", 
    "7-16 f: ffffffdffffffhhffk", 
    "14-15 b: bzbbbbbpxbbblrp", 
    "11-15 c: chccccccccncccs", 
    "15-18 c: ccccccccccccccccctcc", 
    "17-18 v: vxvvvtcxvpvvpvmzxv", 
    "9-10 m: mmmmmmmmmmm", 
    "2-9 j: kjgfjfpkzwndlpk", 
    "3-5 r: jsqsr", 
    "8-9 v: dvvbvvvvp", 
    "8-9 r: rdrrrrrrrbjtmr", 
    "13-16 r: drddrrrmsrrdrjsr", 
    "2-5 f: fffffff", 
    "5-6 d: dddddjd", 
    "10-17 g: mgmhzjggdkxgskcsm", 
    "4-5 d: drddd", 
    "9-10 s: ssssssssst", 
    "3-5 m: nmmmgmmmmmmmmmm", 
    "2-3 b: vplpl", 
    "8-16 l: lllllblclllllllpl", 
    "12-13 w: twwwwwlwwwwfwwwwd", 
    "8-11 m: mmmmmmmsmmglm", 
    "10-16 j: jjbjwvjjjjrjdjfpj", 
    "12-13 n: nsnnnpnntncwnnn", 
    "2-4 f: vllf", 
    "1-9 f: pffffffffff", 
    "1-6 m: mmmmmmm", 
    "5-13 w: jxwwbwwrkwwwpwwn", 
    "10-12 q: qxtqqqqqqhgq", 
    "9-12 f: fffffvffmvffh", 
    "3-6 z: fjzjkz", 
    "2-8 k: pcnbqdtksnkm", 
    "8-13 l: lkxlllsnmlblclx", 
    "10-12 m: cwcnkcpdsnlm", 
    "7-9 g: gggnggghm", 
    "4-14 w: vxxwffpxrmpnwwqlr", 
    "5-7 m: wmfmmmm", 
    "7-10 m: mjmtmmjkmmmlg", 
    "9-16 l: cjzlllmllkfwlwcl", 
    "11-12 c: cccccccccccc", 
    "10-11 b: bmbfwmbbvxtvfb", 
    "7-8 v: xvvvdvvvv", 
    "5-6 l: llztlg", 
    "6-10 m: mmmmmzmmmmmmmm", 
    "3-5 b: tsbzvz", 
    "1-4 g: ggggg", 
    "5-9 b: bbbbtbbbbb", 
    "4-6 f: fffffvff", 
    "8-12 w: wwwwwwwnzwwpwwwwwww", 
    "2-3 m: mgmmmmmm", 
    "2-5 b: bbbbbbb", 
    "5-6 b: bbbbbg", 
    "3-5 f: fpfpl", 
    "6-7 b: bbbbrhbbbbfbl", 
    "16-18 x: xxxxxxxxxxxxxxxxxhxx", 
    "7-9 w: wprgxqlpw", 
    "5-9 k: qkxbkkkzp", 
    "2-7 b: bbbfbbkbl", 
    "18-19 l: lhlllllllllllllllll", 
    "4-6 z: zppzzs", 
    "3-11 j: nkcsvmhtklj", 
    "4-8 g: ggbrdwbf", 
    "10-14 s: qsssssssslsssssszss", 
    "3-4 z: zzzw", 
    "5-13 h: hhhhhthhhhhhr", 
    "11-12 m: pmmmmmmmcmmdmmgm", 
    "4-8 l: hclghxblsn", 
    "10-12 n: nnnnnnnnnhng", 
    "1-17 l: bxtlrzmsppwvvvwjp", 
    "5-12 d: xbsnsvbmdhddkwvdprw", 
    "18-19 c: lrphqjtncgftjfcjcctc", 
    "12-13 k: gqghmzhkhcskks", 
    "10-12 j: djjfvjjrjdjjjjp", 
    "3-6 c: cczcckcccccc", 
    "11-14 q: qrqzqqqqlqqqvt", 
    "16-18 k: kkkkkkkkkkkkkkkzkx", 
    "1-4 p: pptxfljp", 
    "2-7 p: pphdjqph", 
    "14-15 q: knfmcqptqwfnrqqqkm", 
    "2-3 k: zvlkn", 
    "1-6 s: ssqssxs", 
    "3-10 v: zbcbpfqrvsr", 
    "3-4 v: wcvlghhv", 
    "18-20 l: lllllllllllllllllbll", 
    "13-14 k: kkkkkkkkkkkktrk", 
    "4-11 c: lccmccccfccccjc", 
    "2-12 v: vbfdvsmtvkmvbvvvtvn", 
    "3-7 m: nmmcmmnm", 
    "13-18 k: qfqckkkkqfbtjkkkbp", 
    "8-9 k: klkkkkvkskspk", 
    "3-15 j: qnvxjqsgrpwjzkjzkp", 
    "1-4 s: qgss", 
    "16-18 w: wwwwwwwgwwwwwwwwwc", 
    "5-11 j: sjjjjjjjjnp", 
    "3-6 p: pppppmpppppppppppppp", 
    "5-12 r: rrmjskttjhmrs", 
    "4-5 f: znfkxthpffjj", 
    "1-19 z: zzzzzzzzzzzzzzzzzzbz", 
    "13-15 s: ssssssssssslpsss", 
    "4-11 c: whzhrcbhbccc", 
    "1-8 m: mmmmmmmfmmmmmmmmmmm", 
    "2-10 j: bjhbfqcjrjhwkk", 
    "15-20 k: bnqkkkmvqnfcklzdjgkk", 
    "7-9 r: hrdrrrrrprrrr", 
    "3-9 n: jrnbzzmnnxln", 
    "11-14 f: vfnpfrbzpjqffrjzf", 
    "5-6 f: ffsmpbl", 
    "2-7 z: sznjwfzs", 
    "7-8 t: ptttttttt", 
    "2-4 d: rsnd", 
    "3-4 r: cvbpvktkrr", 
    "2-3 j: jjjj", 
    "5-7 z: qnjwzxz", 
    "2-5 z: fcbmzbs", 
    "1-9 g: nhgggmggwggngf", 
    "7-10 l: xmjdbtmhrdjlltjcglxp", 
    "7-8 b: bbbbbbwjbbbbwb", 
    "2-4 h: mhfhnjl", 
    "5-14 k: hqkrkvkzkhrknzjphc", 
    "7-12 b: bbgbbbbnxtcgbbb", 
    "12-18 t: tmtxtkpmqtvmttwcfgn", 
    "2-16 b: lbbnbxfrbtjltvpnnbmn", 
    "1-5 c: gvcchczcckcccnc", 
    "10-15 d: kngtvjwdvdktvdq", 
    "8-13 g: ggggcggggggggnlggt", 
    "5-7 n: nnnnnnn", 
    "2-4 n: nnfnxl", 
    "4-5 h: fbmdghjth", 
    "14-18 q: qqqqqqqqqqqqqqqqqhqq", 
    "7-13 l: llgldxlxrkklbc", 
    "15-17 w: twwwxwqwwwwwwcfww", 
    "16-19 f: fffffmdrbfffwfffnnrf", 
    "2-14 m: lmhhfmsjrrtgrm", 
    "7-11 v: hrvtwbvbwqvb", 
    "4-7 r: rczrrrrr", 
    "12-13 h: hphhhmhhhhnqh", 
    "7-12 x: xrqdxpxhfqrtgxh", 
    "5-7 t: fdnrnktrgtkvckpxbth", 
    "3-4 v: kvvr", 
    "1-2 g: pggxggfwcwzqpdbr", 
    "9-14 t: ttttttttdtttttttt", 
    "3-4 v: rvvlzwxxmwvv", 
    "7-9 l: llllllflmllll", 
    "3-5 z: mzfrh", 
    "3-4 n: znmlnnwn", 
    "5-12 j: mjrhqkdtsjpmv", 
    "1-7 p: pppjntrrnzzdtv", 
    "3-4 k: prmx", 
    "3-5 c: ctccc", 
    "3-14 n: nnlxnnnsnnnnnxnnnnnn", 
    "2-5 m: mtmmmmm", 
    "2-3 j: wjjj", 
    "9-13 r: nbtrwwkrrhqpvqmgjrxf", 
    "2-13 r: lmfwxcxrcvxxrhd", 
    "11-15 h: hhhhhhhhhhhhhhvh", 
    "1-6 l: hplllslzlfl", 
    "2-13 v: xvvvctvxwcvmmwm", 
    "3-10 s: sxpssssssmkss", 
    "1-3 t: cltdrntxw", 
    "1-2 b: sndbw", 
    "1-5 r: prxrrrr", 
    "4-7 f: gffffgjf", 
    "8-10 k: nkkcrkkkkk", 
    "2-4 s: sssbml", 
    "6-9 f: pfffzfffwwfpfffk", 
    "5-7 l: mxlllvl", 
    "10-13 d: dddddddddcddkdddd", 
    "1-8 q: qqnqqqqqqqqq", 
    "2-6 v: nvzvfv", 
    "13-15 r: rrnrrrvrrncrrrhr", 
    "2-5 s: jhsss", 
    "10-15 v: vvvvvvvvvmvvvvvv", 
    "2-4 n: cnpvsknzhqwpc", 
    "2-8 z: ctxqmpzd", 
    "8-9 x: txbtbrzxxxvx", 
    "3-12 j: jjjjjjjjjjjjj", 
    "5-6 v: vqdsvv", 
    "4-5 c: ccclc", 
    "6-8 m: dptrqlwmfcbmskjw", 
    "4-14 s: sxssscssstsssssssbss", 
    "3-6 q: xhqwqfpprqm", 
    "14-15 f: ffffmfffffffffkbffff", 
    "3-12 f: msjmmfrgrlzvtss", 
    "4-15 c: mwwcfkcchhcpkhg", 
    "2-3 v: hvpnbcvxgqn", 
    "16-17 d: cddssdpzdjdfkddht", 
    "12-13 v: vnvvvvsvvvvvr", 
    "4-5 r: rrrrv", 
    "7-9 g: zgzvgfgtg", 
    "3-4 w: zwwh", 
    "16-17 h: gvhgvhhhhcgkkdqhhhp", 
    "10-11 b: bbbbbbbbrzzbbbb", 
    "13-14 v: vvvvvvvvvvvvbv", 
    "10-17 k: dhkczrpkckdbjthkkb", 
    "6-7 q: qqqqqdkqqqq", 
    "10-14 b: prnmgmmtjvjvfbnbbvg", 
    "8-13 w: wxwswrqbwmmwwgw", 
    "14-15 f: ffffffffffcffzff", 
    "3-8 l: llxltlll", 
    "3-18 b: brbpdcgjcmwqlvkncn", 
    "2-3 m: xpmmm", 
    "6-7 r: rqmcgkktsrrkrflgftg", 
    "3-15 s: wpcztpfsfpskfbsczm", 
    "1-4 c: cccccc", 
    "11-15 c: gcckqcgcccccncccccc", 
    "1-3 c: cscjpjfcdbpfpbrvv", 
    "18-19 x: xxzxmxjwxxxjhxxcdhf", 
    "6-8 j: jjspjsppjzqhvrgdvdmj", 
    "4-5 f: swffn", 
    "11-12 m: dmfmgmwmmhkw", 
    "15-18 m: mmmmmmmmmmmmmmmmmmm", 
    "7-8 l: llvlllllll", 
    "3-4 j: jwgflnp", 
    "1-7 v: dvvvvvvvvv", 
    "5-7 l: lwmfxbvx", 
    "3-10 f: flnqlvbfgff", 
    "2-12 s: stssbsssbssskstsfs", 
    "10-15 g: rjnsggtjgpqxshbg", 
    "7-8 j: jjjjjjjj", 
    "1-3 b: nbbbb", 
    "5-13 b: bbbbbbbbbbbbbbbb", 
    "14-17 h: hxhhhnhkhghhhhhhhhjz", 
    "9-10 b: wbbbbbbbvg", 
    "1-7 d: ddddwddddddddd", 
    "5-9 b: jgdkhbdbphbs", 
    "10-15 w: mwgqmhjzwwnvfwwwm", 
    "7-8 h: thhhhhhhhhhrfcphh", 
    "3-7 z: khczzxz", 
    "4-6 l: lllhlh", 
    "2-5 m: psmmm", 
    "4-6 x: lrchzhqxxrrxvr", 
    "13-16 q: qqqhjqqcqqqlkbqq", 
    "3-9 f: ffffpffffff", 
    "5-6 k: kkkkgkkk", 
    "3-4 v: vvll", 
    "5-9 x: cpbvxwxfhpxrxcxxnq", 
    "8-9 p: pxppvnlpp", 
    "1-2 l: llxl", 
    "13-14 h: vhhhmhhhhhvsmhhh", 
    "12-14 b: bbbbbbrbbbngbbbkbbb", 
    "10-11 r: rxmdszrtrrj", 
    "4-5 n: nnnnnn", 
    "2-4 x: xsnx", 
    "11-14 z: wqzpjzzzzpzzlczzsj", 
    "1-8 d: lddddddd", 
    "4-6 v: cvvkfvv", 
    "6-17 f: ffgxddfflfgfffxbf", 
    "1-7 x: bzvxhxr", 
    "4-16 w: wwwjwwwwwwwwwwwhww", 
    "15-17 l: lllllllllllllllll", 
    "1-19 v: vnbzvvjvfdvvvvvvvmt", 
    "2-5 t: tpttzs", 
    "12-16 f: ffffflfffffsffftfff", 
    "5-10 g: hbggtxxgvkfg", 
    "7-12 s: jssssgtjfcrsqsx", 
    "1-4 p: pppg", 
    "4-5 w: wrwbw", 
    "7-9 r: rxrqnxqrrtrfrrr", 
    "8-9 b: bbbbbbbbbbbbbbkb", 
    "5-7 d: ddddddddd", 
    "1-4 x: xxbfxxxjx", 
    "9-14 w: svwwnzjtqczwww", 
    "15-16 f: ffffffffffffffbff", 
    "8-9 h: hhhhhhhhh", 
    "11-12 g: ggggggggggtmg", 
    "15-16 g: gggggggggggggpxgggg", 
    "9-12 d: lctfgcddhddbfsxrpl", 
    "8-9 w: fszlzwzwwwdwzqf", 
    "10-16 v: vlvvvflvvmdvkvvvvvs", 
    "9-11 x: xxxbxxxxdkx", 
    "9-10 n: nnnnnnnnnt", 
    "10-15 b: zbwzkjvqbtbnbkbb", 
    "13-18 w: wwwgwwwwwwwwswwwwww", 
    "3-4 n: ndgg", 
    "14-17 k: nkmkdssxzkkkfkkkqflk", 
    "2-13 z: prmtcfxgldwcpr", 
    "10-15 f: xfffffzfwpffffhpffg", 
    "6-12 t: tttttttttttz", 
    "1-3 b: bbbbbb", 
    "2-4 q: qqqhqqq", 
    "4-8 w: lqzqwwzwpcwwwlr", 
    "15-16 f: fffgrffffffffvfc", 
    "12-13 p: pjmpppppppppv", 
    "6-14 h: zhgxlgshnfdhrl", 
    "17-19 d: qgwtdjcvzdpsphppdmds", 
    "15-16 f: xfffffffffffcrfj", 
    "5-6 x: xzxgxxxn", 
    "4-7 f: fljffdfbrxklbf", 
    "8-9 t: btnwxkrtt", 
    "9-10 g: bggsggggfgpgg", 
    "2-4 p: ggpsbgdx", 
    "2-6 c: cxscckkc", 
    "3-11 q: qplqztgmdjqbqvqg", 
    "5-9 g: ggggtgzggglgdg", 
    "8-16 c: ccccccccccccccccccc", 
    "1-5 d: dhdddddd", 
    "3-5 c: qjcdz", 
    "3-6 b: bwbbbbbhbbzbbbb", 
    "1-4 f: qfffff", 
    "9-11 l: tllxbrfzrzl", 
    "3-4 v: vvvv", 
    "3-7 z: dzzmpbvvw", 
    "11-16 r: rrrzrrrvrrzwrrrr", 
    "4-5 z: kzqvzzz", 
    "3-9 n: rtnnpmnnsnncnqdnnn", 
    "5-7 t: htmghwktpdttt", 
    "5-6 s: sssssss", 
    "1-4 r: crpwcrrrrr", 
    "4-9 t: tttjttttttt", 
    "2-3 t: mrgt", 
    "13-17 x: xxxxxxxxxrxxmxxgv", 
    "2-11 m: mmmmmmvmmqmmcljbkt", 
    "1-3 l: lwlg", 
    "5-7 z: zzzzzzkz", 
    "3-6 f: wdfwlk", 
    "4-6 v: hjfvcv", 
    "1-3 h: hhdhchjvh", 
    "3-12 m: hlkbjrmjbkps", 
    "5-9 t: ttthqdchttvjk", 
    "9-11 p: wpzjpbpppnpqwpk", 
    "4-5 v: lvvkwv", 
    "12-15 k: kzkkkkkkkkkbkkkmkkk", 
    "4-8 h: hnhfhwhslhhhhdhg", 
    "1-7 d: dddddddd", 
    "18-19 g: gggggggggggkggggggx", 
    "4-10 v: vvvbvvvvvnvvjv", 
    "5-9 v: lvtqgmvmvvlv", 
    "2-3 d: pdkrdzdlvdn", 
    "1-12 s: sssssssssschs", 
    "7-9 c: ccmkscwccwql", 
    "3-5 s: sksdr", 
    "6-7 p: pppptjgppp", 
    "13-14 m: mmmmmmmmmmmmmwm", 
    "3-5 j: jjdjfj", 
    "2-5 f: dbxfrv", 
    "1-11 w: wwzdqntxzwt", 
    "5-9 b: bbjwffgmbmxb", 
    "12-13 b: bnbfblrbznqbg", 
    "1-4 s: vlbsdkslvk", 
    "1-12 k: kkkkkkkkkskkkkkkks", 
    "3-4 f: ffcg", 
    "4-19 w: zlfvsqxthvvtmwrmrwj", 
    "6-13 r: bsnqgqrsrrjjnthdr", 
    "1-5 t: bctbqbtft", 
    "4-7 v: vvvvvvqvvv", 
    "2-5 n: jnqnn", 
    "2-4 r: rrrr", 
    "11-13 w: fbwmwjgvjlnpwvwmqf", 
    "12-13 v: vlvskvkjrlsdv", 
    "17-18 s: sssssssssssssssshsss", 
    "7-18 q: qtqhbqxkcqqxnqwlqdqq", 
    "5-9 q: jfqrdgtqpqs", 
    "7-13 j: jjjjjjmjjjjhgjjjjjjj", 
    "1-3 z: gzzzl", 
    "9-10 g: gbcgggnggg", 
    "1-2 d: ljdddddbdddddd", 
    "2-4 t: ntwf", 
    "8-13 p: ppphpppcpppppppppp", 
    "7-11 b: bbkfbbbbbbdbfb", 
    "5-7 z: dtgtzzzkxdp", 
    "2-3 w: vwtbc", 
    "11-12 s: bssvsssssssnsssbs", 
    "8-12 w: wqwpwcxwgpww", 
    "8-9 p: mqpcvlspwx", 
    "2-6 w: wwskwkwww", 
    "6-17 w: gbwwnwrdvnnpfxhgl", 
    "12-13 h: hhhhhhhhhhhht", 
    "14-15 b: bkbbbbxfrzbbtbbbb", 
    "1-11 j: jvjjjjjjjjgfj", 
    "1-11 k: tkkkkkkkkkpk", 
    "12-16 q: frqhkwxwjbqqqqqq", 
    "7-10 f: fjkvvhffrhfgfrfffl", 
    "14-15 n: kfnnnvsvnhqncqm", 
    "4-5 v: vvvhx", 
    "3-10 r: qwrscrfwgtntntzsvnhg", 
    "2-11 r: wfdmkrcbgzbrzs", 
    "4-12 p: smwpnnjvrpvzmpcfprw", 
    "5-11 k: kkkklkkfkckw", 
    "2-4 g: gbgq", 
    "4-6 d: pdvsvkddd", 
    "1-5 h: hxhhthhhbbhlshhwh", 
    "10-13 n: knnnnnnnnnnnnnnpnnnx", 
    "3-15 m: mmmmmmmsmmmmmmnmmm", 
    "3-6 d: bddvdd", 
    "11-12 p: pqppnmlpppvp", 
    "1-3 w: swwvdwqwwwc", 
    "11-15 d: dcxdddddwtldddddrpnd", 
    "5-10 m: mmmmxmmmmxmm", 
    "4-6 g: qgggtgggg", 
    "8-12 h: zpvzbbhsstnv", 
    "5-6 x: nxxxvxxx", 
    "2-8 h: hhpqhhhhzh", 
    "14-17 v: gzvvwvvvvvvvvnvmpv", 
    "2-14 h: hxhhhrhhhhhhhmhhhhh", 
    "11-13 g: sggggggggggvzvg", 
    "1-3 d: dtdd", 
    "1-11 g: gggggmgggggggggs", 
    "10-11 j: bbmwbjhgnjjjwp", 
    "5-12 g: grtgxgnpsgwvnkd", 
    "6-8 p: lpvspswp", 
    "6-9 q: gfqfhrqccljrr", 
    "12-13 g: lsscgbnmxpggzj", 
    "6-9 x: kjvxpzxfdxmwcx", 
    "2-4 c: gcnr", 
    "1-5 z: zzzzz", 
    "7-19 c: lcjvqcmldcvwgnpjcsc", 
    "1-3 p: pppmpg", 
    "11-17 v: vvvvvvvvvvvvvvvvsvvv", 
    "4-5 l: llwwl", 
    "2-6 n: nnnhnn", 
    "3-5 c: cgxcp", 
    "2-5 p: plpptpphp", 
    "4-7 b: bbbbbbw", 
    "3-12 r: rcrfzgzwxcbrxfpd", 
    "16-20 h: hzdhhjphnmmtrftftzsh", 
    "6-7 g: gnqbvgjfxt", 
    "4-5 d: ddddf", 
    "4-9 w: wwwwwwgwnwwwwwwwlww", 
    "11-13 q: qqqqjqfcqrsqzqqq", 
    "4-5 l: nltls", 
    "7-10 n: nnwnnnnnnnjndf", 
    "3-4 s: xsnqs", 
    "13-14 c: ccccccckzccccscc", 
    "5-6 z: zzzzzczz", 
    "3-5 j: vjjkjcc", 
    "5-6 x: xnsxvxxl", 
    "13-15 l: llllllllllllllh", 
    "7-8 b: jmbgbvcrb", 
    "1-4 g: gbgggg", 
    "9-11 z: zqdlwbzjtsz", 
    "1-4 x: xxxwbxx", 
    "8-10 w: wwlwwwwwww", 
    "4-5 z: zchzztz", 
    "1-2 m: ckjdmmm", 
    "17-18 j: mhjzljjjjnzjjjjblpj", 
    "3-9 b: bswsbvdld", 
    "3-9 m: fsmmcfvlmbztcxkqs", 
    "16-17 c: ccccccccncccccchc", 
    "7-14 z: zzzzzzzzzzczzzzzd", 
    "4-16 z: zzdwzzzkzzzzzzztzzzz", 
    "11-18 p: ppppppppqppppppppl", 
    "2-3 f: zfrbzsh", 
    "2-9 w: tllwlmbkwq", 
    "1-7 h: hhhhhhhhhb", 
    "11-19 p: hmglpprgflrqmpxjbpw", 
    "10-13 p: rppppppppdppfpp", 
    "1-4 g: xgkgkp", 
    "4-6 k: zkkkshvkk", 
    "2-4 n: kclktpqlmmpwmlw", 
    "8-9 b: qbbbbvbtqbbj", 
    "3-4 w: wwwj", 
    "1-8 w: wqwwwjww", 
    "6-7 v: vvvvvkvv", 
    "4-6 f: nrjwffh", 
    "4-5 h: fhjzl", 
    "5-6 b: bbbbfbbbbbbb", 
    "4-7 v: vvnddvvwcxrvvfkvhv", 
    "4-12 t: sbktxtktxlvcpltntc", 
    "11-13 x: xvrtdxxxxtrxfxvq", 
    "3-4 l: llllll", 
    "7-8 h: hhhhhhhgh", 
    "1-10 z: zzzzzbzzzzzfzz", 
    "3-7 w: wwwwwwww", 
    "18-19 d: ddddddddddddvdddddx", 
    "5-6 l: pllkmsplcllllblll", 
    "7-12 g: ggggggjgggggggk", 
    "10-11 p: prppbcpppzpppp", 
    "4-5 v: kjgfvrt", 
    "3-8 k: kvkkkzkkrk", 
    "6-13 p: cchphppnshjpgvh", 
    "3-6 j: jfhjjlj", 
    "7-11 v: vgvbjwvvrgcvvvcv", 
    "5-12 b: bbbbdbbbbbbmbb", 
    "2-4 b: cxbb", 
    "8-13 h: hhhhhhhhhhhhhhx", 
    "6-13 w: wcdnrrhwzzwpr", 
    "1-4 x: hxgp", 
    "9-17 t: xttgrkxptthzljhwl", 
    "10-11 w: sqhzqtswsww", 
    "2-3 b: cbrbbpbb", 
    "1-6 m: mcwmmlxn", 
    "9-11 b: qbcjjjstpslqzwbkbp", 
    "12-14 n: nnnbxnnzhfvqrclnj", 
    "6-12 z: zzzzzvzzzzzfz", 
    "17-18 j: jjjjjjjjjjjjjjjjdjj", 
    "1-3 k: mkbk", 
    "4-6 j: znrjhcjjlj", 
    "6-8 b: hmsbbkcwfvbbnb", 
    "2-8 w: wwwwwwwwf", 
    "4-6 v: pvvqrp", 
    "8-10 h: mbhzhhhhhkhhhhhhh", 
    "5-6 l: lllllmll", 
    "1-11 p: nppppppppppp", 
    "11-13 b: bbbbbbbbxbxbb", 
    "4-6 l: llljll", 
    "1-4 x: xxxxx", 
    "2-6 f: fffffm", 
    "8-13 k: rnqxkkjkmkkqskkkk", 
    "3-4 w: dqdsbb", 
    "6-7 c: cccvctzcczmcccb", 
    "10-13 k: kkkkkkklmzgkk", 
    "9-12 d: ddddddddcddddddd", 
    "7-9 v: frvvvgvftksnvpvw", 
    "13-15 d: djdddddddddddddddd", 
    "6-8 t: tttttftrt", 
    "5-6 w: wlwwwrww", 
    "5-8 m: mmmpnpnpcmj", 
    "2-5 p: kpkppp", 
    "10-11 d: xtlgxpfjdczm", 
    "6-7 v: vvnvrvvvvb", 
    "8-10 g: ggggggglvgggg", 
    "8-15 g: kngggxggggggggg", 
    "1-11 n: ntngqrhnnrxjnnnnwxnn", 
    "2-5 k: kckkbpkvxhkz", 
    "1-4 j: jtjjvjjjj", 
    "15-16 x: xxxxxxxxxxxxxxxdx", 
    "7-8 r: rrrrrzxp", 
    "5-13 m: zzrqmklcmhdmrzfz", 
    "6-14 h: hhhhhphhhhhhhhh", 
    "4-6 c: brchqcqwcwcthccc", 
    "16-17 v: zmvqhnjbhvvrbrpvv", 
    "9-12 p: pppppqvpkppsnppp", 
    "1-4 d: mddnd", 
    "3-4 s: sssj", 
    "2-3 d: kmbsdpqkhj", 
    "11-15 f: ffffftxbjdfffcnfcf", 
    "8-15 t: tgptpthtttqctbt", 
    "1-3 l: wfklr", 
    "14-16 m: trxpshgmzpwmsmcmzgwk", 
    "5-10 m: jdhjmlqrqmmpfqsj", 
    "3-10 t: tctnlmvvtt", 
    "9-11 c: vxzmqpcxgnc", 
    "4-5 z: fzszzbzhsfxcmh", 
    "1-3 d: dddddd", 
    "3-9 j: mhjkjljjjz", 
    "14-17 n: nnnnnnnnnnnnnnnnh", 
    "4-5 l: hjspb", 
    "4-5 z: bmjvtmbq", 
    "4-5 v: vgvvvvv", 
    "3-8 x: mgzfmbdxxgm", 
    "5-6 t: tdxxqj", 
    "3-10 m: mmlbmbrlmmmmb", 
    "12-13 b: bbbbbbbbbbbztbbbbb", 
    "4-7 d: dtbdbzdsnkgbvsswdhww", 
    "7-8 c: cckccccg", 
    "1-6 r: jzqrrrdrtsrlrrvmr", 
    "4-5 x: xxxqh", 
    "3-6 v: vvvvvcv", 
    "6-8 x: xbxxxxbxfgxcnxgb", 
    "10-11 n: jnbnnnnnnbnwdnnn", 
    "5-8 h: hhhhvhbh", 
    "3-8 x: xfgksplxx", 
    "4-9 x: xxxxxcxxhxxx", 
    "4-7 l: lsplglldx", 
    "12-15 d: xxcqmmwdddzttkdldrml", 
    "7-8 w: wwhnlwfw", 
    "4-5 t: nvtdt", 
    "3-4 q: qhqr", 
    "3-7 j: jjjjjjjjhj", 
    "8-10 x: xlxxpxxsxxxxdx", 
    "3-8 k: kflkcvvthxkkkczlh", 
    "6-7 v: kfvlgvn", 
    "16-17 f: ffffffffffffffffrf", 
    "6-7 z: zzczzhfvnz", 
    "1-4 f: fsfs", 
    "6-7 b: pqbsmfsv", 
    "2-3 n: nlbn", 
    "4-5 b: bpbdbbbbnsbbbxb", 
    "4-12 n: csgndnqnsjjvxn", 
    "13-16 r: rrrrrrzrrrrrqrrrrrr", 
    "13-15 t: ttttttttttttttqtt", 
    "1-8 q: qqqtqtql", 
    "6-10 t: ttttttttzwtttttt", 
    "4-10 v: vvvsvvvvvqvvvv", 
    "3-5 w: wwwtl", 
    "3-8 z: qgkszmzkp", 
    "4-6 w: wwwvwgww", 
    "13-15 v: nvvvvvvvvdzvvvr", 
    "10-11 v: gvmwdpgpvvb", 
    "4-11 g: gggjgggvmgggg", 
    "1-6 z: fzzzzzzzzz", 
    "6-9 r: dmrrhxrrbrr", 
    "1-2 t: tmttv", 
    "5-13 d: jxvctbwmkpbqd", 
    "6-8 w: wbwlhwdw", 
    "17-18 x: qdzkpnhbdxcxsfsxkx", 
    "3-5 w: wwwww", 
    "2-3 n: xnjnl", 
    "2-9 f: ffffxffff", 
    "5-6 g: sgggjzg", 
    "7-10 h: zlvnhhrhlz", 
    "10-11 h: hhhhhhrhhhhhh", 
    "6-7 k: kpvtkkkk", 
    "9-17 b: vbbwhjntdzhbbhmbbq", 
    "6-8 h: hlhhhhrdjncphc" 
    ];

let validPasswordCounter = 0;

let structuredObjectList = getStructuredObject(inputList);

for (const passwordObject of structuredObjectList) {
    let validity = checkPassword(passwordObject)
    if (validity) {
        validPasswordCounter++
    }
}

console.log(validPasswordCounter);

/**
 * Function for structuring the password and the rules in a single object, 
 * return everythin in an array
 * @param inputList Array of all input 
 * @returns structuredObjectList
 */
function getStructuredObject(inputList) {
    let minRegex = /[^-]*/;
    let maxRegex = /(?<=\-)(.*?)(?=\ )/;
    let charRegex = /(?<=\ )(.*?)(?=\:)/;
    let passwordRegex = /[^ ]+$/;

    let structuredObjectList = []
    for (const input of inputList) {
        let localObject = {
            min: "",
            max: "",
            char: "",
            password: ""
        }
        let minResult = input.match(minRegex);
        let maxResult = input.match(maxRegex);
        let charResult = input.match(charRegex);
        let passwordResult = input.match(passwordRegex);

        localObject.min = minResult ? minResult[0] : "";
        localObject.max = maxResult ? maxResult[0] : "";
        localObject.char = charResult ? charResult[0] : "";
        localObject.password = passwordResult ? passwordResult[0] : "";

        structuredObjectList.push(localObject);
    }
    return structuredObjectList
}

/**
 * Function to check passwordObject for validity
 * @param passwordObject containing password and rules
 * @returns boolean id password is valid
 */
function checkPassword(passwordObject) {
    let char1 = passwordObject.password.charAt(parseInt(passwordObject.min)-1);
    let char2 = passwordObject.password.charAt(parseInt(passwordObject.max)-1);
    if ((char1 === passwordObject.char) != (char2 === passwordObject.char)) {
        return true
    } else {
        return false
    }
}

/**
 * @deprecated
 * Function to check passwordObject for validity
 * @param passwordObject containing password and rules
 * @returns boolean id password is valid
 */
function checkPasswordOld(passwordObject) {
    let occurence = (passwordObject.password.match(new RegExp(passwordObject.char, "g")) || []).length;
    if (parseInt(occurence) >= parseInt(passwordObject.min) && parseInt(occurence) <= parseInt(passwordObject.max)) {
        return true;
    } else {
        return false;
    }
}