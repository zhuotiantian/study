// var lengthOfLongestSubstring = function (s) {
//   if (s.length == 1) {
//     return 1
//   } else {
//     let arr = s.split("");
//     let result = 0;
//     for (var i = 0; i < arr.length; i++) {
//       let _item = arr[i];
//       for (var j = i + 1; j < arr.length; j++) {
//         if (_item.indexOf(arr[j]) < 0) {
//           _item += arr[j];
//         } else {
//           break;
//         }
//       };
//       if (result < _item.length) {
//         result = _item.length;
//       }
//     };

//     return result
//   };
// }
// console.log(lengthOfLongestSubstring("dvdf"));


// var lengthOfLongestSubstring = function (s) {
//   let len = 0;
//   let val = '';
//   for (let i = 0; i < s.length; i++) {
//     if (val.indexOf(s[i]) === -1) {
//       val = val + s[i];
//       if (val.length > len) {
//         len = val.length;
//       }
//     } else {
//       val = val + s[i];
//       let index = val.indexOf(s[i]);
//       val = val.slice(index + 1);
//     }
//   }
//   return len;
// };

var longestPalindrome = function (s) {
  //当s为单个字符时一定是回文
  if (s.length <= 1) {
    return s
  } else if (s.length === 2) { //当s为两个字符时：若两个字符相等，则s为最长回文子串，若不相等，s的任意子串为回文子串
    if (s[0] === s[1]) {
      return s
    } else {
      return s[0]
    }
  } else {
    //动态规划算法
    // let len = s.length;
    // let dp = [],
    //   str = s[0] || "",
    //   maxLen = 0;
    // for (var i = 0; i < len; i++) {
    //   dp[i] = new Array(len);
    // };
    // //区间慢慢放大
    // for (let r = 0; r < s.length; r++) {
    //   for (let l = 0; l < r; l++) {
    //     //状态转移：
    //     //当l-r<=2时，即s[l,r]的长度小于等于3时，只要s[l]===s[r]，则该子串一定是回文子串
    //     //当l-r>2时，需要满足s[l]===s[r]并且dp[l+1][r-1]===true两个条件才能判定s[l,r]为回文子串
    //     if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
    //       dp[l][r] = true;
    //       if (r - l + 1 > maxLen) {
    //         maxLen = r - l + 1;
    //         str = s.substring(l, r + 1);
    //       }
    //     }
    //   }
    // };
    // return str


    //中心扩展算法
    let result = '';
    /**
     *扩散坐标
     */
    var calPalindromeIndex = function (left, right, s) {
      let len = s.length;
      while (left >= 0 && right < len && s[left] == s[right]) {
        left--;
        right++;
      }
      return {
        left: left + 1,
        right: right
      }
    };
    for (let i = 0, len = s.length; i < len; i++) {
      let even = '';
      let odd = '';
      if (s[i] == s[i + 1]) {
        //经过当前位与下一位判断已构成回文，扩散位直接从下一位开始，可以提速
        let evenIndex = calPalindromeIndex(i - 1, i + 2, s);
        even = s.substring(evenIndex.left, evenIndex.right);

      }
      let oddIndex = calPalindromeIndex(i - 1, i + 1, s);
      odd = s.substring(oddIndex.left, oddIndex.right);
      let re = odd.length > even.length ? odd : even;
      result = result.length > re.length ? result : re;
    }
    return result;
  }
};
console.log(longestPalindrome("cddb"));
