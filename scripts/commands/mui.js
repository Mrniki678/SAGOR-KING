/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "magi"
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["সেক্সি মাগির পিক"
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/6QdGygsm/E5v-OWFOVIAMTXg-J.jpg",
"https://i.postimg.cc/V626gFcC/E72-BU9k-Vo-AEIq5-F.jpg",
"https://i.postimg.cc/5yvtRFxk/E72-BU9n-Vk-AAm-QHd.jpg",
"https://i.postimg.cc/258VS6wV/E72-BU-u-UYAMPjpl.jpg",
"https://i.postimg.cc/j5D2yFBT/E72-BU-w-UUAIs-A-R.jpg",
"https://i.postimg.cc/rytzm7SC/E82-Of-JXUc-AEGPNr.jpg",
"https://i.postimg.cc/J4V0BKxw/E82-Of-JZVg-AI1rf6.jpg",
"https://i.postimg.cc/JnXmrV9s/E865-Drh-VEA4-Hy4-L.jpg",
"https://i.postimg.cc/fTp35DDP/E8bg-Cq-FVUA0meb5.jpg",
"https://i.postimg.cc/cC5vpNYr/E8-Gvuvt-Vc-AMBiv-A.jpg",
"https://i.postimg.cc/6qQ7bQ8k/E8-Gvuv-ZUc-A8v-do.jpg",
"https://i.postimg.cc/Dy8Jq8ks/E8-Gvuv-ZVk-Ac7j5-N.jpg",
"https://i.postimg.cc/Cx8RQXKx/E8-Gvuv-ZVo-AQB8bc.jpg",
"https://i.postimg.cc/Y2XLGQVM/E8-Lrtu-HUUAIBusl.jpg",
"https://i.postimg.cc/8CV7Q4FB/E8mrcng-VEAMk-Y-2.jpg",
"https://i.postimg.cc/B6SttvBj/E8-MVVk-PVc-AEt-IFz.jpg",
"https://i.postimg.cc/85ZcvVZt/E8r-Rk6w-VUAArw9-D.jpg",
"https://i.postimg.cc/7YGh5d0n/E8-Wf-Zp6-Vc-AIJBI.jpg",
"https://i.postimg.cc/B6pLCFn5/E8-4tch-XIAQFLRx.jpg",
"https://i.postimg.cc/LsBnHPLd/E8-4t-Zo-WYAYLBhh.jpg",
"https://i.postimg.cc/Hswx05vr/E91-f-B3-Vc-AQHy-Sc.jpg",
"https://i.postimg.cc/T3TPtwBC/E91-f-B9-VQAQnua5.jpg",
"https://i.postimg.cc/Dw5wHhTF/E91-f-Ep-Vk-AEZVU.jpg",
"https://i.postimg.cc/cJHLNzx3/E91-f-Er-VUAIqp-O.jpg",
"https://i.postimg.cc/kGxnc3c0/E99pfbs-Vg-AQd5kt.jpg",
"https://i.postimg.cc/mgdTVSYg/E99pfbs-Vk-AU17x2.jpg",
"https://i.postimg.cc/RCfV9KBg/E99pfbt-Vg-AMK5g.jpg",
"https://i.postimg.cc/tJ7Ttmfy/E9bx-KMa-Uc-AAe6r-F.jpg",
"https://i.postimg.cc/hvwGC1Wm/E9e-G1-T8-Vg-AIwj-AA.jpg",
"https://i.postimg.cc/bN7JkgRc/E9e-G1-T9-UYAc-FM5-G.jpg",
"https://i.postimg.cc/L40h62Ys/E9e-PZ-YUYAMt-ZAK.jpg",
"https://i.postimg.cc/13DzHFWg/E9e-PZ-ZVIAU-qpm.jpg",
"https://i.postimg.cc/d0BVMYcw/E9g7q-TCVc-Ag53h2.jpg",
"https://i.postimg.cc/tJ1qVnZ4/E9-H4-Tff-VEAAj-D0w.jpg",
"https://i.postimg.cc/QCRXgN1k/E9-H4-Tfg-VEAk-WZjm.jpg",
"https://i.postimg.cc/YSkCySVd/E9i-Ix9l-Vo-Ac-N0-Al.jpg",
"https://i.postimg.cc/NMjfBzQT/E9ml-GAk-VUAMCun-X.jpg",
"https://i.postimg.cc/k4YM4v5H/E9ml-GAo-VEAAk-Aq.jpg",
"https://i.postimg.cc/L476FDwY/E9ro-PZIUUAIc-Kaz.jpg",
"https://i.postimg.cc/TYD2dmvk/E9ro-PZJVo-AQh5j-Y.jpg",
"https://i.postimg.cc/9QHmrMWc/E9ro-PZKVk-AE5754.jpg",
"https://i.postimg.cc/5txfSRYG/E9ro-PZz-VIAIWh-Xb.jpg",
"https://i.postimg.cc/7Z1x7k60/E9z-UZTPVc-AIbh-T1.jpg",
"https://i.postimg.cc/bJr8KSR9/E9z-UZTPVIAMto-E0.jpg",
"https://i.postimg.cc/1zJsCrDz/E9z-UZTSVIAAVW26.jpg",
"https://i.postimg.cc/RFY99Cs5/E9z-UZTSVQAUPh-Yi.jpg",
"https://i.postimg.cc/YqMkHP8S/EK9-Aa1-KUEAERluy.jpg",
"https://i.postimg.cc/BZxsR3Ty/EK9-Aazd-U4-AAn-RWe.jpg",
"https://i.postimg.cc/dV0Y7TbP/EK9-Aazj-VUAE0-GQ.jpg",
"https://i.postimg.cc/9Q06XH9c/f-b-Mpjec-FRr-M-3-W.jpg",
"https://i.postimg.cc/NFQnW3Yq/fxw-Wt-XHtl-Tr-Fh-Qyw.jpg",
"https://i.postimg.cc/D05NFxyW/hbay-UWXCIHAJYx-WR.jpg",
"https://i.postimg.cc/2StPV9dh/HQlt7u-z-AJJFo-e.jpg",
"https://i.postimg.cc/9MdSgW6Y/ht-D3-Wi-JQM0md-Fc-Ig.jpg",
"https://i.postimg.cc/L6CWbQbw/q1o-DN4-IN-Zd6-K5s7.jpg",
"https://i.postimg.cc/1th2Kgjz/Vbn0-ZPWBu-CB05-j-J.jpg",
"https://i.postimg.cc/J7Qvbzc1/zpbi-Yu-P1-WBTUrc.jpg",


  
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」\n\n⊰᯽⊱┈────╌❊╌────┈⊰᯽⊱\n┏•━•━•━ ◎ ━•━•━•┓
🔥 𝗕𝗢𝗧  𝗢𝗪𝗡𝗘𝗥🔥
┗•━•━•━ ◎ ━•━•━•┛\n╭────────────╮
✜ 𝗦𝗔𝗚𝗢𝗥 𝗜𝗦𝗟𝗔𝗠 ✜
╰────────────╯`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
