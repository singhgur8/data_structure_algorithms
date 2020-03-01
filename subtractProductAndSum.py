class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        sums = 0
        products = 1
        strN = str(n)
        for char in strN:
            sums += int(char)
            products *= int(char)

        return products - sums