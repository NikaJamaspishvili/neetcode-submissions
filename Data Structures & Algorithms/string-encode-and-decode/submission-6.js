class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ",**&#@!Ff3dedv()empty"
        return strs.join(",**&#@!Ff3dedv()")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        switch(str){
            case ",**&#@!Ff3dedv()empty":
                return []
            default:
                return str.split(",**&#@!Ff3dedv()")

        }
    }
}
