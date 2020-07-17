import React from "react";
import {Route, IndexRoute, browserHistory} from "react-router";
import {Builder} from "@datawheel/canon-cms";
import {Login, SignUp} from "@datawheel/canon-core";

import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import Loading from "./components/Loading";
import Explore from "./pages/Explore/Explore";
import About from "./pages/About/About";
import Data from "./pages/Data/Data";
import Error from "./pages/Error/Error";
import ECIExplorer from "./pages/ECIExplorer/ECIExplorer";
import Covid from "./pages/Covid/Covid";

/** */
export default function RouteCreate() {

  /** */
  function genRandId(path) {
    const geoCandidates = ["mex", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
    // Top 20 products
    const productCandidates = [178708, 178703, 168517, 168471, 52710, 178704, 168528, 168542, 168544, 168536, 168529, 189018, 168473, 209401, 73926, 168409, 168504, 168481, 168414, 52711];
    // top 100 institutions with the highest number of enrolled students 2017-2019
    const institutionCandidates = [317, 725, 82, 1101, 1428, 1244, 456, 4, 314, 37, 1570, 814, 313, 248, 953, 442, 1519, 640, 231, 6, 1492, 114, 1396, 256, 683, 1467, 222, 995, 1725, 568, 263, 169, 54, 132, 1351, 504, 7, 1198, 46, 345, 323, 1038, 400, 1680, 1460, 1554, 1603, 2, 41, 785, 524, 24, 857, 1234, 1483, 304, 36, 798, 3, 849, 1426, 1138, 14, 188, 766, 1405, 38, 1091, 788, 79, 577, 134, 824, 135, 320, 835, 896, 1323, 489, 159, 1992, 1520, 1, 1518, 1319, 844, 2242, 261, 116, 283, 545, 851, 597, 1633, 92, 1199, 800, 1129, 257, 3047];
    const industryCandidates = ["SCCC", "31CC", "336C", "3363", "2211", "5511", "517C", "5221", "7225", "331C", "3121", "3251", "522C", "311C", "4311", "3261", "5613", "3118", "3241", "4621", "5171", "3119", "3115", "3254", "4342", "3112", "4611", "325C", "48CC", "5222", "3256", "7211", "3312", "3116", "4312", "3273", "2362", "5224", "5241", "312C", "4684", "2361", "3252", "4622", "332C", "4841", "6113", "322C", "4671", "4811", "3152", "6111", "3222", "3111", "5151", "2371", "2373", "8111", "3352", "3359", "333C", "4852", "212C", "4641", "3113", "327C", "3311", "4681", "4354", "3329", "3323", "4842", "56CC", "3231", "3114", "5413", "21CC", "46CC", "4632", "5616", "8124", "3314", "3262", "3162", "5611", "335C", "3399", "2111", "3344", "3255", "334C", "3334", "326C", "4661", "3259", "4682", "3391", "4353", "5312", "5242", "5418", "3221", "4331", "4885", "3353", "3371", "3339", "3272", "5223", "3271", "3328", "5415", "8113", "6221", "5231", "3327", "5211", "4851", "43CC", "237C", "7132", "5121", "485C", "4662", "3326", "5111", "7139", "52CC", "315C", "4341", "5614", "5411", "3132", "6211", "3331", "8121", "5416", "313C", "431C", "3324", "5412", "2372", "3342", "4343", "5615", "1141", "4633", "4653", "222C", "4612", "22CC", "4352", "3231", "481C", "3315", "3365", "7224", "488C", "5313", "3161", "5179", "5324", "339C", "462C", "7223", "5311", "5419", "23CC", "512C", "6215", "4321", "4651", "3364", "4883", "51CC", "3117", "3343", "8114", "4652", "8131", "3253", "6212", "3279", "468C", "3313", "2122", "4659", "561C", "484C", "3321", "622C", "337C", "611C", "3362", "4332", "3372", "4334", "5619", "8112", "4361", "53CC", "3219", "4631", "62CC", "6223", "4335", "71CC", "5621", "6116", "4931", "511C", "8122", "5239", "3131", "2382", "6244", "321C", "236C", "4921", "3332", "4663", "5617", "8132", "5612", "3149", "3322", "2221", "5182", "3379", "532C", "3274", "3351", "4351", "4884", "7131", "515C", "722C", "721C", "3141", "3341", "541C", "2389", "8123", "711C", "2123", "72CC", "433C", "6213", "4333", "5322", "1125", "5321", "3151", "238C", "435C", "4881", "621C", "11CC", "314C", "3369", "4683", "3345", "316C", "2379", "3361", "3241", "434C", "4862", "2381", "5414", "3336", "3169", "3333", "7112", "5191", "5225", "7121", "3325", "524C", "3212", "5232", "3133", "4371", "483C", "3346", "5112", "2222", "531C", "523C", "6114", "2383", "6214", "4664", "437C", "461C", "4855", "8129", "6241", "3335", "6115", "624C", "81CC", "713C", "813C", "4691", "5417", "4854", "3211", "4882", "7113", "7213", "811C", "5122", "812C", "3122", "6216", "4871", "3159", "623C", "492C", "7111", "6239", "2121", "5174", "1151", "5323", "6219", "6233", "466C", "4859", "487C", "4872", "6112", "465C", "5331", "4889", "115C", "463C", "6242", "4922", "7115", "4651", "6243", "6117", "4372", "2131", "7114", "4832", "7212", "6231", "6232", "3366", "1152", "5152"];
    const occupationCandidates = ["1111", "1112", "1113", "1121", "1122", "1129", "1131", "1132", "1133", "1134", "1135", "1211", "1212", "1221", "1222", "1223", "1224", "1225", "1226", "1311", "1312", "1313", "1314", "1315", "1321", "1322", "1323", "1324", "1411", "1412", "1421", "1422", "1423", "1511", "1512", "1521", "1522", "1523", "1524", "1525", "1526", "1611", "1612", "1613", "1614", "1615", "1619", "1621", "1622", "1623", "1624", "1629", "1711", "1712", "1721", "1722", "1723", "1999", "2111", "2112", "2113", "2121", "2122", "2123", "2131", "2132", "2133", "2134", "2135", "2141", "2142", "2143", "2144", "2145", "2151", "2152", "2153", "2161", "2162", "2163", "2164", "2171", "2172", "2173", "2174", "2175", "2211", "2212", "2221", "2222", "2223", "2231", "2232", "2233", "2234", "2241", "2242", "2251", "2252", "2253", "2254", "2261", "2262", "2263", "2271", "2272", "2281", "2311", "2312", "2321", "2322", "2331", "2332", "2333", "2334", "2335", "2341", "2342", "2343", "2391", "2411", "2412", "2413", "2421", "2422", "2423", "2424", "2425", "2426", "2427", "2428", "2511", "2512", "2513", "2514", "2521", "2522", "2523", "2524", "2531", "2532", "2533", "2541", "2542", "2543", "2544", "2551", "2552", "2553", "2561", "2562", "2563", "2611", "2612", "2613", "2614", "2621", "2622", "2623", "2624", "2625", "2630", "2631", "2632", "2633", "2634", "2635", "2636", "2637", "2638", "2639", "2640", "2641", "2642", "2643", "2644", "2645", "2646", "2649", "2651", "2652", "2653", "2654", "2655", "2661", "2662", "2711", "2712", "2713", "2714", "2715", "2716", "2811", "2812", "2813", "2814", "2815", "2816", "2817", "2821", "2822", "2823", "2824", "2825", "2826", "2827", "2991", "2992", "3101", "3111", "3112", "3113", "3114", "3115", "3121", "3122", "3131", "3132", "3141", "3142", "3201", "3211", "3212", "3213", "3221", "3222", "3231", "3232", "3999", "4111", "4201", "4211", "4212", "4213", "4214", "4221", "4222", "4223", "4224", "4231", "4232", "4233", "4311", "4312", "4999", "5101", "5111", "5112", "5113", "5114", "5115", "5116", "5201", "5211", "5212", "5213", "5221", "5222", "5231", "5241", "5242", "5251", "5252", "5253", "5254", "5301", "5311", "5312", "5313", "5314", "5401", "5411", "5412", "5413", "5999", "6101", "6111", "6112", "6113", "6114", "6115", "6116", "6117", "6119", "6121", "6122", "6123", "6124", "6125", "6126", "6127", "6128", "6131", "6201", "6211", "6212", "6213", "6221", "6222", "6223", "6224", "6225", "6226", "6227", "6231", "6311", "7101", "7111", "7112", "7113", "7121", "7122", "7123", "7131", "7132", "7133", "7134", "7135", "7201", "7211", "7212", "7213", "7214", "7221", "7222", "7223", "7301", "7311", "7312", "7313", "7321", "7322", "7323", "7331", "7332", "7341", "7342", "7343", "7344", "7351", "7352", "7353", "7401", "7411", "7412", "7501", "7511", "7512", "7513", "7514", "7515", "7516", "7517", "7601", "7611", "7612", "7613", "7614", "7999", "8101", "8111", "8112", "8113", "8114", "8121", "8122", "8123", "8131", "8132", "8133", "8134", "8135", "8141", "8142", "8143", "8144", "8145", "8151", "8152", "8153", "8154", "8155", "8161", "8162", "8163", "8171", "8172", "8173", "8181", "8199", "8201", "8211", "8212", "8301", "8311", "8321", "8322", "8323", "8324", "8331", "8341", "8342", "8343", "8344", "8349", "8351", "8352", "8999", "9111", "9112", "9113", "9121", "9122", "9124", "9211", "9212", "9221", "9222", "9231", "9232", "9233", "9234", "9235", "9236", "9237", "9239", "9311", "9312", "9321", "9322", "9331", "9332", "9411", "9511", "9512", "9521", "9601", "9611", "9621", "9622", "9623", "9624", "9631", "9632", "9633", "9641", "9642", "9643", "9651", "9661", "9662", "9663", "9711", "9712", "9713", "9721", "9722", "9723", "9731", "9733", "9899", "9999"];

    if (path.includes("geo")) {
      return geoCandidates[Math.floor(Math.random() * geoCandidates.length)];
    }
    if (path.includes("product")) {
      return productCandidates[Math.floor(Math.random() * productCandidates.length)];
    }
    if (path.includes("institution")) {
      return institutionCandidates[Math.floor(Math.random() * institutionCandidates.length)];
    }
    if (path.includes("occupation")) {
      return occupationCandidates[Math.floor(Math.random() * occupationCandidates.length)];
    }
    if (path.includes("industry")) {
      return industryCandidates[Math.floor(Math.random() * industryCandidates.length)];
    }
    return null;
  }

  /** */
  function checkForId(nextState, replace) {
    const {location, params} = nextState;
    const reqestedUrl = location.pathname;
    if (!params.id) {
      const randId = genRandId(reqestedUrl);
      const nextUrl = reqestedUrl.slice(-1) === "/" ? `${reqestedUrl}${randId}` : `${reqestedUrl}/${randId}`;
      return replace({pathname: nextUrl});
    }
    return null;
  }

  return (
    <Route path="/" component={App} history={browserHistory}>
      <IndexRoute component={Home} />
      <Route path="/:lang" component={Home} />
      <Route exact path="/cms/admin" component={Builder} />
      <Route path="/:lang/explore" component={Explore} />
      <Route path="/loading" component={Loading} />
      <Route exact path="/:lang/login" component={Login} />
      <Route exact path="/:lang/signup" component={SignUp} />
      <Route exact path="/:lang/eci/explore" component={ECIExplorer} />
      <Route path="/:lang/profile/:slug(/:id)" component={Profile} onEnter={checkForId} />
      {/* stubs */}
      <Route path="/:lang/about(/:page)" component={About} />
      <Route path="/:lang/data" component={Data} />
      <Route path="/:lang/coronavirus(/:slug)" component={Covid} />
      {/* 404 */}
      <Route path="*" component={Error} />
    </Route>
  );
}
