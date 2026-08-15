class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # loop array once and store every element with their indexes in hashmap.
        # make a hasmap and store every number from array in there. key = number, value:index
        # loop array again and for every number find target - number pair in hashmap. if it exists return the indexes.

        dictN = {}

        for index,value in enumerate(nums):
            dictN[value] = index
        
        for index,value in enumerate(nums):
            secNumber = target - value
            if  secNumber in dictN and dictN[secNumber] != index:
                if index < dictN[secNumber]:
                    return [index,dictN[secNumber]]
                else:
                    return [dictN[secNumber],index]

        