class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // gadavuarot da gavigot yoveli ricxvi ramdenjer meordeba. hashmapis daxmarebit
        let hashmap = {}
        for(let i=0;i<nums.length;i++){
            if(hashmap[nums[i]] !== undefined){
                hashmap[nums[i]]+=1;
            }else{
                hashmap[nums[i]]=0;
            }
        }

        return Object.keys(hashmap).sort((a,b) => hashmap[b] - hashmap[a]).slice(0,k)
    }
}
