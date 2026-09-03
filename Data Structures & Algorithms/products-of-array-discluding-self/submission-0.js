class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]} 
     */
    productExceptSelf(nums) {
        // []
        // gadavuarot lists ertxel yoveli indexistvis. 

        let prefix = []
        let postfix = []

        let prefix_product = 1
        let postfix_product = 1

        for(let i=0;i<nums.length;i++){
            prefix_product*=nums[i];
            prefix.push(prefix_product);
        }

        for(let i=nums.length-1;i>=0;i--){
            postfix_product*=nums[i];
            postfix.unshift(postfix_product);
        }


        let finalarr = []

        for(let i=0;i<nums.length;i++){
            let element;
            if(i === 0){
               element = postfix[i+1];
            }else if(i === nums.length - 1){
                element = prefix[i-1];
            }else{   
                element = prefix[i-1] * postfix[i+1];
            }

            finalarr.push(element)
        }

        return finalarr;
    }
}
