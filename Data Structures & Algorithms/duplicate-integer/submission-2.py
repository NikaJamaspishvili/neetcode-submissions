class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        numbers = {}

        for n in nums:
            if numbers.get(n):
                return True
            else:
                numbers[n] = 1

        return False
        
