class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dictS = {}
        dictT = {}

        if len(s) != len(t):
            return False

        for char in s:
            if dictS.get(char):
                dictS[char] += 1
            else:
                dictS[char] = 1

        for char in t:
            if dictT.get(char):
                dictT[char] += 1
            else:
                dictT[char] = 1

        print(dictS, dictT)
        for key,value in dictS.items():
            if dictT.get(key) != value:
                return False
        
        return True