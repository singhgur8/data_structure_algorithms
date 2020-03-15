class Solution(object):
    def countPrimes(self, n):
        count = 0
        isPrime = self.isPrime()
        for i in range(n):
            if (isPrime(i, n)):
                count += 1
        return count
   
    def isPrime(self):
        memo = {}
        
        def primes(num, limit):
            if num == 0 or num == 1:
                return False
            if num not in memo:
                for i in range(num,limit,num):
                    memo[i] = True
                return True
            else:
                return False
        return primes

# will need to import math to run this in cli