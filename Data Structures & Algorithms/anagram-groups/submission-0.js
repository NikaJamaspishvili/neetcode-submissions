class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charCounts = {}

        for(let i=0;i<strs.length;i++){
            let arr = new Array(28).fill(0)

            for(const char of strs[i]){
                const index = char.charCodeAt(0) - 97;
                arr[index]+=1;
            }
            const stringified = arr.join(",");
            if (charCounts[stringified]){
                charCounts[stringified].push(strs[i])
            }else{
                charCounts[stringified] = [strs[i]]
            }
        }

        return Object.values(charCounts)
    }
}
